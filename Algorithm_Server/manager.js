require('async');
var em = require("./emitter.js");
//listeners
em.on("enterQ",(item)=>{
    // while(true){}
    console.log('entered queue');
// q.push(item, function (err) {
//     console.log('finished processing item');
// })
})
var cbError=function(err){
    console.error("error:",err);
}
var q = async.queue(function (task, callback) {
    //active async series function (scoring updating table and top 10 at the end)
    var tmp={}, t10tmp={},me={};
    async.series([
        function(cbError){
            //get user data from db
            //me=user.findOne(task.uid)
        },
        function(cbError){
            //could be async problem!!!!!!!!!!!!

            async.forEach(users,function(user,cdError){
                //getBasePercent(me,user)
            })

                //scoring
                //parrellel:
                //update me top 10
                //update user scoring with me
                //update user top 10 if neseccery
            }
            //parellel score:
            //-rank by % of the lower likes
            //-update user  row
            //-update top 10 : you and the other user (get top 10 from db )
        }
    ],function(err,result){

    })


}

    async.forEach(messageIds, function(messageId, callback) { //The second argument, `callback`, is the "task callback" for a specific `messageId`
        //When the db has deleted the item it will call the "task callback"
        //This way async knows which items in the collection have finished
        db.delete('messages', messageId, callback);
    }, function(err) {
        if (err) return next(err);
        //Tell the user about the great success
        res.json({
            success: true,
            message: messageIds.length+' message(s) was deleted.'
        });


    console.log('hello ' + task.name);
    callback();
}, 1);
// assign a callback
q.drain = function() {
    console.log('all items have been processed');
}

q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function (err) {
    console.log('finished processing item');
});

// add some items to the front of the queue
q.unshift({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});

var topT={}
var usersQueue=[]
var user={}
var users={};

async.forEach(objects, function(obj, callback) { //The second argument, `callback`, is the "task callback" for a specific `messageId`
  //When the db has deleted the item it will call the "task callback"
  //This way async knows which items in the collection have finished
  db.delete('messages', messageId, callback);
}, function(err) {
  if (err) return next(err);
  //something here after everything
  //Tell the user about the great success
  // res.json({
  //     success: true
  // });
});
