var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortenurls');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
console.log("starting");

var Schema = mongoose.Schema;

var shortURLSchema = new Schema({
  longURL: String,
  urlKey: String
});

var shortURLModel = mongoose.model("urls", shortURLSchema);

module.exports = {
  shortURLModel: shortURLModel
};
