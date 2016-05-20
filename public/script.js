"use strict";

(function(){
  angular
  .module("myApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .factory("Post", PostFactory)
  .controller("Index", IndexCtrl);

  Router.$inject = ["$stateProvider"];
  function Router($stateProvider){
    $stateProvider
    .state("index", {
      url:          "/",
      templateUrl:  "cool/html/posts-index.html",
      controller:   "Index",
      controllerAs: "IndexVM"
    })
    .state("show",  {
      url:          "/:title",
      templateUrl:  "/cool/html/posts-show.html"
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
})();
