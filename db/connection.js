var mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost/teachershare");

var Comment    = mongoose.Schema({
  text:     String
});
//comeback to add upvotes

var Post  = mongoose.Schema({
  text:     String,
  messages: [String]
});
//come back to add repost

mongoose.model("Comment", Comment);
mongoose.model("Post",    Post);
module.exports= mongoose;
