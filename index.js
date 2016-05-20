var express = require("express");
var hbs= require("express-handlebars");
var parser  = require("body-parser");
var mongoose= require("./db/connection");

var app     = express();
var Posts = mongoose.model("Post");

app.get("/", function(req, res){
  res.render("main",{layout:false});
});

app.use(parser.json({extended: true}));
app.use("/cool", express.static("public"));
app.set("view engine", "hbs");
 app.engine(".hbs", hbs({
   extname:      ".hbs",
   layoutsDir:   "views",
   partialsDir:  "views",
   defaultLayout:"main"
 }));


app.get("/api/posts", function(req, res){
  res.json(req.body);
  });



app.listen(3001, function(){
  console.log("I'm working!");
});
