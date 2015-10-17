(function () {
    angular
        .module('gameOfDrones.local', ['ngRoute', 'ngMaterial', 'gameOfDrones.core'])
        .config(configRoutes)
        .config(configReferee);

    function configRoutes($routeProvider) {
        $routeProvider.when('/local/selecplayers', {
            templateUrl: 'src/local/views/select-players.html',
            controller: 'SelectPlayersController as spCtrl'
        });
        $routeProvider.when('/local/game', {
            templateUrl: 'src/local/views/game.html',
            controller: 'LocalBattleController as battleCtrl'
        });
    }

    function configReferee(refereeProvider) {
        refereeProvider.setBaseUrl('http://localhost:5912/');
    }
})()