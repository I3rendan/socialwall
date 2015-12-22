'use strict';

angular.module('socialwallApp')
  .controller('MainCtrl', function ($scope, $timeout, $interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



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

    $interval(function(){
      $scope.makeActive($scope.getRandomArbitrary(0, $scope.bricks.length));
    }, 3000);

    $scope.makeActive = function(index){
      $scope.isActive = index;
      $timeout(function(){
        $container.masonry('reloadItems');
        $container.masonry('layout');
      }, 500);
    };

    $scope.bricks = [
      {
        src: '../images/ex/1.jpg'
      },{
        src: '../images/ex/2.jpg'
      },{
        src: '../images/ex/3.jpg'
      },{
        src: '../images/ex/4.jpg'
      },{
        src: '../images/ex/5.jpg'
      },{
        src: '../images/ex/6.jpg'
      },{
        src: '../images/ex/7.jpg'
      },{
        src: '../images/ex/8.jpg'
      },{
        src: '../images/ex/9.jpg'
      },{
        src: '../images/ex/10.jpg'
      },{
        src: '../images/ex/1.jpg'
      },{
        src: '../images/ex/2.jpg'
      },{
        src: '../images/ex/3.jpg'
      },{
        src: '../images/ex/4.jpg'
      },{
        src: '../images/ex/9.jpg'
      },{
        src: '../images/ex/10.jpg'
      },{
        src: '../images/ex/1.jpg'
      },{
        src: '../images/ex/2.jpg'
      },{
        src: '../images/ex/3.jpg'
      },{
        src: '../images/ex/4.jpg'
      },{
        src: '../images/ex/5.jpg'
      },{
        src: '../images/ex/6.jpg'
      },{
        src: '../images/ex/5.jpg'
      },{
        src: '../images/ex/6.jpg'
      },{
        src: '../images/ex/7.jpg'
      },{
        src: '../images/ex/8.jpg'
      },{
        src: '../images/ex/7.jpg'
      },{
        src: '../images/ex/8.jpg'
      },{
        src: '../images/ex/9.jpg'
      },{
        src: '../images/ex/10.jpg'
      },{
        src: '../images/ex/1.jpg'
      },{
        src: '../images/ex/2.jpg'
      },{
        src: '../images/ex/3.jpg'
      },{
        src: '../images/ex/4.jpg'
      },{
        src: '../images/ex/5.jpg'
      },{
        src: '../images/ex/6.jpg'
      },{
        src: '../images/ex/7.jpg'
      },{
        src: '../images/ex/8.jpg'
      },{
        src: '../images/ex/9.jpg'
      },{
        src: '../images/ex/10.jpg'
      },{
        src: '../images/ex/1.jpg'
      },{
        src: '../images/ex/2.jpg'
      },{
        src: '../images/ex/3.jpg'
      },{
        src: '../images/ex/4.jpg'
      },{
        src: '../images/ex/5.jpg'
      },{
        src: '../images/ex/6.jpg'
      },{
        src: '../images/ex/7.jpg'
      }
    ];
  });
