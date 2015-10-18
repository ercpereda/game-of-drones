(function () {
    angular
        .module('gameOfDrones.local', ['ngRoute', 'ngMaterial', 'gameOfDrones.core'])
        .config(configRoutes)
        .config(configReferee)
        .config(configRules);

    function configRoutes($routeProvider) {
        $routeProvider.when('/local/selectplayers', {
            templateUrl: 'src/local/views/select-players.html',
            controller: 'SelectPlayersController as spCtrl'
        });
        $routeProvider.when('/local/game', {
            templateUrl: 'src/local/views/game.html',
            controller: 'LocalBattleController as battleCtrl'
        });
        $routeProvider.when('/local/declarewinner/:player', {
            templateUrl: 'src/local/views/winner-declaration.html',
            controller: 'WinnerDeclarationController as winnerCtrl'
        });
    }

    function configReferee(refereeProvider) {
        refereeProvider.setBaseUrl('http://localhost:5864/');
    }

    function configRules(rulesProvider) {
        rulesProvider.setBaseUrl('http://localhost:5864/');
    }
})()