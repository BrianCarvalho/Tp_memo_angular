maFiche={
    id: "7845",
    nom:"Durand",
    prenom: "Jean-pîerre",
    dateNaissance: "17/08/1967"
}
var App = angular.module('App', []);

App.controller('monControl',function($scope){
    $scope.infoPerso=maFiche;
});