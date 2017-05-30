comito.service('SegmentService', ['ApiService', function (ApiService) {

    var getAllSegments = function (callback) {
        ApiService.apiGet('/segments', function (err, segments) {
            callback(err, segments);
        });
    };

    return {
        getAllSegments: getAllSegments
    }

}]);