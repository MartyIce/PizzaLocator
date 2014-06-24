'use strict';

angular
  .module('abetterAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
        .when('/About', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/Contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
