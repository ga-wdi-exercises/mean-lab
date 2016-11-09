var express       = require("express")
var mongoose      = require("./db/connection")
var models        = require("./db/models")
var Recipe        = mongoose.model("Recipe")
var Ingredient    = mongoose.model("Ingredient")
var app           = express()
var bodyParser    = require("body-parser")

//setting port & listening
app.set("port", process.env.PORT || 4001)
app.use(bodyParser.urlencoded({extended:true}))
app.listen(app.get("port"), function() {
  console.log("Consequences...")
})
//set handlebars for views
app.set("view engine", "hbs")

//get views
app.get("/", (req, res) => {
  Recipe.find({}).then( recipes => {
    res.render("index", {
      recipes: recipes
    })
  })
})
//recipe show page
app.get("/:name", (req, res) => {
  Recipe.findOne({name: req.params.name}).then(recipe => {
    res.render("show",{
      recipe: recipe,
    })
  })
})
app.post("/:name/delete", (req, res) => {
  Recipe.findOneAndRemove({name: req.params.name}).then( _ => {
    res.redirect("/")
  })
})

//create views
app.post("/", (req,res) => {
    Recipe.create(req.body.recipe).then(recipe =>{
      res.redirect("/")
    })
  // res.send(req.body.name)
})









//
//
// //sets the local host to host site or 8000
// app.set("port", process.env.PORT || 8000)
// //set views for handlebars
// app.set("view engine", "hbs")
// //body parser that keeps key value pairs
// app.use(parser.urlencoded({extended:true}))
//
//
// //takes the short and redirects to the long
// app.get("/:short", function (req, res) {
//   Url.findOne({short: req.params.short}).then( url => {
//     res.redirect(url.long)
//     console.log(url.long)
//   })
// })
//
// app.listen(app.get("port"), function(){
//   console.log("It's aliiive!");
// });
