var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var review = new Schema({
    text: String,
    creationDate: {type: Date, default: Date.now},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
    event: {type: Schema.Types.ObjectId, ref: 'Events'}
});

mongoose.model('Review', review);

