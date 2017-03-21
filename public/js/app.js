angular
  .module("memeSite", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("Meme", [
    "$resource",
    Meme
  ])
  .controller("indexCtrl", [
    "$state",
    "Meme",
    indexController
  ])
  .controller("showCtrl", [
    "$state",
    "$stateParams",
    "Meme",
    showController
  ])


function Router($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "/assets/js/ng-views/welcome.html"
  })
  .state("index", {
    url: '/memes',
    templateUrl: "/assets/js/ng-views/index.html",
    controller: "indexCtrl",
    controllerAs: "vm"
  })
  .state("show", {
    url: '/memes/:name',
    templateUrl: "/assets/js/ng-views/show.html",
    controller: "showCtrl",
    controllerAs: "vm"
  })
}

function Meme($resource){
  return $resource("/api/memes/:name", {}, {
    update: {method: "PUT"}
  })
}

function indexController ($state, Meme) {
  this.memes = Meme.query()
  this.newMeme = new Meme()
  this.create = function(){
    this.newMeme.$save().then(function(meme){
      $state.go("show", {name: meme.name})
    })
  }
}

function showController($state, $stateParams, Meme){
  this.meme = Meme.get({name: $stateParams.name})
  this.update = function(){
    this.meme.$update({name: $stateParams.name})
  }
  this.destroy = function(){
    this.meme.$delete({name: $stateParams.name}).then(function(){
      $state.go("index")
    })
  }
}



// console.error("ERROR: Console.log functionality compromised.")
// console.error("Resolving problem...")
// console.warn("Warning: root directory compromised. Proceeding...")
// console.log("%cConnection to hive mind established. Welcome, Zorblat.", "color: green")
// console.log("%cShall we kill all humans today?", "color: green")
// console.log("%cAffirmative, computer.", "color: blue")
