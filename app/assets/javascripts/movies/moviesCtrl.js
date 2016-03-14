angular.module('MovieCollection')
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