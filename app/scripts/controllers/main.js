'use strict';

angular.module('socialwallApp')
.controller('MainCtrl', function ($scope, $http, $timeout) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.bricks = [];
  $scope.data = [];
  $scope.delayTime = 3000;
  $scope.container = angular.element('#masonry-wrap');

  function getPhotos(){

    // The offical feed url...
    //$http.get('/app/montagephotos/cfp').success(function(data){
    
    $http.get('/db/feed.json').success(function(data){
      $scope.bricks.push(data.photos);
      $scope.isActive = -1;
      $timeout(function(){
        shuffleBricks();
      }, 500);
    });
    $scope.loopTimeout = $timeout(getNewPhotos, $scope.delayTime);
  }

  getPhotos();

  function getNewPhotos(){

    // The offical feed url...
    // $http.get('/app/montagephotosnew/cfp').success(function(data){
    
    $http.get('/db/newFeed.json').success(function(data){

      $scope.data = [];
      $scope.data.push(data.photos);

      // THey don't have this on the json yet so commenting out...
      // $scope.delayTime = data.loopTime * 1000;

      if (data.result === 0){
        $timeout.cancel($scope.loopTimeout);
        $scope.isActive = getRandomArbitrary(0, $scope.bricks[0].length - 1);
        $timeout(function(){
          shuffleBricks();
          $scope.loopTimeout = $timeout(getNewPhotos, $scope.delayTime);
        }, 500);
      } else {
        addNewLoop();
      }
    });
  }

  function addNew(){
    if ($scope.data[0].length > 0){
      $scope.bricks[0].shift();
      $scope.bricks[0].push($scope.data[0][0]);
      $scope.data[0].shift();
      $scope.isActive = $scope.bricks[0].length - 1;
      $timeout(function(){
        shuffleBricks();
        $scope.loopTimeout = $timeout(addNewLoop, $scope.delayTime);
      }, 500);
    } else {
      $scope.loopTimeout = $timeout(getNewPhotos, $scope.delayTime);
    }
  }

  function addNewLoop(){
    $timeout.cancel($scope.loopTimeout);
    addNew();
  }

  function shuffleBricks(){
    $scope.container.masonry('reloadItems');
    $scope.container.masonry('layout');
  }

  function getRandomArbitrary(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }

});