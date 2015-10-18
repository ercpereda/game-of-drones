(function () {
    angular
        .module('gameOfDrones.local')
        .controller('SelectPlayersController', selectsPlayersController);

    selectsPlayersController.$inject = ['$rootScope', '$location', 'rules'];

    function selectsPlayersController($rootScope, $location, rules) {
        var vm = this;

        vm.player1 = 'player1';
        vm.player2 = 'player2';
        vm.startGame = startGame;

        vm.ruleSets = rules.query();

        function startGame() {
            console.log(vm.rules);
            $rootScope.player1 = vm.player1;
            $rootScope.player2 = vm.player2;
            $rootScope.ruleSet = vm.ruleSet;

            $location.path('/local/game');
        }
    }
})()