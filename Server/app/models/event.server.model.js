var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({

    name: String,
    startDate: {type: Date, default: Date.now},
    duration: Number,
    relatedSegment: {type: Schema.Types.ObjectId, ref: 'Segment'},
    endDate: {type: Date, default: Date.now},
    startHour: String,
    endHour: String,
    location: String,
    peopleCapacity: Number,

    Description: String,
    attending: {type: Number, default: 0},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'}

});


mongoose.model('Event', EventSchema);