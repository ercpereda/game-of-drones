(function() {
    angular
        .module('gameOfDrones.core')
        .provider('referee', refereeProvider);

    function refereeProvider() {
        var provider = {
            baseUrl: 'http://localhost:3000/',
            decideUrl: 'api/Referee/Decide',
            declareWinnerUrl: 'api/Referee/DeclareWinner',
            setBaseUrl: function (url) { provider.baseUrl = url; },
            setDecideUrl: function (url) { provider.decideUrl = url; },
            setDeclareWinnerUrl: function (ur) { provider.declareWinnerUrl = URL; },
            $get: refereeService
        }

        refereeService.$inject = ['$http', '$q', '$log'];

        return provider;        

        function refereeService($http, $q, $log) {
            var service = {
                decide: decide,
                declareWinner: declareWinner
            }

            return service;

            function decide(player1Move, player2Move, rulesetId) {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: provider.baseUrl + provider.decideUrl,
                    params: { player1Move: player1Move, player2Move: player2Move, ruleSetId: rulesetId }
                }).success(function(data, status, headers, cfg) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, cfg) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }

            function declareWinner(player1Name, player2Name, player1Score, player2Score) {
                var deferred = $q.defer();

                $http({
                    method: 'Post',
                    url: provider.baseUrl + provider.declareWinnerUrl,
                    data: { player1Name: player1Name, player2Name: player2Name, player1Score: player1Score, player2Score: player2Score }
                }).success(function(data, status, headers, cfg) {
                    deferred.resolve();
                }).error(function(data, status, headers, cfg) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }
        }
    }
})();