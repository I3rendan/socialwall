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
  var $container = angular.element('#masonry-wrap');

  function getPhotos (){
    //$http.get('/app/montagephotos/cfp').success(function(data){
    $http.get('/db/feed.json').success(function(data){

      console.log('DATA: ' + data);

      $scope.bricks.push(data.photos);
      $scope.makeActive(-1);
      $timeout(function(){
        $container.masonry('reloadItems');
        $container.masonry('layout');
      }, 500);
    });
    $scope.loopTimeout = $timeout(getNewPhotos, $scope.delayTime);
  }

  getPhotos();

  function getNewPhotos(){

    //$http.get('/app/montagephotosnew/cfp').success(function(data){
    $http.get('/db/newFeed.json').success(function(data){

      $scope.data = [];
      $scope.data.push(data.photos);
      $scope.delayTime = data.loopTime * 1000;

      if (data.result === 0){

        $scope.makeActive($scope.getRandomArbitrary(0, $scope.bricks.length) - 1);
        $scope.loopTimeout = $timeout(getNewPhotos, $scope.delayTime);

      } else {
        
        addNewLoop();
        
      }
    });
  }

  function addNew(){

    console.log('Data Length: ' + $scope.data[0].length);
    console.log('Bricks Length: ' + $scope.bricks[0].length);

    if ($scope.data.length > 1){
      
      $scope.bricks[0].pop();
      $scope.bricks[0].unshift($scope.data[0][0]);
      $scope.data[0].shift();
      $scope.loopTimeout = $timeout(addNewLoop, $scope.delayTime);

    } else {

      $scope.loopTimeout = $timeout(getNewPhotos, $scope.delayTime);

    }
  }

  function addNewLoop(){
    $timeout.cancel($scope.loopTimeout);
    addNew();
  }

  $scope.getRandomArbitrary = function(min, max){
    return Math.round(Math.random() * (max - min) + min);
  };

  $scope.makeActive = function(index){
    $scope.isActive = index;
    $scope.loopTimeout = $timeout(function(){
      $container.masonry('reloadItems');
      $container.masonry('layout');
    }, 500);
  };

});
