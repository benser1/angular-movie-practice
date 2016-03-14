angular.module('MovieCollection', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainController'
        })
        .state('movies', {
          url: '/movies/{id}',
          templateUrl: 'movies/_movies.html',
          controller: 'MoviesCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }])
