comito.service('ProfileService', ['ApiService', function (ApiService) {

    var getUserProfileInfo = function (userId, callback) {

        ApiService.apiGet('/user/profileInfo/' + userId, function (err, profileInfo) {
            callback(err, profileInfo);
        })
    };

    return {
        getUserProfileInfo: getUserProfileInfo
    }

}]);