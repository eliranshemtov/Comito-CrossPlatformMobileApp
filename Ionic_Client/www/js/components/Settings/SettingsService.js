comito.service('SettingsService', ['ApiService', function (ApiService) {

    var getUserSettings = function (userId, callback) {
        ApiService.apiGet('/userSettings/' + userId, function (err, settings) {
            callback(err, settings);
        });
    };

    var getUserSettings = function (userSetting, callback) {
        ApiService.apiPost('/userSettings', userSetting, function (err, userSetting) {
            callback(err, userSetting);
        })
    };

    return {
        getUserSettings: getUserSettings,
        getUserSettings: getUserSettings
    }

}]);