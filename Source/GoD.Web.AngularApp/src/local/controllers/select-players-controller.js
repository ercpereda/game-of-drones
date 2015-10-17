(function () {
    angular
        .module('gameOfDrones.local')
        .controller('SelectPlayersController', selectsPlayersController);

    function selectsPlayersController() {
        var vm = this;

        vm.player1 = 'player1';
        vm.player2 = 'player2';
        vm.startGame = startGame;

        function startGame() {
            
        }
    }
})()