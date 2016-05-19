"use strict";

(function(){
  angular
  .module("ThroneCast", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Episode", EpisodeFactory)
  .controller("Index", IndexCtrl);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "/assets/html/episodes-index.html",
      controller: "Index",
      controllerAs: "IndexVm"
    })
    .state("show", {
      url: "/:title",
      templateUrl: "/assets/html/episode-show.html"
    });
  }

  EpisodeFactory.$inject = ["$resource"];
  function EpisodeFactory($resource){
    var Episode = $resource("/api/episodes/:title")
    return Episode
  }

  IndexCtrl.$inject = ["Episode"];
  function IndexCtrl(Episode){
    var vm      = this;
    vm.episodes = Episode.query();
  }
})();
