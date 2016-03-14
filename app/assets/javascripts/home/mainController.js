  angular.module('MovieCollection')
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