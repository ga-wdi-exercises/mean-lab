const express = require('express')
const Meme = require('./db/models.js').Meme
const parser = require("body-parser")

const app = express()

app.set('view engine', 'hbs')

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/", function(req, res){
  res.render("memes");
});

app.get("/api/memes", function(req, res){
  Meme.find({}).then(function(memes){
    res.json(memes)
  });
});

app.get("/api/memes/:name", function(req, res){
  Meme.findOne({name: req.params.name}).then(function(meme){
    res.json(meme)
  });
});

app.post("/api/memes", function(req, res){
  Meme.create(req.body).then(function(meme){
    res.json(meme)
  })
});

app.delete("/api/memes/:name", function(req, res){
  Meme.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  });
});

app.put("/api/memes/:name", function(req, res){
  Meme.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(meme){
    res.json(meme)
  });
});

app.listen(3001, () => {
  console.log("we did it right on 3k1")
})
