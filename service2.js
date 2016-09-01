angular.module('app').service('introvertSchedulingService', function($q, $timeout){
  
  this.willHangOut = function(){
     
    var deferObj = $q.defer();
    var warm = false;
    var date = false;
    var distance = false;
    
    var warmDone = false;
    var dateDone = false;
    var distanceDone = false;
    
    
    function checkWeather(){
        $http.get('http://weather.com/api/warm')
            .then(function(response){
                warm = response.data;
                warmDone = true;
                checkAllGood();
            })
    }
    
    function checkHowLongSinceLastSocialFunction(){
        $http.get('http://calendar.com/api/dateSinceLastDoingSomething')
            .then(function(response){
                date = response.data;
                dateDone = true;
                checkAllGood();
            })
    }
    
    function checkDistanceToTravel(){
        $http.get('http://maps.com/api/notTooFarToDrive')
            .then(function(response){
                distance = response.data;
                distanceDone = true;
                checkAllGood();
            })
    }
    
    function checkAllGood() {
        if(warmDone && dateDone && distanceDone){
            if(warm && date && distance){
                deferObj.resolve(true);
            } else {
                deferObj.reject(true);
            }
        }
    }
    
    checkDistanceToTravel();
    checkHowLongSinceLastSocialFunction();
    checkWeather();
    
    return deferObj.promise;
  }
  
});

angular.module('app').service('factorialService', function($q, $timeout){
    
    //Look into promise chaining;
    
    this.doFactorial = function (startNum) {
        var defer = $q.defer();

        defer.resolve({
            currentTotal: startNum,
            currentNum: startNum
        });

        return defer.promise;
    }

    function handleNextFactorial(num) {
        num.currentNum--;
        return {
            currentTotal: num.currentTotal * num.currentNum,
            currentNum: num.currentNum
        }
    }

    this.doFactorial(5)
        .then(handleNextFactorial)
        .then(handleNextFactorial)
        .then(handleNextFactorial)
        .then(handleNextFactorial);

});