var mongoose    = require("./connection");
// var hbs    = require("express-handlebars");
var seed_data   = require("./posts_seeds");

var Post    = mongoose.model("Post");

Post.remove({}).then(function(){
  Post.collection.insert(seed_data).then(function(){
    process.exit();
  });
});
