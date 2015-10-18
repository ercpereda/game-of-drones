(function() {
    angular
        .module('gameOfDrones')
        .controller('AppMainController', appMainController);

    appMainController.$inject = ['$mdSidenav', '$location'];

    function appMainController($mdSidenav, $location) {
        var vm = this;

        vm.toggleSidenav = function (sideNavId) { $mdSidenav(sideNavId).toggle(); }
        vm.go = function(url) { $location.path(url); }

        vm.menu = [
            {
                name: "Game",
                items: [
                  { name: "Star Game", url: "local/selectplayers", icon: "gamepad" }
                ]
            },
            {
                name: "Players",
                items: [
                    { name: "Ranking", url: "players/ranking", icon: "group" }
                ]
            },
            {
                name: "Settings",
                items: [
                    { name: "Rules Set", url: "rules/manage", icon: "settings" }
                ]
            }
        ];
    }
})()