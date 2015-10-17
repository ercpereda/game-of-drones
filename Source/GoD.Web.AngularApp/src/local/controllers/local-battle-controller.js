(function() {
    angular
        .module('gameOfDrones.local')
        .controller('LocalBattleController', localBattleController);

    localBattleController.$inject = ['$rootScope', 'referee'];

    function localBattleController($rootScope, referee) {
        var vm = this;

        vm.player1Name = $rootScope.player1;
        vm.player2Name = $rootScope.player2;
        vm.currentPlayer = 1;
        vm.player1Play = '';
        vm.play = play;
        vm.player1Score = 0;
        vm.player2Score = 0;
        vm.winner = 0;
        vm.rounds = [];

        function play(option) {
            console.log(option);
            if (vm.currentPlayer === 1) {
                vm.player1Play = option;
                vm.currentPlayer = 2;
            }
            else if (vm.currentPlayer === 2) {
                vm.currentPlayer = 1;
                referee.decide(vm.player1Play, option).then(
                    function (data) {
                        vm.winner = data;
                        if (vm.winner === 1) {
                            vm.player1Score += 1;
                            vm.rounds.push(vm.player1Name);
                        }
                        else if (vm.winner === 2) {
                            vm.player2Score += 1;
                            vm.rounds.push(vm.player2Name);
                        } else {
                            vm.rounds.push('------');
                        }
                    },
                    function (status) {
                        console.log(status);
                    }
                );
            }
        };

    }
})()