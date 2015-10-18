(function () {
    angular
        .module('gameOfDrones.players', ['gameOfDrones.core'])
        .config(configRoutes);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/players/ranking', {
                templateUrl: 'src/players/views/ranking.html',
                controller: 'RankingController as rankingCtrl'
            });
    }
})()