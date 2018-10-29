tableau=[
    {id: "7845",
    nom: "Durand",
    prenom: "jean-pierre",
    dateNaissance: "17/08/1967",},
    {id: "6578",
    nom: "Dupond",
    prenom: "Gerard",
    dateNaissance: "23/08/1967",},
    {id: "9876",
    nom: "Robert",
    prenom: "Gabriel",
    dateNaissance: "17/06/1967"}
    ];

    
    var App = angular.module('App', []);

    App.controller('monControl',function($scope){
    $scope.infoPersos=tableau;

});

