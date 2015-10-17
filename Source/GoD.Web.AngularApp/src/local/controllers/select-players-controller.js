(function () {
    angular
        .module('gameOfDrones.local')
        .controller('SelectPlayersController', selectsPlayersController);

    selectsPlayersController.$inject = ['$log'];

    function selectsPlayersController($log) {
        var vm = this;

        vm.player1 = 'player1';
        vm.player2 = 'player2';
        vm.startGame = startGame;

        function startGame() {
            $log.info('start game');
        }
    }
})()