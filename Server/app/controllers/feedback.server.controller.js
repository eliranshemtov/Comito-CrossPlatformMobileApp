var Feedback = require('mongoose').model('Feedback');

/**
 * Find the feedback by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.feedbackByID = function (req, res, next, id) {
    Feedback.findOne({_id: id}, function (err, feedback) {
            if (err) {
                console.log('No feedback ID found');
                return next(err);
            }
            else {
                console.log('feedback ID found');
                req.feedback = feedback;
                next();
            }
        }
    );
};
/**
 * Creates a new feedback
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
    console.log("Saving feedback");
    var feedback = new Feedback(req.body);
    feedback.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(feedback);
        }
    });
};
/**
 * List all of the feedbacks in the DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Feedback.find({}, function (err, feedback) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(feedback);
        }
    });
};
/**
 * Updates feedback by Id
 * @param req
 * @param res
 * @param next
 */
exports.update = function (req, res, next) {
    Feedback.findByIdAndUpdate(req.feedback._id, req.body, {new: true}, function (err, feedback) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(feedback);
        }
    });
};
/**
 * Delete the feedback by Id
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.feedback.remove(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(req.feedback);
        }
    })
};
/**
 * Return faq by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.feedback);
};

