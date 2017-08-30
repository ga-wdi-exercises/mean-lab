const mongoose = require('./connection.js')
const searchHero = require('../utils.js').searchHero

const CharacterSchema = new mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  marvel_id: Number
})

CharacterSchema.pre('save', function (next) {
  if (this.isNew) {
    searchHero(this.name)
      .then((results, err) => {
        if (results.length) {
          hero = results[0]
          this.description = hero.description.replace(/\s/g, '') ? hero.description : "No description available...",
          this.image_url = hero.thumbnail.path + '/portrait_uncanny.' + hero.thumbnail.extension
        } else {
          this.description = 'No description available...'
          this.image_url = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'
        }
        next()
      })
  }
})

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character
