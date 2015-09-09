'use strict';

/**
 * @ngdoc function
 * @name tangboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tangboxApp
 */
angular.module('tangboxApp')
  .controller('AboutCtrl', function () {
    var About = this;
    About.data = "aboutdata";
    About.awesomeThings = [
      'About, HTML5 Boilerplate',
      'About, AngularJS',
      'About, Karma'
    ];
  });
