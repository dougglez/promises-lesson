angular.module('app').service('service1', function($q, $timeout,$http){
    //Basic example
    
    this.getMeAUnicorn = function(){
        //Create an object that can defer
        var defer = $q.defer();
        
        $http({
            url: 'http://Russia/tastyFood',
            method: 'GET'
        }).then(function(response){
            defer.resolve(response);
        })
        
        //use the object to return a promise
        return defer.promise;
    }
    
});



angular.module('app').service('pokemonService', function($http, $q){
    
    // Config example
    var pokemon = null;
    
    this.getPokemon = function(){
        var defer = $q.defer();
        if(pokemon){
            defer.resolve(pokemon);
        } else {
           $http.get('http://pokeapi.co/api/v2/pokemon/1/')
               .then(function(response){
                  pokemon = response.data;
                  defer.resolve(response.data);
               })
        }
        
        return defer.promise;
    }
   
});

angular.module('app').service('multiPointDataService', function($http, $q){
    // Multi-data example
    
    
});






