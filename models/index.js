var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost");

var Task = require('./task');

module.exports.Task = Task;
