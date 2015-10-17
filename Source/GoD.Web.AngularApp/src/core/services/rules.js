(function () {
    angular
        .module('gameOfDrones.core')
        .provider('rules', rulesProvider);

    function rulesProvider() {
        var provider = {
            baseUrl: 'http://localhost:3000/',
            rulesUrl: 'api/rules/',
            setBaseUrl: function (url) { provider.baseUrl = url; },
            setRulesUrl: function (url) { provider.rulesUrl = url; },
            $get: rulesService
        }

        rulesService.$inject = ['$resource'];

        return provider;

        function rulesService($resource) {
            return $resource(provider.baseUrl + provider.rulesUrl + ':id');
        }
    }
})()