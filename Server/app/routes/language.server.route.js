var tags = require('../../app/controllers/language.server.controller');

module.exports = function (app) {

    app.route('/language')
        .get(tags.list);

    app.route('/language/:languageId')
        .get(tags.read);



    app.param('languageId', tags.languageByID);
};