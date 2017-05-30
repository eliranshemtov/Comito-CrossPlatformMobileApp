var em=require('./emitter.js');

var i=1;
var response={};
module.exports = function(router) {

//middleware
router.use(function(req, res, next) {
      console.log('command api request. #',i);
      i++;
      next()
  });

router.route('/').post(function(req,res){
  response=res;
  console.log('post');
  try{
    var msg=req.body;
    if(!msg.command)
      throw new Error('command is not set properly');
    else if(!msg.uid)
        throw new Error('user id is not set prope   rly');
  }
  catch (err){
    res.send({"error":"problem with sent data","status":"-1"})
  }
  //command = new_user
    em.emit("enterQ",msg);
    res.send({"message":"server started processing","status":"1"});

})

    router.get('/', function(req, res){
        res.json({'hello':'world'});
    })
}
