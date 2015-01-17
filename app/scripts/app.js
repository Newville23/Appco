'use strict';

/*
 * @ngdoc overview* 
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
angular.module('yoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMaterial',
    'ngResource',
    'ngRoute',
    'firebase',
    'ngSanitize',
    'ngTouch'

  ])
  .config(function ($routeProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default')
    .primaryColor('grey', {
      'default': '500', // by default use shade 400 from the gray palette for primary intentions
      'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '700', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '300' // use shade A100 for the <code>md-hue-3</code> class
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/proveedores', {
        templateUrl: 'views/proveedor.html',
        controller: 'ProveedorCtrl'
      })
      .when('/materiales', {
        templateUrl: 'views/material.html',
        controller: 'MaterialesCtrl',
      })
      .when('/compras', {
        templateUrl: 'views/material.html',
        controller: 'MaterialesCtrl',
      })
      .when('/proveedores/:itemname', {
        templateUrl: 'views/proveedor.html',
        controller: 'InfoCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
