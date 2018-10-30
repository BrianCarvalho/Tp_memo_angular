var mesFruitsTab = ["banane","pomme","annanas","peche","fraise"];
var App = angular.module('App', []);

App.controller('monControl',function($scope){
    $scope.visible = false;
    $scope.mesFruits=mesFruitsTab;
    $scope.affichage=function(){
        if($scope.visible==false){
            $scope.visible=true;
        }
        else{
            $scope.visible=false;
        }
    }
});
        
    
