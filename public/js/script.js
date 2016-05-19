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
      templateUrl: "/assets/html/episodes-index.html"
    })
    .state("show", {
      url: "/:title",
      templateUrl: "/assets/html/episode-show.html"
    });
  }
})();
