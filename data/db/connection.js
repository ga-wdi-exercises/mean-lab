var mongoose  = require("mongoose");

var GarbageSchema = new mongoose.Schema(
  {
    name: String,
    cools: Number
  }
);

var Garbage = mongoose.model("Garbage", GarbageSchema);
mongoose.connect("mongodb://localhost/coolgarbage");

module.exports = Garbage;
