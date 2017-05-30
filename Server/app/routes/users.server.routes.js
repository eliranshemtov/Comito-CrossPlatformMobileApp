/**
 *
 * @type {exports|module.exports}
 */
var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');

module.exports = function (app) {

    app.post('/signup', passport.authenticate('signup'), function (req, res) {
        res.status(200).json({id: req.user._id});
    });

    //app.use(users.isLoggedIn);


    app.get('/logout', users.logout);

    app.get('/is-authenticated/', function (req, res) {
        console.log(req.isAuthenticated());
        res.json({isAuthenticated: req.isAuthenticated()})
    })

};