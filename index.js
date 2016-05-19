var express  = require("express");
var hbs      = require("express-handlebars");
var parser   = require("body-parser")
var mongoose = require("./db/connection");
var app      = express();
var Episode  = mongoose.model("Episode");

app.use(parser.json({extended: true}));
app.use("/assets", express.static("public"));
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:      ".hbs",
  layoutsDir:   "views",
  partialsDir:  "views",
  defaultLayout:"main"
}));

app.get("/api/episodes", function(req, res){
  Episode.find().then(function(episodes){
    res.json(episodes);
  });
});

app.get("/api/episodes/:_id", function(req, res){
  Episode.findOne(req.params).then(function(episode){
    res.json(episode);
  });
});

app.put("/api/episodes/:_id", function(req, res){
  Episode.findOneAndUpdate(req.params, req.body, {new: true}).then(function(episode){
    res.json(episode);
  });
});

app.post("/api/episodes", function(req, res){
  Episode.create(req.body).then(function(episode){
    res.json(episode);
  });
});

app.get("/*", function(req, res){
  res.render("main", {layout: false});
});

app.listen(3001, function(){
  console.log("this works");
});
