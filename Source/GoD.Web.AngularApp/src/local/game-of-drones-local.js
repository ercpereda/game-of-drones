(function () {
    angular
        .module('gameOfDrones.local', ['ngRoute', 'ngMaterial'])
        .config(configRoutes);

    function configRoutes($routeProvider) {
        $routeProvider.when('/local/selecplayers', {
            templateUrl: 'src/local/views/select-players.html',
            controller: 'SelectPlayersController as spCtrl'
        });
    }
})()