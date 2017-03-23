var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/recipe_box");
var db = mongoose.connection;

module.exports = mongoose;
