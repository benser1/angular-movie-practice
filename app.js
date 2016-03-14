angular
  .module('movieCollection', [])
  .controller('MainController', ['$scope',
    function($scope) {
      $scope.title = "Toy Story";
    }]);