var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    name: String
});

mongoose.model('Tags', tagSchema);

