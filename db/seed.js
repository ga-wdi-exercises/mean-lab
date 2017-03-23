var Schema  = require("./schema");
// var seedRecipeData  = require("./recipe-seeds");
// var seedIngredientData = require("./ingredient-seeds")
var Ingredient = Schema.Ingredient
var Recipe = Schema.Recipe

Ingredient.remove({}).then(function(){
  Ingredient.collection.insert(seedData).then(function(){
    process.exit();
  });
});

Recipe.remove({}).then(function(){
  Recipe.collection.insert(seedData).then(function(){
    process.exit();
  });
});

var flour = new Ingredient({"name": "Flour"})
var sugar = new Ingredient({"name": "Sugar"})
var salt = new Ingredient({"name": "Salt"})
var milk = new Ingredient({"name": "Milk"})
var egg = new Ingredient({"name": "Egg"})
var pasta = new Ingredient({"name": "Pasta"})
var graham = new Ingredient({"name": "Graham Cracker"})
var butter = new Ingredient({"name": "Butter"})
var creamCheese = new Ingredient({"name": "Cream Cheese"})
var evapMilk = new Ingredient({"name": "Evaporated Milk"})
var greenOnion = new Ingredient({"name": "Green Onion"})
var spinach = new Ingredient({"name": "Spinach"})
var ham = new Ingredient({"name": "Ham"})
var onion = new Ingredient({"name": "Onion"})
var greenPepper = new Ingredient({"name": "Green Pepper"})
var tomato = new Ingredient({"name": "Tomato"})
var cream = new Ingredient({"name": "Cream"})
var cheese = new Ingredient({"name": "Cheddar Cheese"})
var coffee = new Ingredient({"name": "Coffee Beans"})
var pecans = new Ingredient({"name": "Pecans"})
var cinnamon = new Ingredient({"name": "Cinnamon"})
var bakingSoda = new Ingredient({"name": "Baking Soda"})
var bakingPowder = new Ingredient({"name": "Baking Powder"})
var vanilla = new Ingredient({"name": "Vanilla Extract"})
var brownSugar = new Ingredient({"name": "Brown Sugar"})
var bacon = new Ingredient({"name": "Bacon"})
var blackPepper = new Ingredient({"name": "Black Pepper"})
var redPepper = new Ingredient({"name": "Red Pepper Flake"})
var water = new Ingredient({"name": "Water"})
var chocolate = new Ingredient({"name": "Chocolate Chip"})


var omelet = new Recipe({
    "name": "Omelet",
    "instructions": "",
    "imageUrl": "http://www.wikihow.com/images/7/78/Cook-a-Western-Omelet-Intro.jpg"
  })
var scrambledEgg = new Recipe({
    "name": "Scrambled Eggs",
    "instructions": "",
    "imageUrl": "https://addapinch.com/wp-content/blogs.dir/3/files/2013/02/perfect-scrambled-eggs-DSC_1961.jpg"
  })
var candiedPecan = new Recipe({
    "name": "Candied Pecans",
    "instructions": "",
    "imageUrl": "http://www.onceuponachef.com/images/2014/11/Spicy-Salty-Sweet-Candied-Pecans-575x389.jpg"
  })
var cheesecake = new Recipe({
    "name": "Cheesecake",
    "instructions": "",
    "imageUrl": "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1001487_11.jpg?itok=rUW9cFzU"
  })
var coldBrew = new Recipe({
    "name": "Cold Brew Coffee",
    "instructions": "",
    "imageUrl": "http://bernardowinery.com/wp-content/uploads/2014/08/coffee.jpg"
  })
var cookies = new Recipe({
    "name": "Chocolate Chip Cookies",
    "instructions": "",
    "imageUrl": ""
  })

omelet.ingredients.push(
  {"ingredient":egg, "amount":"3"},
  {"ingredient":cheese, "amount":"2 tablespoons"},
  {"ingredient":spinach, "amount":"personal preference"},
  {"ingredient":ham, "amount":"personal preference"},
  {"ingredient":onion, "amount":"personal preference"},
  {"ingredient":salt, "amount":"to taste"},
  {"ingredient":blackPepper, "amount":"to taste"}
)
console.log(`=========================================`)
omelet.save((err, recipe) => {
  if (err) {
    console.log(err);
  } else {
    console.log(recipe)
  }
})

scrambledEgg.ingredients.push(
  {"ingredient":egg, "amount":"3"},
  {"ingredient":cream, "amount":"2 tablespoons"},
  {"ingredient":salt, "amount":"to taste"},
  {"ingredient":blackPepper, "amount":"to taste"}
)
scrambledEgg.save((err, recipe) => {
  if (err) {
    console.log(err);
  } else {
    console.log(recipe)
  }
})

candiedPecan.ingredients.push(
  {"ingredient":pecans, "amount":"1"},
  {"ingredient":egg, "amount":"1"},
  {"ingredient":sugar, "amount":"1/3 cup"},
  {"ingredient":brownSugar, "amount":"1/3 cup"},
  {"ingredient":salt, "amount":"1 teaspoon"},
  {"ingredient":cinnamon, "amount":"1 teaspoon"},
  {"ingredient":vanilla, "amount":"1 tablespoon"}
)
candiedPecan.save((err, recipe) => {
  if (err) {
    console.log(err);
  } else {
    console.log(recipe)
  }
})

cheesecake.ingredients.push(
  {"ingredient":creamCheese, "amount":"24 oz"},
  {"ingredient":evapMilk, "amount":"14 oz"},
  {"ingredient":sugar, "amount":"2 tablespoons"},
  {"ingredient":egg, "amount":"3"},
  {"ingredient":vanilla, "amount":"2 tablespoons"},
  {"ingredient":graham, "amount":"1.25 cups, crushed"},
  {"ingredient":butter, "amount":"4 tablespoons"}
)
cheesecake.save((err, recipe) => {
  if (err) {
    console.log(err);
  } else {
    console.log(recipe)
  }
})

coldBrew.ingredients.push(
  {"ingredient":coffee, "amount":"12 oz"},
  {"ingredient":water, "amount":"7 cups"}
)
coldBrew.save((err, recipe) => {
  if (err) {
    console.log(err);
  } else {
    console.log(recipe)
  }
})


egg.recipes.push(omelet, scrambledEgg, candiedPecan, cheesecake)
egg.save((x,y)=>{})
cheese.recipes.push(omelet)
cheese.save((x,y)=>{})
spinach.recipes.push(omelet)
spinach.save((x,y)=>{})
ham.recipes.push(omelet)
ham.save((x,y)=>{})
onion.recipes.push(omelet)
onion.save((x,y)=>{})
salt.recipes.push(omelet, scrambledEgg, candiedPecan)
salt.save((x,y)=>{})
salt.recipes.push(omelet, scrambledEgg)
blackPepper.save((x,y)=>{})
cream.recipes.push(scrambledEgg)
cream.save((x,y)=>{})
pecans.recipes.push(candiedPecan)
pecans.save((x,y)=>{})
sugar.recipes.push(candiedPecan, cheesecake)
sugar.save((x,y)=>{})
brownSugar.recipes.push(candiedPecan)
brownSugar.save((x,y)=>{})
cinnamon.recipes.push(candiedPecan)
cinnamon.save((x,y)=>{})
vanilla.recipes.push(candiedPecan,cheesecake)
vanilla.save((x,y)=>{})
graham.recipes.push(cheesecake)
graham.save((x,y)=>{})
butter.recipes.push(cheesecake)
butter.save((x,y)=>{})
coffee.recipes.push(coldBrew)
coffee.save((x,y)=>{})
water.recipes.push(coldBrew)
water.save((x,y)=>{})
