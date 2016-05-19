var mongoose     = require("./connection");
var seed_data    = require("./episode_seeds");

var Episode      = mongoose.model("Episode")

Episode.remove().then(function(){
  Episode.collection.insert(seed_data).then(function(){
    process.exit();
  });
});
