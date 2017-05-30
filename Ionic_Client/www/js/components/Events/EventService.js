comito.service('EventService', ['ApiService', function (ApiService) {

    var getUserEvents = function (userId) {
        ApiService.apiGet('/events/' + userId, function (err, events) {
            callback(err, events);
        });
    };

    var getAllEvents = function (callback) {
        ApiService.apiGet('/events', function (err, events) {
            callback(err, events);
        });
    };

    return {
        getUserEvents: getUserEvents,
        getAllEvents: getAllEvents
    }

}]);