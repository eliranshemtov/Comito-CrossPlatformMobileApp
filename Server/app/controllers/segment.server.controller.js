
var Segment = require('mongoose').model('Segment');


/**
 * Find the segment by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.eventByID = function (req, res, next, id) {
    Segment.findOne({_id: id}, function (err, segment) {
            if (err) {
                console.log('No segment ID found');
                return next(err);
            }
            else {
                console.log('segment ID found');
                req.segment = segment;
                next();
            }
        }
    );
};
/**
 * Create a new segment
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
    var segment = new Segment(req.body);
    segment.save(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(segment);
        }
    });
};
/**
 * List all segments in DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Segment.find({}, function (err, segments) {
        if (err) {
            return next(err);
        }
        else {
            res.json(segments);
        }
    });
};
/**
 * Updates a segment by Id
 * @param req
 * @param res
 * @param next
 */
exports.update = function (req, res, next) {
    Segment.findByIdAndUpdate(req.segment._id, req.body, {new: true}, function (err, segment) {
        if (err) {
            return next(err);
        }
        else {
            res.json(segment);
        }
    });
};
/**
 * Delete a segment By Id
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.segment.remove(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.segment);
        }
    })
};
/**
 * Return the user by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.segment);
};

