const mongoose = require('./connection.js')

const MemeSchema = new mongoose.Schema({
    name: String,
    image: String
})

const Meme = mongoose.model("Meme", MemeSchema)

module.exports = {
  Meme
}
