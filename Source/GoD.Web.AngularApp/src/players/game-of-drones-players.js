(function () {
    angular
        .module('gameOfDrones.players', ['gameOfDrones.core'])
        .config(configRoutes)
        .config(configRanking);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/players/ranking', {
                templateUrl: 'src/players/views/ranking.html',
                controller: 'RankingController as rankingCtrl'
            });
    }

    function configRanking(rankingProvider) {
        rankingProvider.setBaseUrl('http://localhost:5864/');
    }
})()