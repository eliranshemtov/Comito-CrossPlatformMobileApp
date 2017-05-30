var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var faqSchema = new Schema({

    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
    question: String,
    answer: String,
    likes: Number,
    disLikes: Number
});


mongoose.model('Faq', faqSchema);