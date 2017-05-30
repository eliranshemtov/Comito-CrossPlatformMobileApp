
var LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User'),
    UserCtrl = require("../../app/controllers/users.server.controller");

/**
 * Defines the authentication strategy
 * @param passport
 */
module.exports = function (passport) {

    passport.use('signup', new LocalStrategy({
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, username, password, done) {
            process.nextTick(function () {
                // find a user in Mongo with provided username
                User.findOne({'username': username}, function (err, user) {
                    // In case of any error, return using the done method
                    if (err) {
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        return done(null, user);
                    } else {
                        // if there is no user with that email
                        // create the user
                        console.log(req.body.fbToken);
                        console.log(username);
                        console.log(password);

                        UserCtrl.CreateUserByFbToken(req.body.fbToken, username, password, function (err, user) {
                                return done(err, user);
                        });
                    }
                });
            });
        }));

};
