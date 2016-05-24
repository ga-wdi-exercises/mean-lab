var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  dueDate: String
});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
