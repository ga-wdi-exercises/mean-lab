var express  = require("express");
var parser   = require("body-parser");
var hbs      = require("express-handlebars");

var app      = express();

app.get("/", function(req, res){
  res.send("Working!");
});

app.listen(3001, function(){
  console.log("It's aliiive");
});
