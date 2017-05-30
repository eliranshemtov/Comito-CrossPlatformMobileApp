comito.service('ApiService', ['$http', 'CONFIG', function ($http, CONFIG) {

    var baseUrl = CONFIG.SERVER;
    var apiPost = function (uri, params, callback) {

        console.log("About to post url: " + baseUrl + uri);
        console.log("Params: \n" + JSON.stringify(params));

        $http.post(baseUrl + uri, params).success(function (res) {
            callback(null, res);

        }).error(function (err) {
            callback(err);

        })
    };

    var apiGet = function (uri, callback) {
        console.log("About to get url: " + baseUrl + uri);
        $http.get(baseUrl + uri).success(function (res) {
                callback(null, res);
            })
            .error(function (err) {
                callback(err);
            });
    };

    return {
        apiPost: apiPost,
        apiGet: apiGet
    }
}]);