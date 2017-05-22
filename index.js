var express = require("express")
var mongoose = require("./db/schema.js")
var parser = require("body-parser")


var app = express()

var Artist = mongoose.model("Artist")

app.set("port", process.env.PORT || 3001)
app.get('/', (req,res) => {
  res.sendfile(__dirname+ "/public/index.html")
})

app.use("/assets", express.static("public"))
app.use(parser.json({extended:true}))


app.listen(3001, () => {
  console.log("Express on 3001");
})
