(function () {
    angular
        .module('gameOfDrones.local')
        .controller('SelectPlayersController', selectsPlayersController);

    selectsPlayersController.$inject = ['$rootScope', '$location'];

    function selectsPlayersController($rootScope, $location) {
        var vm = this;

        vm.player1 = 'player1';
        vm.player2 = 'player2';
        vm.startGame = startGame;

        function startGame() {
            $rootScope.player1 = vm.player1;
            $rootScope.player2 = vm.player2;

            $location.path('/local/game');
        }
    }
})()