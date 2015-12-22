'use strict';

angular.module('socialwallApp')
.controller('MainCtrl', function ($scope,$http) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

    $http.get('./db/feed.json').success(function(data){
      $scope.data = data;
    });
  // [
  //   {
  //     id: '',
  //     src: '../images/ex/1.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/2.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/3.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/4.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/5.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/6.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/7.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/8.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/9.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/10.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/1.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/2.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/3.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/4.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/5.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/6.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/7.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/8.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/9.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/10.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/1.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/2.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/3.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/4.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/5.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/6.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/7.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/8.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/9.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/10.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/1.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/2.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/3.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/4.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/5.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/6.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/7.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/8.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/9.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/10.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/1.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/2.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/3.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/4.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/5.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/6.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/7.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/8.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/9.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/10.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/1.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/2.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/3.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/4.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/5.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/6.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/7.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/8.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/9.jpg'
  //   },{
  //     id: '',
  //     src: '../images/ex/10.jpg'
  //   }
  // ];
});
