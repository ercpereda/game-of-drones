describe('Ranking Service', function () {
    var ranking;
    var $httpBackend;
    var url;

    beforeEach(module('gameOfDrones.core'));

    beforeEach(inject(function ($injector) {
        ranking = $injector.get('ranking');
        $httpBackend = $injector.get('$httpBackend');
        url = '';

        $httpBackend.when('GET', url).respond({
            data: ['kamanchi-sly', 'el-eye', 'rola']
        });
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a GET request', function() {
        $httpBackend.expectGET(url);
        ranking.get();
        $httpBackend.flush();
    });

    it('should be run', function () {
        expect(true).toEqual(true);
    });
});