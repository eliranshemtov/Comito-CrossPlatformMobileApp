var event = require('../../app/controllers/event.server.controller');

module.exports = function (app) {
    //app.use(user.isLoggedIn);

    app.route('/events')
        .post(event.create)
        .get(event.list);

    app.route('/events/:eventId')
        .get(event.read)
        .post(event.update);

    app.route('/del-events/:eventId')
        .post(event.delete);

    app.param('eventId', event.eventByID);
};