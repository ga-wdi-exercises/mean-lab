angular
  .module('coolgarbage', [
    'ngResource'
  ])
  .controller('MainCtrl', [
    'GarbageFactory',
    MainCtrlFunction
  ])
  .factory('GarbageFactory', [
    '$resource',
    GarbageFactoryFunction
  ])

  function GarbageFactoryFunction($resource) {
    return $resource('http://localhost:3001/garbages')
  }


  function MainCtrlFunction(GarbageFactory){
    this.newGarbage = new GarbageFactory()
    this.garbage = GarbageFactory.query();
    this.addGarbage = function() {
      this.newGarbage.cools = 0
      this.newGarbage.$save().then((garbage) => {
        console.log(garbage)
        this.garbage = GarbageFactory.query();
      })
    }
  }
