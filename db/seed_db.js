var Minion = require("./connection");

var seedData = require("./seeds");

Minion.remove().then(function(){
  Minion.create(seedData).then(function(){
    process.exit();
  });
});
