const mongoose = require('mongoose')

// const MemeSchema = new mongoose.Schema(
//   {
//     name: String,
//     image: String
//   }
// );
// mongoose.model("Meme", MemeSchema)

mongoose.connect('mongodb://localhost/memes_db', (err) => {
  if(err){
    console.log(err)
  } else{
    console.log("make some memes")
  }
})

module.exports = mongoose
