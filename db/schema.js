
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/artists', (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log("praise the mongod");
  }
})
// Now that we're connected, let's save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', err => {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function(){
  console.log("Connected to MongoDB!");
});
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var SongSchema = new Schema({
  body: String
});

var ArtistSchema = new Schema({
  name: String,
  songs: [SongSchema]
});

var ArtistModel = mongoose.model("Artist", ArtistSchema);
var SongModel = mongoose.model("Song", SongSchema);






module.exports = mongoose
