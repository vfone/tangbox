'use strict';

/**
 * @ngdoc function
 * @name tangboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tangboxApp
 */
angular.module('tangboxApp')
  .controller('MainCtrl', function ($scope) {
    var Main = this;

    Main.awesomeThings = [
      'Main, HTML5 Boilerplate',
      'Main, AngularJS',
      'Main, Karma'
    ];
    $scope.data = "MainData";
  });

