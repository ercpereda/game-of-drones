(function() {
    angular
        .module('gameOfDrones.core')
        .directive('mdFileUpload', fileUploadDirective);

    function fileUploadDirective() {
        var directive = {
            restrict: 'E',
            template: '<input id="mdFileUploadFileInput" name="file" ngf-select="upload($file)" type="file" class="ng-hide"><a id="mdFileUploadUploadButton" class="md-button md-raised md-primary"> Choose Files </a>',
            replace: false,
            link: link
        }

        return directive;

        function link(scope, element, attrs) {            
            var input = element.find('#mdFileUploadFileInput');
            var button = element.find('#mdFileUploadUploadButton');
            console.log(element.find('#mdFileUploadUploadButton'));

            if (input.length && button.length) {
                button.click(function (e) {
                    input.click();
                });
            }
        }
    }
})()