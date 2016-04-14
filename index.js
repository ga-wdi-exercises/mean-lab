var express  = require("express");
var mongoose = require("./db/connection");
var hbs      = require("express-handlebars");
var parser   = require("body-parser");

var app      = express();

var Minion   = mongoose.model("Minion");

app.get("/", function(req, res){
  Minion.find().then(function(response){
    res.json(response);
  })
});

app.listen(3001, function(){
  console.log("It's aliiive");
});
