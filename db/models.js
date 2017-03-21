const mongoose = require("./connection.js")

const NotebookSchema = new mongoose.Schema(
  {
  title: String,
  body: String
  },
{
  timestamps: true
})

const Notebook = mongoose.model("Notebook", NotebookSchema)

module.exports = {
// This could be Notebook:Notebook but they have the same name so it doesnt need to be like that.
  Notebook

}
