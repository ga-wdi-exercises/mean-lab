var express  = require("express");
var hbs      = require("express-handlebars");
var mongoose = require("./db/connection");
var app      = express();
var Episode  = mongoose.model("Episode");

app.use("/assets", express.static("public"));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:      ".hbs",
  layoutsDir:   "views",
  partialsDir:  "views",
  defaultLayout:"layout-main"
}));

app.get("/", function(req, res){
  res.render("main", {layout: false});
});

app.get("/api/episodes", function(req, res){
  Episode.find().then(function(episodes){
    console.log(episodes)
    res.json(episodes);
  });
});

app.listen(3001, function(){
  console.log("this works");
});
