"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Post", PostFactory)
  .controller("Index", IndexCtrl)
  .controller("Show", ShowCtrl);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url:          "/",
      templateUrl:  "cool/posts-index.html",
      controller:   "Index",
      controllerAs: "IndexVM"
    })
    .state("show",  {
      url:          "/:text",
      templateUrl:  "/cool/posts-show.html",
      controller:   "Show",
      controllerAs: "ShowVM"
    });
  }

  PostFactory.$inject = ["$resource"];
  function PostFactory($resource){
    var Post = $resource("/api/posts/:title");
    return Post;
  }

  IndexCtrl.$inject = ["Post"];
  function IndexCtrl(Post){
    var vm        = this;
    vm.posts  = Post.query();
  }

  ShowCtrl.$inject = ["Post", "$stateParams"];
  function ShowCtrl(Post, $stateParams){
    var vm = this;
    console.log($stateParams);
    vm.post = Post.get($stateParams);
  }
})();
