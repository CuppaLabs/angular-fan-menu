'use strict';

/**
 * @ngdoc overview
 * @name macMenuApp
 * @description
 * # macMenuApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'circularMenu-directive'
  ])
  .controller('demoAppController',function($scope){

$scope.menuConfig = {
  "buttonWidth": 60,
  "menuRadius": 160,
  "color": "#ff7f7f",
  "offset":25,
  "textColor": "#ffffff",
  "showIcons":false,
  "gutter": {
    "top": 130,
    "right": 30,
    "bottom": 30,
    "left": 30
  },
  "angles": {
    "topLeft": 0,
    "topRight": 90,
    "bottomRight": 180,
    "bottomLeft": 270
  }
};

$scope.menuItems = [{
  "title": "iPad",
  "color": "#ea2a29",
  "rotate": 0,
  "show": 0,
  "titleColor": "#fff",
  "icon":{"color":"#fff","name":"fa fa-tablet","size": 35}
}, {
  "title": "iMac",
  "color": "#f16729",
  "rotate": 0,
  "show": 0,
  "titleColor": "#fff",
  "icon":{"color":"#fff","name":"fa fa-laptop","size": 30}
}, {
  "title": "iPhone",
  "color": "#f89322",
  "rotate": 0,
  "show": 0,
  "titleColor": "#fff",
  "icon":{"color":"#fff","name":"fa fa-mobile","size": 30}
}, {
  "title": "iWatch",
  "color": "#ffcf14",
  "rotate": 0,
  "show": 0,
  "titleColor": "#fff",
  "icon":{"color":"#fff","name":"fa fa-clock-o","size": 30}
}];
$scope.menuConfig2 = {
  "buttonWidth": 60,
  "menuRadius": 150,
  "color": "#ff7f7f",
  "offset":25,
  "textColor": "#ffffff",
  "showIcons":true,
  "onlyIcon":true,
  "textAndIcon": false,
  "gutter": {
    "top": 130,
    "right": 30,
    "bottom": 30,
    "left": 30
  },
  "angles": {
    "topLeft": 0,
    "topRight": 90,
    "bottomRight": 180,
    "bottomLeft": 270
  }
};
$scope.menuConfig3 = {
  "buttonWidth": 60,
  "menuRadius": 180,
  "color": "#ff7f7f",
  "offset":25,
  "textColor": "#ffffff",
  "showIcons":true,
  "onlyIcon":false,
  "textAndIcon": true,
  "gutter": {
    "top": 130,
    "right": 30,
    "bottom": 30,
    "left": 30
  },
  "angles": {
    "topLeft": 0,
    "topRight": 90,
    "bottomRight": 180,
    "bottomLeft": 270
  }
};

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
