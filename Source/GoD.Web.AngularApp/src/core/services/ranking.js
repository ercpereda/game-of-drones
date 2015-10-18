(function () {
    angular
        .module('gameOfDrones.core')
        .provider('ranking', rankingProvider);

    function rankingProvider() {
        var provider = {
            baseUrl: 'http://localhost:3000/',
            rankingUrl: 'api/players/ranking',
            setBaseUrl: function (url) { provider.baseUrl = url; },
            setRankingUrl: function (url) { provider.rankingUrl = url; },
            $get: rankingService
        }

        rankingService.$inject = ['$http', '$q'];

        return provider;

        function rankingService($http, $q) {
            var service = {
                get: get
            }

            return service;

            function get() {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: provider.baseUrl + provider.rankingUrl
                }).success(function(data, status, headers, cfg) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, cfg) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }
        }
    }
})()