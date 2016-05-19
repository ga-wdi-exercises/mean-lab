var express = require("express");
var hbs= require("express-handlebars");
var mongoose= require("./db/connection");

var app     = express();
var Posts = mongoose.model("Post");

app.get("/", function(req, res){
  res.render("app-welcome");
});

app.use("/cool", express.static("public"));
app.set("view engine", "hbs");
 app.engine(".hbs", hbs({
   extname:      ".hbs",
   layoutsDir:   "views",
   partialsDir:  "views",
   defaultLayout:"layout-main"
 }));


app.get("/api/posts", function(req, res){
  Post.find().then(function(posts){
    res.json(posts);
  });
});


app.listen(3001, function(){
  console.log("I'm working!");
});
