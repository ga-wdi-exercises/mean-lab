const express = require("express")
const app = express()
const parser = require("body-parser")
let Notebook = require('./db/models.js').Notebook
let hbs = require("express-handlebars")

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.set("port", process.env.PORT || 3001);
app.use(parser.json({extended: true}))

app.use("/assets", express.static( __dirname + "/public" ));

app.get("/", (req,res) => {
    res.render("layout-main")
})

app.get("/api/notebookentries", (req,res) => {
    Notebook.find({}).then((notebookentries) => {
      res.json(notebookentries)
    })
})

app.get("/api/notebookentries/:title", function(req,res){
  Notebook.findOne({title: req.params.title}).then((entry) => {
    res.json(entry)
  })
})

app.post("/api/notebookentries", function(req, res){
  Notebook.create(req.body).then(function(entry){
    res.json(entry)
  })
});

app.delete("/api/notebookentries/:title", function(req, res){
  Notebook.findOneAndRemove({title: req.params.title}).then(function(){
    res.json({ success: true })
  });
});

app.put("/api/notebookentries/:title", function(req, res){
  Notebook.findOneAndUpdate({title: req.params.title}, req.body, {new: true}).then(function(entry){
    res.json(entry)
  });
});


app.listen(3001, () => {
  console.log("app listening on port 3001");
});
