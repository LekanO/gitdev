var express = require('express');
var app = express();
var Firebase = require("firebase");

app.use (express.static(__dirname + "/platforms/ios/www"));

app.get('/userslist', function (req, res) {

	
  console.log("get request created");
});

app.listen(3000); 

console.log('Listening at port 3000');