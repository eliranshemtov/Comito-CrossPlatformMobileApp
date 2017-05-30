/**
 * responsible of choosing the env we are working on
 * NODE_ENV enviorment variable is set to development (or production, altough not exist at the moment)
 * @type {*}
 */
module.exports = require('./env/' + process.env.NODE_ENV + '.js');