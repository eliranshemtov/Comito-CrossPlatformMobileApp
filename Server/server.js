process.env.NODE_ENV = process.env.NODE_ENV || 'development';
/**
 * Ataching all the config modules ans starts the server
 * @type {*|exports|module.exports}
 */
var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport'),
    init = require('./config/init_files/init');


var db = mongoose(),
    app = express(),
    passport = passport();

app.listen(config.port);
init();
module.exports = app;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);