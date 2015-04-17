'use strict';

/**
 * @ngdoc overview
 * @name bigmamaApp
 * @description
 * # bigmamaApp
 *
 * Main module of the application.
 */
angular
  .module('bigmamaApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
