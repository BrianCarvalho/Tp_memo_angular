var mesFruitsTab=["banane","pomme","annanas","peche","fraise"];
var App = angular.module('App', []);

App.controller('monControl',function($scope){
    $scope.affichage = function(){
        $scope.mesFruits=mesFruitsTab;
    }});