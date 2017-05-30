var Event = require('mongoose').model('Review');

/**
 * Find the review by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.reviewByID = function (req, res, next, id) {
    Event.findOne({_id: id}, function (err, event) {
            if (err) {
                console.log('No event ID found')
                return next(err);
            }
            else {
                console.log('Event ID found')
                req.event = event;
                next();
            }
        }
    );
};
/**
 * Create a new review
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
    console.log("Saving event");
    var event = new Event(req.body);
    event.save(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(event);
        }
    });
};
/**
 * List all reviews in DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Event.find({}, function (err, events) {
        if (err) {
            return next(err);
        }
        else {
            res.json(events);
        }
    });
};
/**
 * Updates review by Id
 * @param req
 * @param res
 * @param next
 */
exports.update = function (req, res, next) {
    Event.findByIdAndUpdate(req.event._id, req.body, {new: true}, function (err, event) {
        if (err) {
            return next(err);
        }
        else {
            res.json(event);
        }
    });
};
/**
 * Deletes review by Id
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.event.remove(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.event);
        }
    })
};
/**
 * Return review by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.event);
};