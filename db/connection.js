var mongoose = require("mongoose");

var MinionSchema = {
  name: String,
  eyes: Number,
  hair: String,
  body: String
}

var Minion = mongoose.model("Minion", MinionSchema);
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect("mongodb://localhost/minions");
}

module.exports = Minion;
