angular
  .module("musicstar", [
    "ui.router",
    "ngResource"

  ]).config(['$stateProvider',
     routerConfig

  ]).factory('ArtistFactory',[
    '$resource',
    artistsfactoryFunction

  ]).controller('ArtistsIndexCtrl')

  function routerConfig($stateProvider) {
    $stateProvider.state('welcome', {
      url: '/',
      templateUrl: '/assets/js/ng-views/welcome.html'
    });

    $stateProvider.state('index', {
      url: "/artists",
      templateUrl: "/assets/js/ng-views/index.html"
    })
  }

}());
function artistsfactoryFunction($resource) {
  return $resource('localhost:3001/api/artists/name:', {}, {
    update: {method: PUT}
  })
}
