const express = require('express')
const parser = require('body-parser')

const Character = require('./db/schema.js')
const searchHero = require('./utils.js').searchHero

const app = express()

app.set('port', process.env.PORT || 3001)
app.use('/assets', express.static('public'))
app.use('/node_modules', express.static('node_modules'))
app.use(parser.json({ extended: true}))

app.get('/characters', (req, res) => {
  Character.find({}, null, {sort: {name: 1}}).then((characters) => {
    res.json(characters)
  })
})

app.post('/characters', (req, res) => {
  Character.create(req.body).then((character) => {
    res.status(200).json(character)
  })
})

// app.post('/characters/search', (req, res) => {
//   searchHero(req.body.searchName)
//     .then((res) => {
//       console.log(res)
//     })
// })

app.get('/characters/:id', (req, res) => {
  Character.findOne({ _id: req.params.id }).then((character) => {
    res.json(character)
  })
})

app.put('/characters/:id', (req, res) => {
  Character.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}).then((character) => {
    res.status(200).json(character)
  })
})

app.delete('/characters/:id', (req, res) => {
  Character.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.status(200).send('character deleted')
  })
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
