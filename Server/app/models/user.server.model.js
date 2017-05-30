var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    http = require('http'),
    crypto = require('crypto'),
    requestify = require('requestify');

//TODO - Add likes attribute and segments to the user, make sure to ask for likes from facebook and save them and the segments before sending ping to alg server
var UserSchema = new Schema({
    name: String,
    email: String,
    username: {
        type: String,
        unique: true
    },
    password: String
});
/**
 *Uses md5 hash before saving the password to the DB
 */
UserSchema.pre('save',
    function (next) {
        if (this.password) {
            var md5 = crypto.createHash('md5');
            this.password = md5.update(this.password).digest('hex');
        }

        next();
    }
);
/**
 *Sends a ping with the newly created user to the algorithm server
 */
UserSchema.post('save', function (user) {
    // Build the post string from an object
    console.log("About to send user id to alg server");
    requestify.post('http://127.0.0.1:4545/command', {command: 'new_user', uid: user._id}).then(function (res) {
        console.log('response:');
        console.log(res.body);
    }, function (err) {
        console.log("err " + JSON.stringify(err));
    });
});

mongoose.model('User', UserSchema);