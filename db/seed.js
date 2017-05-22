var seedData  = require("./seeds.json");
var SongModel = require("./schema.js").SongModel


var Artist= mongoose.model("Artist");

Artist.remove({}).then(function(){
  Artist.create(seedData).then(function(){
    process.exit();
  });
});
