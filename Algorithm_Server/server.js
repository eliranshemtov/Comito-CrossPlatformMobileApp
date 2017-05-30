var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var cors = require('cors');
var app = express();
var router = express.Router();
require('./routes.js')(router);
var conn=require('./mongoose.js');
var em = require('./emitter.js');
var port = process.env.PORT || 4545;

//listeners
em.on('error', () => {
  console.log('an error occurred!');
});
em.once('startServer',()=>{
  app.listen(port, function () {
  console.log('Magic happens on port ' + port);
  })
});

app.use(bodyParser.urlencoded({ extended: true ,limit:"50mb", parameterLimit:50000}));
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
//route
app.use('/command', router);

//connect to db
conn.connect();
