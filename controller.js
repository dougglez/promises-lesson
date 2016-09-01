angular.module('app').controller('controller', function ($scope, service1, $q, pokemonService) {
    $scope.says = "I am a scope";

    $scope.theThingWeAskedFor = "Asking for the thing...";

    $scope.my6yearOldWantsAUnicorn = function () {
        var promise = service1.getMeAUnicorn();
        
        promise.then(function(whatIaskedFor){
            $scope.theThingWeAskedFor = whatIaskedFor;
        })
    }

    $scope.my6yearOldWantsAUnicorn();


//CONFIG

    $scope.getPokemonFromService = function(){
        pokemonService.getPokemon().then(function(result){
            $scope.pokemon = result;
        }, function(){
            
        })
            
    }
    
    function resolve(){
        
    }
    
    function reject(){
        
    }
    
    promise.then(resolve, reject);
    
    

    $scope.getPokemon = function(){
       $scope.getPokemonFromService();
    }


//


   


    $scope.submitApplication = function () {
        validationService.checkAllFieldsCompleted()
            .then(creditService.creditCheck)
            .then(validationService.checkEmailIsValid)
            .then(validationService.checkAddressIsValid)
            .then(brokerService.assignBrokerBasedOnAddress, errorService.handleInvalidAddress)
            .then(loanService.calculateInterestRate)



    }



});