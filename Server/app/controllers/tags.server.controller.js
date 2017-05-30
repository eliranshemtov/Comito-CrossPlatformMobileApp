var Tag = require('mongoose').model('Tags');

/**
 * Find the tag by Id and attache it to the req
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.tagsByID = function (req, res, next, id) {
    Faq.findOne({_id: id}, function (err, tag) {
            if (err) {
                console.log('No tag ID found');
                return next(err);
            }
            else {
                console.log('tag ID found');
                req.tag = tag;
                next();
            }
        }
    );
};
/**
 * Creates a new tag
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
    console.log("Saving tag");
    var tag = new Tag(req.body);
    tag.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(tag);
        }
    });
};
/**
 * List all of the tag in the DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    Tag.find({}, function (err, tags) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(tags);
        }
    });
};
/**
 * Updates tag by Id
 * @param req
 * @param res
 * @param next
 */
exports.update = function (req, res, next) {
    Tag.findByIdAndUpdate(req.tag._id, req.body, {new: true}, function (err, tag) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(tag);
        }
    });
};
/**
 * Delete the tag by Id
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.tag.remove(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        else {
            res.json(req.tag);
        }
    })
};
/**
 * Return tag by Id
 * @param req
 * @param res
 */
exports.read = function (req, res) {

    res.json(req.tag);
};

