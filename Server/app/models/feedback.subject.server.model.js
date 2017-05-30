var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var feedBackSubjectSchema = new Schema({
    subject: String
});


mongoose.model('FeedbackSubject', feedBackSubjectSchema);