var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var segmentSchema = new Schema({
    name: String,
    picUrl: String
});

mongoose.model('Segment', segmentSchema);

