comito.service('FeedbackService', ['ApiService', function (ApiService) {
    var sendFeedback = function (feedback, callback) {
        ApiService.apiPost('/feedback', feedback, function (err, feedback) {
            callback(err, feedback);
        })
    };

    return {
        sendFeedback: sendFeedback
    }
}]);