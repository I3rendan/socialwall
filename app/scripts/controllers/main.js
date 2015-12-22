'use strict';

angular.module('socialwallApp')
  .controller('MainCtrl', function ($scope) {
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


    $scope.makeActive = function(index){
      $scope.isActive = index;

      angular.element('#masonry-wrap').masonry('reloadItems');
      angular.element('#masonry-wrap').masonry();
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
