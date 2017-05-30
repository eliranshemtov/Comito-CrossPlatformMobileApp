var tags = require('../../app/controllers/tags.server.controller');

module.exports = function (app) {

    app.route('/tags')
        .post(tags.create)
        .get(tags.list);

    app.route('/tags/:tagsId')
        .get(tags.read)
        .post(tags.update);

    app.route('/del-tags/:tagsId')
        .post(tags.delete);

    app.param('tagsId', tags.tagsByID);
};