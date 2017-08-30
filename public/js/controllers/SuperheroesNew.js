angular
  .module('superheroes')
  .controller('SuperheroesNew', [
    '$state',
    'SuperheroFactory',
    SuperheroesNew
  ])

  function SuperheroesNew ($state, SuperheroFactory) {
    this.superhero = new SuperheroFactory()
    this.createHero = function () {
      this.superhero.$save().then((res) => {
        console.log(res)
        $state.go('superheroesShow', { id: res._id })
      })
    }
  }
