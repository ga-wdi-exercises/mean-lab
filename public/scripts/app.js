angular
  .module('odot', [])
  .controller('TasksIndexController', TasksIndexController);

TasksIndexController.$inject = ['$http'];

function TasksIndexController ( $http ) {
  var vm = this;
  vm.newTask = {};
  vm.newTask = {
    name: 'pick up beer',
    dueDate: 'today'
  };

  $http({
    method: 'GET',
    url: '/api/tasks'
  }).then(function successCallback(response) {
    vm.tasks = response.data;
  }, function errorCallback(response) {
    console.log('error:', response);
  });

  vm.createTask = function() {
    $http({
      method: 'POST',
      url: '/api/tasks',
      data: vm.newTask,
    }).then(function successCallback (response) {
      vm.tasks.push(response.data);
    }, function errorCallback (response) {
      console.log('there was an error with', response);
    });
  }
}
