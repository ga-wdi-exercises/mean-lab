var express = require("express");
var hbs= require("express-handlebars");
var parser  = require("body-parser");
var mongoose= require("./db/connection");

var app     = express();
var Post = mongoose.model("Post");

app.use(parser.json({extended: true}));
app.use("/cool", express.static("public"));
app.set("view engine", "hbs");
 app.engine(".hbs", hbs({
   extname:      ".hbs",
   layoutsDir:   "views",
   partialsDir:  "views",
   defaultLayout:"main"
 }));

 app.get("/", function(req, res){
   res.render("main",{layout:false});
 });

app.get("/api/posts", function(req, res){
  Post.find({}).then(function(posts){
    console.log(posts)
    res.json(posts);
  });
});

app.listen(3001, function(){
  console.log("I'm working!");
});
