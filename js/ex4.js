var App = angular.module('App', []);

App.controller('monControleur',function($scope){
    $scope.tabSerie=[
        {
            titre:"Le trone de fer",
            titreOr: "Game of Thrones",
            createur: "David Benioff et D.B.Weiss",
            urlImage:"image/got.jpg",
            etat:"en cours saison 04 diffusée au printemps 2014"},
            {
                titre:"Lost : Les disparus",
                titreOr: "Lost",
                createur: "J.J Abrams,Damon Lindelof et Jeffrey Lieber ",
                urlImage:"image/lost.jpg",
                etat:"terminée"},    
            {
                titre:"Homeland",
                titreOr: "Homeland",
                createur: "Howard Gordon et Alex Gansa ",
                urlImage:"image/homeland.jpg",
                etat:"En cours, saison 03 diffusée en septembre 2013"},
            
            ]});
