var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var countriesSchema = new Schema({
    code: String,
    name: String
});


mongoose.model('Countries', countriesSchema);