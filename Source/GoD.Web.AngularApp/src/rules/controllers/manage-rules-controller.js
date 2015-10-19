(function () {
    angular
        .module('gameOfDrones.rules')
        .controller('ManageRulesController', manageRulesController);

    manageRulesController.$inject = ['rules', 'Upload', '$mdToast'];

    function manageRulesController(rules, Upload, $mdToast) {
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
                $mdToast.show(
                    $mdToast.simple()
                        .content('Rules uploaded')
                        .position('top right')
                        .hideDelay(5000)
                );
                rules.query(loadRuleSets);
            }, function (resp) {
                $mdToast.simple()
                        .content('Rules not uploaded: Something was wrong')
                        .position('top right')
                        .hideDelay(5000)
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
    }
})()