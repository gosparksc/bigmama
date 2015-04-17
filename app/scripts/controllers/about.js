'use strict';

/**
 * @ngdoc function
 * @name bigmamaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bigmamaApp
 */
angular.module('bigmamaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
