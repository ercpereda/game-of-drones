(function () {
    angular
        .module('gameOfDrones.rules')
        .controller('ManageRulesController', manageRulesController);

    manageRulesController.$inject = ['rules'];

    function manageRulesController(rules) {
        var vm = this;

        var ruleSets = rules.query(function () {
            vm.ruleSets = [];
            for (var i = 0; i < ruleSets.length; i++) {
                vm.ruleSets.push({ Name: ruleSets[i].Name, Rules: angular.fromJson(ruleSets[i].Rules) });
            }
        });
    }
})()