var mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var AboutSchema = new Schema({
  likes: String,
  dislikes: String
});

var MinionSchema = new Schema({
  name: String,
  eyes: Number,
  hair: String,
  body: String,
  about: [AboutSchema]
});

var Minion = mongoose.model("Minion", MinionSchema);
var AboutModel = mongoose.model("About", AboutSchema);

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect("mongodb://localhost/minions");
}

module.exports = Minion;
