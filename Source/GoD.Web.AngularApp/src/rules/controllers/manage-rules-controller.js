(function () {
    angular
        .module('gameOfDrones.rules')
        .controller('ManageRulesController', manageRulesController);

    manageRulesController.$inject = ['rules', 'Upload'];

    function manageRulesController(rules, Upload) {
        var vm = this;

        vm.upload = upload;

        rules.query(loadRuleSets);

        function loadRuleSets(ruleSets) {
            vm.ruleSets = [];
            for (var i = 0; i < ruleSets.length; i++) {
                vm.ruleSets.push({ Name: ruleSets[i].Name, Rules: angular.fromJson(ruleSets[i].Rules) });
            }
        }

        function upload(file) {
            Upload.upload({
                url: 'http://localhost:5864/api/rules',
                data: { file: file }
            }).then(function (resp) {
                rules.query(loadRuleSets);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
    }
})()