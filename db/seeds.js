const Meme = require('./models.js').Meme
const seedData = require('./seedData')

Meme.remove({}, () => {
  Meme.create(seedData, () => {
    process.exit()
  })
})

//to seed: 'node db/seeds.js' then run 'mongo', 'use memes_db', 'db.memes.find()' to check
