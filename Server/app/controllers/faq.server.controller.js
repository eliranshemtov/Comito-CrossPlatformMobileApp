var Faq = require('mongoose').model('Faq');

/**
 * Find the faq by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.faqByID = function (req, res, next, id) {
    Faq.findOne({_id: id}, function (err, faq) {
            if (err) {
                console.log('No faq ID found');
                return next(err);
            }
            else {
                console.log('faq ID found');
                req.faq = faq;
                next();
            }
        }
    );
};
/**
 * Creates a new faq
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
    console.log("Saving faq");
    var faq = new Faq(req.body);
    faq.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(faq);
        }
    });
};
/**
 * List all of the faqs in the DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Faq.find({}, function (err, faqs) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(faqs);
        }
    });
};
/**
 * Updates faq by Id
 * @param req
 * @param res
 * @param next
 */
exports.update = function (req, res, next) {
    Faq.findByIdAndUpdate(req.faq._id, req.body, {new: true}, function (err, faq) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(faq);
        }
    });
};
/**
 * Delete the faq by Id
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.faq.remove(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(req.faq);
        }
    })
};
/**
 * Return faq by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.faq);
};

