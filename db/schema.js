var mongoose = require("./connection.js");

var ObjectId = mongoose.Schema.ObjectId;

var IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, default: '' },
    recipes: [ {type : ObjectId, ref : 'Recipe'} ]
  }
)
var RecipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    instructions: String,
    ingredients: [{
      ingredient: {type : ObjectId, ref : 'Ingredient'},
      amount: String
    }],
    imageUrl: String
  }
);
var Ingredient = mongoose.model("Ingredient", IngredientSchema);
var Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = {
  Ingredient,
  Recipe
};
