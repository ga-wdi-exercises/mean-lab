let mongoose  = require("./connection.js");
let seedData  = require("./seedData.json");
let Notebook = require("./models.js").Notebook


Notebook.remove({}).then(function(){
  Notebook.collection.insert(seedData).then(function(){
    process.exit();
  });
});
