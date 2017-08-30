const Character = require('./schema.js')

const getHeroes = require('../utils.js').getHeroes

Character.remove({})
  .then(() => {
    return getHeroes()
  })
  .then((heroes) => {
    return new Promise((resolve, reject) => {
      heroes.forEach((hero, index, arr) => {
        Character.create({
          name: hero.name,
          description: hero.description.replace(/\s/g, '') ? hero.description : "No description available...",
          image_url: hero.thumbnail.path + '/portrait_uncanny.' + hero.thumbnail.extension
        }, (err, char) => {
          console.log(err || char.name)
          if(index == arr.length - 1) {
            resolve()
          }
        })
      })
    })
  })
  .then(() => {
    process.exit()
  })
