var express  = require("express");
var mongoose = require("./db/connection");
var hbs      = require("express-handlebars");
var parser   = require("body-parser");

var app      = express();
var Minion   = mongoose.model("Minion");

app.use(parser.urlencoded({extended: true}));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.get("/", function(req, res){
  Minion.find().then(function(response){
    res.render("minions-index", {
      minions: response
    });
  })
});

app.get("/:name", function(req, res){
  Minion.findOne().then(function(response){
    res.render("minions-show", {
      minion: response
    });
  });
});

app.post("/:name", function(req, res){
  Minion.findOneAndUpdate(req.params, req.body.minion, {new: true}).then(function(response){
    res.redirect("/" + response.name);
  });
});

app.listen(3001, function(){
  console.log("It's aliiive");
});
