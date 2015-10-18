(function () {
    angular
        .module('gameOfDrones.players')
        .controller('RankingController', rankingController);

    rankingController.$inject = ['ranking'];

    function rankingController(ranking) {
        var vm = this;

        ranking.get().then(
            function(data) {
                vm.rankingsUrl = data;
            },
            function(status) {
                
            }
        );
    }
})()