'use strict';

/**
 * @ngdoc overview
 * @name ourAppApp
 * @description
 * # ourAppApp
 *
 * Main module of the application.
 */
angular
  .module('ourAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    // var helloState = {
    //   name: 'hello',
    //   url: '/hello',
    //   template: '<h3>hello world!</h3>'
    // }

    // var aboutState = {
    //   name: 'about',
    //   url: '/about',
    //   template: '<h3>Its the UI-Router hello world app!</h3>'
    // }

    // $stateProvider.state(helloState);
    // $stateProvider.state(aboutState);

    $urlRouterProvider.otherwise('/home/page1');

    $stateProvider

      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html',
        controller: 'HomeCtrl'
      })

      // page1 from home
      .state('home.page1', {
        url: '/page1',
        templateUrl: 'views/page1.html'
      })

      // page2 from home
      .state('home.page2', {
        url: '/page2',
        templateUrl: 'views/page2.html'
      })

      // page3 from home
      .state('home.page3', {
        url: '/page3',
        templateUrl: 'views/page3.html'
      })

      // page4 from home
      .state('home.page4', {
        url: '/page4',
        templateUrl: 'views/page4.html'
      })

      // page5 from home
      .state('home.page5', {
        url: '/page5',
        templateUrl: 'views/page5.html'
      })

      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('about', {
        url: '/about',
        views: {
          '': { templateUrl: 'views/partial-about.html' },
          'columnOne@about': { template: 'Look I am a column!' },
          'columnTwo@about': {
            templateUrl: 'views/table-data.html',
            controller: 'MainCtrl'
          }
        }

      });
  });
