angular
  .module("recipeBox", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
    RouterFunction
  ])
  .factory("IngredientFactory", [
    "$resource",
    IngredientFactoryFunction
  ])
  .factory("RecipeFactory", [
    "$resource",
    RecipeFactoryFunction
  ])
  .controller("indexRecipeController", [
    "$state",
    "RecipeFactory",
    indexRecipeControllerFunction
  ])
  .controller("showRecipeController", [
    "$state",
    "$stateParams",
    "RecipeFactory",
    "IngredientFactory"
    showRecipeControllerFunction
  ])
  .controller("indexIngredientController", [
    "$state",
    "IngredientFactory",
    indexIngredientControllerFunction
  ])
  .controller("showIngredientController", [
    "$state",
    "$stateParams",
    "IngredientFactory",
    "RecipeFactory",
    showIngredientControllerFunction
  ])

  function RouterFunction ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true)
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/assets/js/ng-views/welcome.html"
      })
      .state("recipes-index", {
        url: "/recipes",
        templateUrl: "/assets/js/ng-views/recipes-index.html",
        controller: "indexRecipeController",
        controllerAs: "vm"
      })
      .state("recipes-show", {
        url: "/recipes/:id",
        templateUrl: "/assets/js/ng-views/recipes-show.html",
        controller: "showRecipeController",
        controllerAs: "vm"
      })
      .state("ingredients-index", {
        url: "/ingredients",
        templateUrl: "/assets/js/ng-views/ingredients-index.html",
        controller: "indexIngredientController",
        controllerAs: "vm"
      })
      .state("ingredients-show", {
        url: "/ingredients/:id",
        templateUrl: "/assets/js/ng-views/ingredients-show.html",
        controller: "showIngredientController",
        controllerAs: "vm"
      })
    $urlRouterProvider.otherwise("/")
  }

  function IngredientFactoryFunction ($resource) {
    return $resource("/api/ingredients/:id", {}, {
      update: { method: "PUT" }
    });
  }
  function RecipeFactoryFunction ($resource) {
    return $resource("/api/recipes/:id", {}, {
      update: { method: "PUT" }
    });
  }

  function indexRecipeControllerFunction ($state, RecipeFactory) {
    this.recipes = RecipeFactory.query()
    this.newRecipe = new RecipeFactory()
    this.create = function () {
      this.newRecipe.$save().then(function(recipe){
        $state.go("recipes-show", { id: recipe._id })
      })
    }
  }
  function showRecipeControllerFunction ($state, $stateParams, RecipeFactory, IngredientFactory) {
    this.recipe = RecipeFactory.get({id: $stateParams.id})
    this.update = function () {
      this.recipe.$update({id: $stateParams.id})
    }
    this.destroy = function () {
      this.recipe.$delete({id: $stateParams.id}).then(function(){
        $state.go("recipes-index")
      })
    }
  }
  function indexIngredientControllerFunction ($state, IngredientFactory) {
    this.ingredients = IngredientFactory.query()
    this.newIngredient = new IngredientFactory()
    this.create = function () {
      this.newIngredient.$save().then(function(ingredient){
        $state.go("ingredients-show", { id: ingredient._id })
      })
    }
  }

  function showIngredientControllerFunction ($state, $stateParams, IngredientFactory, RecipeFactory) {
    this.ingredient = IngredientFactory.get({id: $stateParams.id},(ingredient)=>{
      this.recipes = []
      for (let i = 0; i < ingredient.recipes.length; i++) {
        RecipeFactory.get({id:ingredient.recipes[i]},(recipe)=>{
          console.log(recipe)
          this.recipes.push(recipe)
        })
      }
    })

    this.update = function () {
      this.ingredient.$update({id: $stateParams.id})
    }
    this.destroy = function () {
      this.ingredient.$delete({id: $stateParams.id}).then(function(){
        $state.go("ingredients-index")
      })
    }
  }
