var CarApp = angular.module('CarAppModel',['ngRoute']);

CarApp.controller('carDataController', function($scope){

    $scope.cars = [{model:'Audi', price:2000},
                   {model:'Ford', price:3000},
                   {model:'Trabant', price:200},
                   {model:'Vauxhall', price:350},
                   {model:'Ferrari', price:4500},
                   {model:'Toyota', price:300}];
    
    $scope.addCar = function(){
        $scope.cars.push({model:$scope.carModel, price:$scope.carPrice});
    };
    
});

CarApp.config(function($routeProvider){

    //When user hits the root route
    $routeProvider.when('/',{
        controller:'carDataController',
        templateUrl:'view1.html'
    })
    .when('/cars',{
          controller:'carDataController',
          templateUrl:'view2.html'
    })
    .otherwise({
        redirectTo:'/'
    });

});
                    