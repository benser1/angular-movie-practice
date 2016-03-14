angular.module('MovieCollection', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainController'
        })
        .state('movies', {
          url: '/movies/{id}',
          templateUrl: '/movies.html',
          controller: 'MoviesCtrl'
        });

        $urlRouterProvider.otherwise('home');
    }])

     .factory('movies', [function(){
      var o = {
        movies: []
      };
      return o;
    }])

  .controller('MainController', ['$scope', 'movies',
    function($scope, movies) {

      $scope.movies = movies.movies;

      $scope.addMovie = function() {
        if(!$scope.title || $scope.title === '') { return; }
        $scope.movies.push({
          title: $scope.title, 
          year: $scope.year, 
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
        });
        $scope.title = '';
        $scope.year = '';
      };

      $scope.incrementUpvotes = function(movie) {
        movie.upvotes += 1;
      };

    }])

  .controller('MoviesCtrl', [
    '$scope',
    '$stateParams',
    'movies',
    function($scope, $stateParams, movies){
      $scope.movie = movies.movies[$stateParams.id];

      $scope.addComment = function(){
        if($scope.body === '') { return; }
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body = '';
      };
    }]);
