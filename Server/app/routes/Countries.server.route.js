var countries = require('../../app/controllers/countries.server.controller');

module.exports = function (app) {

    app.route('/countries')
        .get(countries.list);

    app.route('/countries/:countryId')
        .get(countries.read);



    app.param('countryId', countries.CountryByID);
};