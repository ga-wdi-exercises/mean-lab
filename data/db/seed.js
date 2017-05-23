var Garbage = require('./connection.js')

var sampleGarbage = [
  {name: 'Gold Coin', cools: 2},
  {name: 'Pair of Dice', cools: 4},
  {name: 'Shoe', cools: 1}
]

Garbage.remove({}).then(() => {
  Garbage.create(sampleGarbage).then(() => {
    process.exit()
  })
})
