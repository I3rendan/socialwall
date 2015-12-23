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
      $timeout(function(){
        $container.masonry('reloadItems');
        $container.masonry('layout');
      }, 500);

    });
    getNewPhotos();
  }

  getPhotos();
  $scope.data = [];

  function getNewPhotos (){
    var time = 0;
    $http.get('db/newFeed.json').success(function(data){
      $scope.data.push(data.photos);
      if(data.result===0){
        $interval(function(){
          $scope.makeActive($scope.getRandomArbitrary(0, $scope.bricks.length) - 1);
        }, (data.loopTime*1000),5);
      } else {
        var i = 0;
        var length = data.photos.length;
        var repeatTime = (data.loopTime*1000)

        addNew(i);
        time = (data.loopTime*1000)*length;
        console.log(time);
      }
      setTimeout(getNewPhotos,time);
    });
  }

  function addNew(i){
    $scope.bricks[0].unshift($scope.data[0][i]);
    $scope.bricks[0].pop();
    i++;
    console.log(i);
    if (i<length){
      $timeout(addNew,3000);
    }
  }

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
