var Event = require('mongoose').model('Language');

/**
 * Find the language by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.languageByID = function (req, res, next, id) {
    Event.findOne({_id: id}, function (err, language) {
            if (err) {
                console.log('No language ID found');
                return next(err);
            }
            else {
                console.log('language ID found');
                req.language= language;
                next();
            }
        }
    );
};

/**
 * List all of the languages in the DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Event.find({}, function (err, languages) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(languages);
        }
    });
};

/**
 * Return language by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.language);
};

