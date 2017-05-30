var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var feedBackSchema = new Schema({

    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
    feedbackSubject: {type: Schema.ObjectId, ref: 'feedbackSubjects'},
    feedback: String,

});


mongoose.model('Feedback', feedBackSchema);