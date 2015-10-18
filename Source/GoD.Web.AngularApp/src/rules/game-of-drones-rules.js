(function() {
    angular
        .module('gameOfDrones.rules', ['gameOfDrones.core'])
        .config(configRoutes);

    function configRoutes($routeProvider) {
        $routeProvider
            .when('/rules/manage', {
                templateUrl: 'src/rules/views/manage-rules.html',
                controller: 'ManageRulesController as rulesCtrl'
            });
    }
})()