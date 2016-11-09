var mongoose = require("./connection.js")

var seedData = require("./seeds")

var models = require("./models.js")

var Ingredient = mongoose.model("Ingredient")

var Recipe = mongoose.model("Recipe")

Recipe.remove({}).then(_=>{
  Recipe.collection.insert(seedData)
  .then(_ => process.exit())
}).catch(err => console.log(err))
