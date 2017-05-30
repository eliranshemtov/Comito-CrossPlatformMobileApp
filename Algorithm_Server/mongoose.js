var config = require('./config.js');
var mongoose = require('mongoose');
var em=require('./emitter.js');
//listeners
mongoose.connection.on('error',function(err){
    console.error('error','connection error:',err);
    connect2db();
    // console.error.bind(console, 'connection error:')

});
mongoose.connection.on('open', function () {
    // we're connected!
    isConnected=1;
    console.log("db is connected");
    em.emit('startServer');
});
mongoose.connection.on('disconnected', function() {
    isConnected=0;
    console.log("db is disconnected")
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
    });
});
var connect2db=function(){
    console.log("connecting to:", config.connString);
    mongoose.connect(config.connString);
}
//export
// exports.connect2=connect2;
module.exports ={
    isConnected:0,
    connect:connect2db
}


// //schemes
// var Schema=mongoose.Schema;
//
// var UserSchema=new Schema({
//     name: String
// });
//
// module.exports = mongoose.model('User', UserSchema);
