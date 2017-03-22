var mongoose = require("./connection.js")

var IngredientSchema = new mongoose.Schema({
  name: String,
  unit: String,
  quantity: Number,
});

var RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [IngredientSchema],
})

module.exports = {
  Ingredient: mongoose.model("Ingredient", IngredientSchema),
  Recipe: mongoose.model("Recipe", RecipeSchema),
}
