'use strict';

/**
 * @ngdoc overview
 * @name pvcApp
 * @description
 * # pvcApp
 *
 * Main module of the application.
 */
angular
  .module('pvcApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app',{
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        ControllerAs: 'main'
    })
    .state('app.about', {
        url: 'about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .state('app.contact',{
        url: 'contact',
        template: 'TODO'
    });
    $urlRouterProvider.otherwise('/');
    
  });
