angular
  .module("notebook",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("Notebook", [
    "$resource",
    Notebook
  ])
  .controller("homeController", [
    "$state",
    "Notebook",
    homeControllerFunction
  ])
  .controller("showController", [
     "$stateParams",
     "$state",
     "Notebook",
     showControllerFunction
   ])


function RouterFunction($stateProvider){
    $stateProvider
      .state("home",{
        url: "/notebookentries",
        templateUrl: "/assets/js/ng-views/home.html",
        controller: "homeController",
        controllerAs: "vm"
      })
      .state("show",{
        url: "/notebookentries/:title",
        templateUrl: "/assets/js/ng-views/show.html",
        controller: "showController",
        controllerAs: "vm"
      })
}

function Notebook ($resource) {
    return $resource("/api/notebookentries/:title", {}, {
      update: { method: "PUT" }
      });
}

function homeControllerFunction($state, Notebook){

  this.notebookentries = Notebook.query()

  this.newEntry = new Notebook()

  this.create = function () {
      this.newEntry.$save().then(function(entry){
        $state.go("home")
      })
    }

}

function showControllerFunction($stateParams, $state, Notebook){

  this.entry = Notebook.get({title: $stateParams.title})
    this.update = function () {
      this.entry.$update({title: $stateParams.title, body: $stateParams.body}).then(() =>{
        $state.go("show")
      })
    }
    this.destroy = function () {
      this.entry.$delete({title: $stateParams.title}).then(function(){
        $state.go("home")
      })
    }

}
