angular
.module("upvoter", [
  "ui.router",
  "ngResource"
])

.config([
  "$stateProvider",
  RouterFunction
])

.factory("PostFactory", [
  "$resource",
  PostFactoryFunction
])

.controller("PostIndexController",[
  "PostFactory",
  "$state",
  PostIndexControllerFunction
])

.controller("PostShowController",[
  "PostFactory",
  "$stateParams",
  PostShowControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
  .state("postIndex",{
    url: "/posts",
    templateUrl: "js/ng-views/index.html",
    controller: "PostIndexController",
    controllerAs: "indexVm"
  })
  .state("postShow",{
    url: "/posts",
    templateUrl: "js/ng-views/show.html",
    controller: "PostShowController",
    controllerAs: "showVm"
  })
}

function PostFactoryFunction($resource){
  return $resource ("http://localhost:3001/posts/:id")
}

function PostIndexControllerFunction (PostFactory, $state){
  var indexVm = this;
  this.posts = PostFactory.query()
  this.newPost = new PostFactory()
  this.create = function(){
    this.newPost.$save()
  }
}

function PostShowControllerFunction(PostFactory, $stateParams, $state){
  this.post = PostFactory.get({_id: $stateParams.id})
  this.update = function() {
    this.post.$update({_id: $stateParams.id});

  }
  this.destroy = function() {
    this.post.$delete({_id: $stateParams.id});
  }

}
