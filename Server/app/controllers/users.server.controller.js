var User = require('mongoose').model('User'),
    UserSettings = require('mongoose').model('UserInfo'),
    UserInfo = require('mongoose').model('UserSettings'),
    passport = require('passport'),
    config = require('../../config/config'),
    requestify = require('requestify');

/**
 * List all users in DB
 * @param req
 * @param res
 * @param next
 */
exports.list = function (req, res, next) {
    User.find({}, function (err, users) {
        if (err) {
            return next(err);
        }
        else {
            res.json(users);
        }
    });
};
/**
 * Returns the user by ID
 * @param req
 * @param res
 */
exports.read = function (req, res) {
    res.json(req.user);
};

/**
 * Delete user By ID
 * @param req
 * @param res
 * @param next
 */
exports.delete = function (req, res, next) {
    req.user.remove(function (err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.user);
        }
    })
};
/**
 * Logout
 * @param req
 * @param res
 */
exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};
/**
 * Check if user is logged in using passport
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.isLoggedIn = function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        console.log('user is authenticated');
        return next();
    }

    // if they aren't redirect them to the home page
    res.redirect('/');
};
/**
 * Creates a new user based on the FB access token passed from the client app,
 * If the user already exist, simply returns the user
 * @param fbToken
 * @param username
 * @param password
 * @param callback
 * @constructor
 */
exports.CreateUserByFbToken = function (fbToken, username, password, callback) {

    var path = config.path;
    var queryString = config.queryString;
    var parsed;
    //UserInfo
    var about;
    var lang;
    var likes;
    var pictureProfile;
    var gender;
    var birthday;
    var from;
    //User
    var name;
    var id = username; //user name should be set to fbresponse.profile.id

    //password
    console.log("About to send query to FB");
    console.log("Query URL: ");
    console.log(path + id + queryString + fbToken);

    var fbResponse = requestify.get(path + id + queryString + fbToken).then(function (body) {
        console.log("FB Response");
        console.log(JSON.stringify(body.body));

        parsed = JSON.parse(body.body);
        name = parsed.first_name + " " + parsed.last_name;
        about = "Hey there, I am " + parsed.first_name + " from " + parsed.hometown.name + " and I am using Comito. \n The best app for meeting new people in new places";
        likes = [parsed.books.data, parsed.movies.data, parsed.music.data];
        pictureProfile = "https://graph.facebook.com/v2.6/" + parsed.id + "/picture";
        gender = parsed.gender;
        birthday = parsed.birthday;
        from = parsed.hometown.name;
        lang = parsed.language;
        return {
            'name': parsed.first_name + " " + parsed.last_name,
            'email': parsed.email,
            'username': id,
            'about': about,
            'language': lang,
            'lookingFor': "Need to get",
            'visited': "Need to get",
            'pictureProfile': pictureProfile,
            'birthDay': birthday,
            'from': from,
            'likes': likes
        }
    }, function (err) {
        console.log("FB ERROR: ");
        console.log(err);
        return "FB ERROR " + err;
    });

    if (fbResponse.toString().indexOf("ERROR") > -1) {
        console.log(fbResponse);
    }
    else {
        console.log("About to create new user");
        var user = new User({
            'name': fbResponse.name,
            'email': fbResponse.email,
            'username': fbResponse.username,
            'password': password
        });

        console.log("About to save user");
        user.save(function (err) {
            console.log(err);
            callback(err);
        });
        console.log("About to create new user info model");
        var userInfo = new UserInfo({
            'owner': user._id,
            'about': fbResponse.about,
            'language': fbResponse.lang,
            'lookingFor': fbResponse.lookingFor,
            'visited': fbResponse.visited,
            'pictureProfile': fbResponse.pictureProfile,
            'birthDay': fbResponse.birthday,
            'from': fbResponse.from,
            'likes': fbResponse.likes

        });
        console.log("About to save user info model");
        userInfo.save(function (err) {
            console.log(err);
            callback(err);
        });
        console.log("About to create new user settings");
        var userSettings = new UserSettings({
            'owner': user._id,
            pushNotification: true,
            chatService: true
        });
        console.log("About to save user settings");
        userSettings.save(function (err) {
            console.log(err);
            callback(err);
        });
        console.log("About to call callback with user");
        callback(null, user);
    }

};

exports.getUserSettungs = function (req, res, next) {

}

exports.setUserSettings = function (req, res, next) {

}

exports.getUserInfo = function (req, res, next) {

}