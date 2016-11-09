var express       = require("express")
// var hbs           = require("express-handlebars")

var app           = express()

//setting port & listening
app.set("port", process.env.PORT || 4001)

app.listen(app.get("port"), function() {
  console.log("Consequences...")
})

app.set("view engine", "hbs")

//get views
app.get("/", (req, res) => {
  res.send("hello world!")
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
