angular
  .module('upvoter', [
    "ui.router",
    "upvoters"
  ]);

.config({
  "$stateProvider",
  "$localProvider",
    RouterFunction
})

.factory("PostFactory"), [
  "$resource",
  PostFactoryFunction
])

.controller("PostIndexController",[
    "PostFactory",
    "$state",
    PostIndexControllerFunction
])

// .controller("PostShowController",[
//     "PostFactory",
//     "$state",
//     PostIndexControllerFunction
// ])

funtion RouterFunction($stateProvider){
  $stateProvider
  .state(postIndex{
    url: "/posts",
    templateUrl: "js/ng-views/index.html",
    controller: "PostIndexController",
    controllerAs: "vm"
  })
}

function PostFactoryFunction($resource){
  return $resource ("http://localhost:2000/posts/:id")
}
