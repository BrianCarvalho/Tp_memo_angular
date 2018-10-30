var mesElevesTab =[];


var App = angular.module('App', []);
App.controller('monControl',function($scope){
    $scope.mesEleves=mesElevesTab;
    
    $scope.ajout=function(){
        
        if ($scope.eleve != ""){
            $scope.mesEleves.push($scope.eleve);
                $scope.eleve="";
        }
            if ($scope.eleve1 != ""){
                $scope.mesEleves.push($scope.eleve1);
                    $scope.eleve1="";}
        
                if ($scope.eleve2 != ""){
                    $scope.mesEleves.push($scope.eleve2);
                        $scope.eleve2="";}    

                    if ($scope.eleve3 != ""){
                        $scope.mesEleves.push($scope.eleve3);
                            $scope.eleve3="";}

    }
});