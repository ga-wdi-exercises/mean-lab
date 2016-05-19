"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "cool/posts-index.html"
    })
    .state("show",  {
      url: "/:title",
      templateUrl: "cool/posts-show.html"
    });
  }
})();
