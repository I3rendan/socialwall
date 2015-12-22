'use strict';

(function(){
  angular
  .module('socialwallApp')
  .factory('BricksFactory', [
    '$resource',
    FactoryFunction
  ]);

  function FactoryFunction($http,$scope) {
    var url = 'http://sbviewer.com/app/montagephotos/cfp';
    $http.get(url)
    .then(function(response) {
      console.log(response.data);
      $scope.bricks = response.data.records;
    });
  }

}());
