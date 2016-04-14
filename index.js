var express  = require("express");
var mongoose = require("./db/connection");
var hbs      = require("express-handlebars");
var parser   = require("body-parser");

var app      = express();
var Minion   = mongoose.model("Minion");

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  Minion.find().then(function(response){
    res.render("minions-index");
  })
});

app.listen(3001, function(){
  console.log("It's aliiive");
});
