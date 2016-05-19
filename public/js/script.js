"use strict";

(function(){
  angular
  .module("throneCast", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Episode", EpisodeFactory)
  .controller("Index", IndexCtrl)
  .controller("Show", ShowCtrl)


  Router.$inject = ["$stateProvider", "$locationProvider"];
  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "/assets/html/episodes-index.html",
      controller: "Index",
      controllerAs: "IndexVm"
    })
    .state("show", {
      url: "/:_id",
      templateUrl: "/assets/html/episode-show.html",
      controller: "Show",
      controllerAs: "ShowVm"
    });
  }

  EpisodeFactory.$inject = ["$resource"];
  function EpisodeFactory($resource){
    var Episode = $resource("/api/episodes/:_id", {}, {
      update: {method: "PUT"}
    });
    return Episode;
  }

  IndexCtrl.$inject = ["Episode"];
  function IndexCtrl(Episode){
    var vm      = this;
    vm.episodes = Episode.query();
    vm.create = function(){
      Episode.save(vm.newEpisode, function(response){
        console.log(response)
        vm.episodes.push(response);
      });
    }
  }

  ShowCtrl.$inject = ["Episode", "$stateParams"];
  function ShowCtrl(Episode, $stateParams){
    var vm = this;
    vm.episode = Episode.get($stateParams);
    vm.update = function(){
      Episode.update($stateParams, vm.episode, function(response){
        console.log(response)
      });
    }
  }

})();
