var angular = require("angular");
var ngMaterial = require("angular-material");

require("angular-messages");
require("angular-ui-router");

var interceptors = require("./interceptors");
var routes = require("./routes");
var services = require("./services");

var loginController = require("./controllers/login_controller");
var registerController = require("./controllers/register_controller");
var homeController = require("./controllers/home_controller");

var app = angular.module("app", [ngMaterial, 'ui.router', 'ngMessages']);

//Interceptors registration
app.factory("redirectToLoginInterceptor", ['$q', '$location', interceptors.redirectToLoginInterceptor]);

//Services registration
app.factory("authInfoService", services.authInfoService);

//Controller registration
app.controller("loginController", ['$scope', '$http', '$state', 'authInfoService', loginController]);
app.controller("registerController", ['$scope', '$http', '$state', 'authInfoService', registerController]);
app.controller("homeController", ['$scope', '$http', '$state', 'authInfoService', homeController]);

app.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                 $httpProvider.interceptors.push('redirectToLoginInterceptor');
                 routes($stateProvider, $urlRouterProvider);

                 $mdThemingProvider.theme('docs-dark').dark();
}]);
