(function() {
    angular
        .module('gameOfDrones.local')
        .controller('LocalBattleController', localBattleController);

    localBattleController.$inject = ['$routeParams', '$location', 'referee', 'rules'];

    function localBattleController($routeParams, $location, referee, rules) {
        var vm = this;

        if (!$routeParams.player1 || !$routeParams.player1 || !$routeParams.ruleSet)
            $location.path('/local/selectplayers');

        vm.player1Name = $routeParams.player1;
        vm.player2Name = $routeParams.player2;
        vm.currentPlayer = 1;
        vm.player1Play = '';
        vm.player1PlayImg = '';
        vm.player2PlayImg = '';
        vm.play = play;
        vm.player1Score = 0;
        vm.player2Score = 0;
        vm.winner = 0;
        vm.rounds = [];
        vm.notification = 'Turn of ' + vm.player1Name;
        vm.player1Color = '';
        vm.player2Color = '';
        vm.endRound = false;
        vm.inBattle = true;

        var rules = rules.get({ id: $routeParams.ruleSet }, function () {
            vm.rules = angular.fromJson(rules.Rules);
        });        
       
        function play(option, img) {
            if (vm.currentPlayer === 1) {                
                vm.player1Play = option;
                vm.player1PlayImg = img;
                vm.currentPlayer = 2;
                vm.notification = 'Turn of ' + vm.player2Name;
                vm.inBattle = true;
                vm.endRound = false;
            }
            else if (vm.currentPlayer === 2) {
                
                referee.decide(vm.player1Play, option, $routeParams.ruleSet).then(
                    function (data) {
                        vm.winner = data;
                        if (vm.winner === 1) {
                            vm.player1Score += 1;
                            vm.rounds.push(vm.player1Name);
                            vm.player1Color = 'green';
                            vm.player2Color = 'red';
                        }
                        else if (vm.winner === 2) {
                            vm.player2Score += 1;
                            vm.rounds.push(vm.player2Name);
                            vm.player1Color = 'red';
                            vm.player2Color = 'green';
                        } else {
                            vm.rounds.push('------');
                            vm.player1Color = 'blue';
                            vm.player2Color = 'blue';
                        }

                        if (vm.player1Score == 3 || vm.player2Score == 3) {
                            referee.declareWinner(vm.player1Name, vm.player2Name, vm.player1Score, vm.player2Score).then(
                                function() {
                                    $location.path('/local/declarewinner/' + (vm.player1Score == 3 ? vm.player1Name : vm.player2Name));
                                },
                                function() {
                                }
                            );
                        }

                        vm.currentPlayer = 1;
                        vm.notification = 'Turn of ' + vm.player1Name;
                        vm.inBattle = false;
                        vm.endRound = true;
                        vm.player2PlayImg = img;
                    },
                    function (status) {
                        console.log(status);
                    }
                );
            }
        };
    }
})()