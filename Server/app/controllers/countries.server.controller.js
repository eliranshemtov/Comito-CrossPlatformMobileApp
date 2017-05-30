var Event = require('mongoose').model('Countries');

/**
 * Find the Countries by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.CountryByID = function (req, res, next, id) {
    Event.findOne({_id: id}, function (err, Country) {
            if (err) {
                console.log('No Country ID found');
                return next(err);
            }
            else {
                console.log('Country ID found');
                req.Country= Country;
                next();
            }
        }
    );
};

/**
 * List all of the Countries in the DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Event.find({}, function (err, Countries) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(Countries);
        }
    });
};

/**
 * Return Countries by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.Country);
};

