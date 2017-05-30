var feedback = require('../../app/controllers/feedback.server.controller');

module.exports = function (app) {

    app.route('/feedback')
        .post(feedback.create)
        .get(feedback.list);

    app.route('/feedback/:feedbackId')
        .get(feedback.read)
        .post(feedback.update);

    app.param('feedbackId', feedback.feedbackByID);
};