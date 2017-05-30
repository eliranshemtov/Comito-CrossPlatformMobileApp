var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var langSchema = new Schema({
    code: String,
    name: String
});


mongoose.model('Language', langSchema);