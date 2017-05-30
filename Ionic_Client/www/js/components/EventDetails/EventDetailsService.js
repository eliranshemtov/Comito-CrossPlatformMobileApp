comito.service('EventDetailsService', ['ApiService', function (ApiService) {

    var getEventDetails = function (eventId, callback) {
        ApiService.apiGet('/event/' + eventId, function (err, eventDetails) {
            callback(err, eventDetails);
        })
    };

    return {
        getEventDetails: getEventDetails
    }
}]);
