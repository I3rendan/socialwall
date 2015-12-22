'use strict';

angular.module('socialwallApp')
.controller('MainCtrl', function ($scope, $http, $timeout, $interval) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.bricks = [];

  function getPhotos (){
    $http.get('db/feed.json').success(function(data){
      $scope.bricks.push(data.photos);
      $scope.makeActive(-1);
    });
    // getNewPhotos();
  }

  getPhotos();

  function getNewPhotos (){
    var time = 0;
    console.log($scope.bricks);
    $http.get('db/newFeed.json').success(function(data){
      if(data.result===0){
        $interval(function(){
          $scope.makeActive($scope.getRandomArbitrary(0, $scope.bricks.length) - 1);
        }, 3000,5);
      } else {
        for (var i = 0; i <data.photos.length; i++){
          (function(i){
            $timeout(function() {
              console.log(i);
              console.log(data.photos[i]);
              $scope.bricks[0].splice(0,0,data.photos[i]);
              $scope.bricks[0].pop();
              console.log($scope.bricks);
            }, 3000);
          })(i);
        }
        time = 3000*data.photos.length;
        console.log(time);
      }
      setTimeout(getNewPhotos,time);
    });
  }

  // getNewPhotos();

  // Demo Stuff

  $scope.add = function add() {
    $scope.bricks.push();
  };

  $scope.remove = function remove() {
    $scope.bricks.splice();
  };

  // End Demo


  var $container = angular.element('#masonry-wrap');

  $scope.getRandomArbitrary = function(min, max){
    return Math.round(Math.random() * (max - min) + min);
  };

  // $interval(function(){
  //   $scope.makeActive($scope.getRandomArbitrary(0, $scope.bricks.length) - 1);
  // }, 3000,5);

  $scope.makeActive = function(index){
    $scope.isActive = index;
    $timeout(function(){
      $container.masonry('reloadItems');
      $container.masonry('layout');
    }, 500);
  };

});
