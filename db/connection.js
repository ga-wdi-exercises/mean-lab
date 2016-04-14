var mongoose = require("mongoose");

var MinionSchema = {
  name: String,
  eyes: Number,
  hair: String,
  body: String
}

var Minion = mongoose.model("Minion", MinionSchema);
mongoose.connect("mongodb://localhost/minions")

module.exports = Minion;
