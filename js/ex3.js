var mesFruitsTab=["banane","pomme","annanas","pêche","fraise"];

var App = angular.module('App', []);

App.controller('monControl',function($scope){
    $scope.mesFruits=mesFruitsTab;
});