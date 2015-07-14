var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/allContacts', function (req, res) {

  db.contactlist.find( function ( err, docs ) {

    res.json(docs);

    });

});

app.listen(3000);
console.log("Connected");
