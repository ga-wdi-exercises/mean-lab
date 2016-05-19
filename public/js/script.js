"use strict";

(function(){
  angular
  .module("ThroneCast", [
    "ui.router",
    "ngResource"
  ])
  .config(Router);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      template: "This is the index"
    })
    .state("show", {
      url: "/:title",
      template: "This is the show"
    });
  }
})();
