const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/notebook', (err) => {
  if(err){
    console.log(err)
  } else{
    console.log('mongodb connected')
  }
})


module.exports = mongoose
