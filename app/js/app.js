var angular = require("angular");
var ngMaterial = require("angular-material");

require("angular-messages");
require("angular-ui-router");
require("ng-file-upload");
require('angular-material-data-table');

var angularCitizenClient = require("angular-citizen-client");
var appConfig = require("../config/app_config");
var routes = require("./routes");

var loginController = require("./controllers/login_controller");
var registerController = require("./controllers/register_controller");
var verifyController = require("./controllers/verify_controller");
var homeController = require("./controllers/home_controller");
var dashboardController = require("./controllers/dashboard_controller");
var createController = require("./controllers/create_controller");
var fillFormController = require("./controllers/fill_form_controller");
var attachReportController = require("./controllers/attach_report_controller");
var submitController = require("./controllers/submit_controller");

var app = angular.module("app", [ngMaterial, 'ui.router', 'ngMessages', 'ngFileUpload', 'md.data.table']);

//Interceptors registration
app.factory("authenticationInterceptor", ['$q', '$location', angularCitizenClient.authenticationInterceptor]);

//Services registration
app.factory("appConfig", appConfig);
app.factory("authInfo", angularCitizenClient.infoHolder);
app.factory("applicationInfo", angularCitizenClient.infoHolder);
app.factory("backendClient", ['$http', 'Upload', angularCitizenClient.backendClient]);
app.factory("userService", ['$state', 'backendClient', 'authInfo', angularCitizenClient.userService]);
app.factory("dashboardService", ['$state', 'backendClient', 'authInfo', 'applicationInfo', 'appConfig', angularCitizenClient.dashboardService]);
app.factory("applicationService", ['$state', 'backendClient', 'authInfo', 'applicationInfo', 'appConfig', angularCitizenClient.applicationService]);

//Controller registration
app.controller("loginController", ['userService', loginController]);
app.controller("registerController", ['userService', registerController]);
app.controller("verifyController", ['userService', verifyController]);
app.controller("homeController", ['userService', 'dashboardService', homeController]);
app.controller("dashboardController", ['userService', dashboardController]);
app.controller("createController", ['applicationService', createController]);
app.controller("fillFormController", ['applicationService', fillFormController]);
app.controller("attachReportController", ['applicationService', attachReportController]);
app.controller("submitController", ['applicationService', submitController]);

//Configuration
app.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
                 $httpProvider.interceptors.push('authenticationInterceptor');
                 $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
                 routes($stateProvider, $urlRouterProvider, $locationProvider);
                 $mdThemingProvider.theme('docs-dark').dark();
}]);

//Run on load
app.run(['backendClient', function(backendClient) {
                 backendClient.me().then(function(response) {
                                  console.log("User data loaded");
                 }, function(response) {
                                  console.error("Could not load user information");
                 });
}]);
