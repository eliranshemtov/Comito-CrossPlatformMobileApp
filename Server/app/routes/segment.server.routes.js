var segment = require('../../app/controllers/segment.server.controller');

module.exports = function (app) {

    app.route('/segments')
        .post(segment.create)
        .get(segment.list);

    app.route('/segments/:segmentId')
        .get(segment.read)
        .post(segment.update);

    app.route('/del-segments/:segmentId')
        .post(segment.delete);

    app.param('segmentId', segment.eventByID);
};