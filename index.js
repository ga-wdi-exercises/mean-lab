var express = require("express");
var parser  = require("body-parser");
var hbs     = require("hbs");
var mongoose= require("./db/connection.js");

var app     = express();

var Recipe = require('./db/schema').Recipe;
var Ingredient = require('./db/schema').Ingredient;

app.set("port", process.env.PORT || 9001);
app.set("view engine", "hbs");
app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/api/recipes", function(req, res){
  Recipe.find({}).then(function(recipe){
    res.json(recipe)
  });
});

app.get("/api/recipes/:id", function(req, res){
  Recipe.findOne({_id: req.params.id}).then(function(recipe){
    res.json(recipe)
  });
});

app.post("/api/recipes", function(req, res){
  Recipe.create(req.body).then(function(recipe){
    res.json(recipe)
  })
});

app.delete("/api/recipes/:id", function(req, res){
  Recipe.findOneAndRemove({_id: req.params.id}).then(function(){
    res.json({ success: true })
  });
});

app.put("/api/recipes/:id", function(req, res){
  Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(recipe){
    res.json(recipe)
  });
});

app.get("/api/ingredients", function(req, res){
  Ingredient.find({}).then(function(ingredient){
    res.json(ingredient)
  });
});

app.get("/api/ingredients/:id", function(req, res){
  Ingredient.findOne({_id: req.params.id}).then(function(ingredient){
    res.json(ingredient)
  });
});

app.post("/api/ingredients", function(req, res){
  Ingredient.create(req.body).then(function(ingredient){
    res.json(ingredient)
  })
});

app.delete("/api/ingredients/:id", function(req, res){
  Ingredient.findOneAndRemove({_id: req.params.id}).then(function(){
    res.json({ success: true })
  });
});

app.put("/api/ingredients/:id", function(req, res){
  Ingredient.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(ingredient){
    res.json(ingredient)
  });
});

app.get("/*", function(req, res){
  res.render("main");
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
