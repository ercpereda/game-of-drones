(function() {
    angular
        .module('gameOfDrones', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'gameOfDrones.local', 'gameOfDrones.rules', 'gameOfDrones.players'])
        .config(configTheme)
        .config(configRoutes);

    function configRoutes($routeProvider) {
        $routeProvider
            .otherwise({ redirectTo: '/local/selectplayers' });
    }

    function configTheme($mdThemingProvider) {
        var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
        });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');
        $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey');
    }
})()