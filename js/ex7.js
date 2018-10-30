var mesFruitsTab =[];


var App = angular.module('App', []);
App.controller('monControl',function($scope){
    $scope.mesFruits=mesFruitsTab;
    
    $scope.ajout=function(){
        
        if ($scope.monFruit != ""){
            $scope.mesFruits.push($scope.monFruit);
            $scope.monFruit="";
        }
    }
});