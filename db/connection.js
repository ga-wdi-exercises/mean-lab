var mongoose = require("mongoose");

var MinionSchema = {
  name: String,
  eyes: Number,
  hair: String,
  body: String
}

mongoose.model("Minion", MinionSchema);
mongoose.connect("mongodb://localhost/minions")

module.exports = mongoose;
