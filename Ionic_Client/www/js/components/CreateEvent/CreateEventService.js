comito.service('CreateEventService', ['ApiService', function (ApiService) {
    var createEvent = function (event, callback) {
        ApiService.apiPost('/event', event, function (err, event) {
            callback(err, event);
        })
    };

    return {
        createEvent: createEvent
    }

}]);