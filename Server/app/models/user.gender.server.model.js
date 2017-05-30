var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userGenderSchema = new Schema({
    genders: String
});

mongoose.model('UserGender', userGenderSchema);