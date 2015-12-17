'use strict';

angular
  .module('socialwallApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'wu.masonry'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
