var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/thronecast");

var CharacterSchema = mongoose.Schema({
  name: String
});

var EpisodeSchema = mongoose.Schema({
  title: String,
  season: Number,
  characters: [CharacterSchema]
});


mongoose.model("Character", CharacterSchema);
mongoose.model("Episode", EpisodeSchema);


module.exports = mongoose;
