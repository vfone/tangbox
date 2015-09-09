'use strict';

/**
 * @ngdoc overview
 * @name tangboxApp
 * @description
 * # tangboxApp
 *
 * Main module of the application.
 */
angular
  .module('tangboxApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).factory('settingFactory', function() {
    var apisettingfactory = {};
    apisettingfactory.endPoint = '../data/masterdata.json';  //global variable setting here easier for future modification
    return apisettingfactory;
  }).run(function ($rootScope, $http, settingFactory) {
    $rootScope.fetchData = function(apiURL){
      $http({method: 'GET', url: apiURL,
        format:'json'
      }).
        success(function(data) {
          $rootScope.Config = data.Config;
          $rootScope.Me = data.Me;
          //$scope.Me = $rootScope.Me;
          $rootScope.Employment = data.Employment;
          $rootScope.Education = data.Education;
          $rootScope.Skill = data.Skill;
          $rootScope.Award = data.Award;
          $rootScope.Publication = data.Publication;
          $rootScope.PetProject = data.PetProject;
        }).
        error(function(data, status, headers) {
          console.log('headers: ' + headers + '-- status: ' + status);
        });
    };
    $rootScope.fetchData(settingFactory.endPoint); //load data
  }).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
