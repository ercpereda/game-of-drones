(function () {
    angular
        .module('gameOfDrones.local')
        .controller('WinnerDeclarationController', winnerDeclarationController);

    winnerDeclarationController.$inject = ['$routeParams'];

    function winnerDeclarationController($routeParams) {
        var vm = this;

        vm.winner = $routeParams.player;
    }
})()