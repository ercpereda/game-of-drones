(function() {
    angular
        .module('gameOfDrones.core')
        .provider('referee', refereeProvider);

    function refereeProvider() {
        var provider = {
            baseUrl: 'http://localhost:3000/',
            decideUrl: 'api/Referee/Decide',
            setBaseUrl: function (url) { provider.baseUrl = url; },
            setDecideUrl: function (url) { provider.decideUrl = url; },
            $get: refereeService
        }

        refereeService.$inject = ['$http', '$q', '$log'];

        return provider;        

        function refereeService($http, $q, $log) {
            var service = {
                decide: decide
            }

            return service;

            function decide(player1Move, player2Move) {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: provider.baseUrl + provider.decideUrl,
                    params: { player1Move: player1Move, player2Move: player2Move }
                }).success(function(data, status, headers, cfg) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, cfg) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }
        }
    }
})();