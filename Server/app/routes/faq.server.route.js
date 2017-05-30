var faq = require('../../app/controllers/faq.server.controller');

module.exports = function (app) {

    app.route('/faq')
        .post(faq.create)
        .get(faq.list);

    app.route('/faq/:faqId')
        .get(faq.read)
        .post(faq.update);

    app.param('faqId', faq.faqByID);
};