comito.service('languagesCountries', function (ApiService) {

    var getLanguages = function (callback) {
        ApiService.apiGet('/language', function (err, counties) {
            callback(err, counties);
        })
    };
    var getCountries = function (callback) {
        ApiService.apiGet('/countries', function (err, countries) {
            callback(err, countries);
        })
    };
    return {
        getLanguages: getLanguages,
        getCountries: getCountries
    }
});