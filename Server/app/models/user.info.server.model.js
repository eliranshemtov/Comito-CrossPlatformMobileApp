var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    about: String,
    languages: [String],
    lookingFor: String,
    visited: [String],
    pictureProfile: String,
    birthDay: {type: Date},
    from: String,
    segment: {type: Schema.Types.ObjectId, ref: 'Segment'},
    participatedEvents: [{type: Schema.Types.ObjectId, ref: 'Event'}],
    likes: [{}]
});

mongoose.model('UserInfo', userInfoSchema);