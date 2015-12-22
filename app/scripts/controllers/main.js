'use strict';

angular.module('socialwallApp')
.controller('MainCtrl', function ($scope,$http) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.bricks =
  $http.jsonp('http://sbviewer.com/app/montagephotos/cfp').success(function(data){
    console.log(data);
    $scope.data=data.photos;
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
