/**
 * Main module, defines all of the dependencies.
 * @type {*|exports|module.exports}
 */
var config = require('./config'),
    express = require('express'),
    passport = require('passport'),
    flash = require('connect-flash'),
    bodyParser = require('body-parser'),
    session = require('express-session');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.appSecret
    }));

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(function (req, res, next) {

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        next();
    });


    require('../app/routes/faq.server.route')(app);
    require('../app/routes/tags.server.route')(app);
    // require('../app/routes/review.server.routes')(app);
    require('../app/routes/language.server.route')(app);
    require('../app/routes/feedback.server.route')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/event.server.routes.js')(app);
    require('../app/routes/countries.server.route')(app);
    require('../app/routes/segment.server.routes.js')(app);

    return app;
};