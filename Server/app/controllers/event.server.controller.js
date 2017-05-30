var Event = require('mongoose').model('Event');

/**
 * Find the event by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.eventByID = function (req, res, next, id) {
    Event.findOne({_id: id}, function (err, event) {
            if (err) {
                console.log('No event ID found');
                return next(err);
            }
            else {
                console.log('Event ID found');
                req.event = event;
                next();
            }
        }
    );
};
/**
 * Creates a new event
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
    console.log("Saving event");
    var event = new Event(req.body);
    event.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(event);
        }
    });
};
/**
 * List all of the events in the DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Event.find({}, function (err, events) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(events);
        }
    });
};
/**
 * Updates event by Id
 * @param req
 * @param res
 * @param next
 */
exports.update = function (req, res, next) {
    Event.findByIdAndUpdate(req.event._id, req.body, {new: true}, function (err, event) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(event);
        }
    });
};
/**
 * Delete the event by Id
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.event.remove(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(req.event);
        }
    })
};
/**
 * Return event by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.event);
};

