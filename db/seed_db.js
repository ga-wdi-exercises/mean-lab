var mongoose = require("./connection");
var seedData = require("./seeds");
var Minion   = mongoose.model("Minion");

Minion.remove().then(function(){
  Minion.create(seedData).then(function(){
    process.exit();
  });
});
