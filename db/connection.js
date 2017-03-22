var mongoose  = require("mongoose");

var shortURLSchema = new mongoose.Schema(
  {
    longURL: String,
    urlKey: String
  }
);

mongoose.model("shortURLModel", shortURLSchema);

// if(process.env.NODE_ENV == "production"){
//   mongoose.connect(process.env.MONGOLAB_URL);
// } else {
//   mongoose.connect("mongodb://localhost/shortenurls");
// }

mongoose.connect("mongodb://localhost/shortenurls");

module.exports = mongoose;
