var app =
angular.module('whatsOnYourMind', [
    'ui.router'
  ]);
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider){

      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'ng-views/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });
      $urlRouterProvider.otherwise('home');
  }]);
  app.factory('post', [function(){
    var o = {
      posts: []
    };
    return o;
  }])
app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
      $scope.posts = posts.posts;

      $scope.addPost = function(){
        if(!$scope.title || $scope.title === ''){
          return;
    }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool Post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
    });
      $scope.title = '';
      $scope.link = '';
    };

      $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }

}])
app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateparams, posts){
      $scope.post = posts.posts[$stateParams.id];
  }]);
