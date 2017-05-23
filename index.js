var express = require("express")
var parser = require('body-parser')
var Garbage = require("./data/db/connection.js")


var app = express()

app.set("port", 3001)

app.use(express.static(__dirname + "/public/"));
app.use(parser.json({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/garbages', (req, res) => {
  Garbage.find({}).then((garbages) => {
    res.json(garbages)
  })
})

app.post('/garbages', (req, res) => {
  Garbage.create(req.body).then((garbage) => {
    res.json(garbage)
  })
})


app.listen(app.get("port"), () => {
  console.log("express is online");
})
