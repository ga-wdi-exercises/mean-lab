var app = angular.module('whatsOnYourMind', []);

app.controller('MainCtrl', [
  '$scope',
function($scope){
  $scope.test = 'Hello World!';
  $scope.posts = [
    {title:'post 1', upvotes: 3},
    {title:'post 2', upvotes: 94},
    {title:'post 3', upvotes: 12},
    {title:'post 4', upvotes: 2},
    {title:'post 5', upvotes: 34}
  ];

  $scope.addPost = function(){
      if(!$scope.title || $scope.title === ''){
        return;
      }
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }

}]);
