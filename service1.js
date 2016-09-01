angular.module('app').service('service1', function($q, $timeout,$http){
    //Basic example

    this.getMeAUnicorn = function(){
        //Create an object that can defer
        var deferObj = $q.defer();


        //$timeout is service to say after this amt of time (ms) do this.
        $timeout(function() {
          deferObj.resolve("Here is a stuffed animal cat");
        }, 10);

        //use the object to return a promise
        //this.getMeAUnicorn returns a promise, noting else yet
        // allows js to continue running other stuff
        //w/o a promise, js will get stuck on this and wait until it has a response
        return deferObj.promise;
    };

});



angular.module('app').service('pokemonService', function($http, $q){

    // Config example
    var pokeCenterPokemon = null;

    this.getPokemon = function(){
        var defer = $q.defer();
        if(pokeCenterPokemon){
            defer.resolve(pokeCenterPokemon);
        } else {
           var httpPromise = $http.get('http://pokeapi.co/api/v2/pokemon/1/');
               httpPromise.then(function(response){
                  pokeCenterPokemon = response.data;
                  defer.resolve(response.data);
               });
        }

        return defer.promise;
    };

});

angular.module('app').service('multiPointDataService', function($http, $q){
    // Multi-data example


});
