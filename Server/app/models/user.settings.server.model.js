var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSettingsSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    matchPreferences: {
        distance: Number,
        ageRange: [Number],
        preferredGender: {type: Schema.Types.ObjectId, ref: 'UserGender'}
    },
    pushNotification: Boolean,
    chatService: Boolean
});

mongoose.model('UserSettings', userSettingsSchema);