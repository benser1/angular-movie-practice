angular.module('MovieCollection')
  .factory('movies', [function(){
      var o = {
        movies: []
      };
      return o;
    }])