'use strict';

angular.module('socialwallApp')
.controller('MainCtrl', function ($scope, $http, $timeout, $window) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.bricks = [];
  $scope.bricksDupe = [];
  $scope.data = [];
  $scope.gridCount = 0;
  $scope.newLeft = 0;
  $scope.newTop = 0;
  $scope.colNum = 5;
  $scope.loopTime = 3000;
  $scope.gifRunTime = 2000;
  $scope.container = angular.element('#masonry-wrap');

  $scope.getPhotos = function(){
    // The offical feed url...
    //$http.get('/app/montagephotos/cfp').success(function(data){

    // Demo feed url
    $http.get('/db/feed.json').success(function(data){
      $scope.bricks.push(data.photos);
      $scope.bricksDupe = angular.copy($scope.bricks);
      $scope.isActive = -1;
      $scope.loopTime = data.loopTime * 1000;
      $scope.gifRunTime = data.gifRunTime * 1000;
      $scope.colNum = data.colNum;
      $scope.sizeGrid();
    });
  };

  $scope.sizeGrid = function(){
    $scope.colNumWidth = 100 / $scope.colNum;
    $scope.winWidth = $window.innerWidth;
    $scope.winHeight = $window.innerHeight;
    $scope.brickWidth = angular.element('.brick').width();
    $scope.brickHeight = angular.element('.brick').height();
    $scope.colStyle = {'width': $scope.colNumWidth + '%'};
    $scope.getNewPhotos();
  };

  $scope.sizeNewBrick = function(){
    $scope.newBrickWidth = angular.element('#new-brick').width();
    $scope.newBrickHeight = angular.element('#new-brick').height();
    $scope.newLeft = ($scope.winWidth / 2) - ($scope.newBrickWidth / 2) + 'px';
    $scope.newTop = ($scope.winHeight / 2) - ($scope.newBrickHeight / 2) + 'px';
    $scope.newBrickStyle = {'top': $scope.newTop, 'left': $scope.newLeft};
  };

  angular.element($window).bind('resize', function(){
    $scope.sizeGrid();
  });

  $scope.getNewPhotos = function(){
    // The offical feed url...
    //$http.get('/app/montagephotosnew/cfp').success(function(data){

    // Demo feed url
    $http.get('/db/newFeed.json').success(function(data){
      $scope.data = [];
      $scope.data.push(data.photos);
      $scope.loopTime = data.loopTime * 1000;
      $scope.gifRunTime = data.gifRunTime * 1000;

      if (data.result === 0){
        $timeout.cancel($scope.gifTimeout);
        $timeout.cancel($scope.loopTimeout);
        $scope.swapContent(false);
        $scope.loopTimeout = $timeout(function(){
          $scope.getNewPhotos();
        }, $scope.loopTime);
      } else {
        $scope.addNewLoop();
      }
    });
  };

  $scope.swapContent = function(isNew){

    $scope.isActive = getRandomArbitrary(0, $scope.bricks[0].length - 1);
    $scope.swapItem = angular.element('#brick' + $scope.isActive);

    if (isNew === true){

      $scope.newBrick = $scope.data[0][0];

      angular.element('#new-brick-img').ready(function(){

        $scope.sizeNewBrick();

        $scope.newVisible = true;
        angular.element('#new-brick').animate({opacity: 1}, 500, function(){

          $scope.gifTimeout = $timeout(function(){

            angular.element('#new-brick').animate({opacity: 0}, 500);

            $scope.swapItem.animate({ opacity: 0 }, 500, function(){
              $scope.bricks[0][$scope.isActive] = $scope.newBrick;
              $scope.bricksDupe[0].push($scope.data[0][0]);
              $scope.data[0].shift();
              $scope.$apply();
              $scope.swapItem.animate({ opacity: 1 }, 500);
            });

            var swapTop = $scope.swapItem.offset().top;
            var swapLeft = $scope.swapItem.offset().left;
            var swapWidth = $scope.swapItem.width();
            var swapHeight = $scope.swapItem.height();

            $scope.newTop = swapTop + (swapHeight / 2) + 'px';
            $scope.newLeft = swapLeft + (swapWidth / 2) + 'px';
            $scope.newBrickStyle = {'top': $scope.newTop, 'left': $scope.newLeft};
            $scope.newVisible = false;
        
            $scope.loopTimeout = $timeout(function(){
              $scope.addNewLoop();
            }, $scope.loopTime);
          }, $scope.gifRunTime);
        });
      });
    } else {
      $scope.swapItem.animate({ opacity: 0 }, 500, function(){
        $scope.newBrick = $scope.bricksDupe[0][getRandomArbitrary(0, $scope.bricksDupe[0].length - 1)];
        $scope.bricks[0][$scope.isActive] = $scope.newBrick;
        $scope.$apply();
        $scope.swapItem.animate({ opacity: 1 }, 500);
      });
    }
  };

  $scope.addNew = function(){
    if ($scope.data[0].length > 0){
      $scope.swapContent(true);
    } else {
      $scope.getNewPhotos();
    }
  };

  $scope.addNewLoop = function(){
    $timeout.cancel($scope.gifTimeout);
    $timeout.cancel($scope.loopTimeout);
    $scope.addNew();
  };

  function getRandomArbitrary(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }
});