/**
 * Attache all of the model schema
 * @type {*|exports|module.exports}
 */
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function () {
    var db = mongoose.connect(config.db);
    require('../app/models/faq.server.model');
    require('../app/models/user.server.model');
    require('../app/models/tags.server.model');
    require('../app/models/tags.server.model');
    require('../app/models/event.server.model');
    require('../app/models/review.server.model');
    require('../app/models/segment.server.model');
    require('../app/models/feedback.server.model');
    require('../app/models/countries.server.model');
    require('../app/models/user.info.server.model');
    require('../app/models/language.server.model');
    require('../app/models/user.settings.server.model');
    require('../app/models/feedback.subject.server.model');
    return db;
};