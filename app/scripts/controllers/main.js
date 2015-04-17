'use strict';

/**
 * @ngdoc function
 * @name bigmamaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bigmamaApp
 */
angular.module('bigmamaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
