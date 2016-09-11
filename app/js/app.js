var angular = require("angular");

require("angular-ui-router");
require("ng-file-upload");
require('angular-ui-router-styles');
require('angular-block-ui');

var angularCitizenClient = require("angular-citizen-client");
var appConfig = require("../config/app_config");
var routes = require("./routes");

var userController = require("./controllers/user_controller");
var loginController = require("./controllers/login_controller");
var registerController = require("./controllers/register_controller");
var verifyController = require("./controllers/verify_controller");
var homeController = require("./controllers/home_controller");
var applicationsController = require("./controllers/applications_controller");
var dashboardController = require("./controllers/dashboard_controller");
var createController = require("./controllers/create_controller");
var fillFormController = require("./controllers/fill_form_controller");
var attachReportController = require("./controllers/attach_report_controller");
var submitController = require("./controllers/submit_controller");

var app = angular.module("app", ['ui.router', 'ngFileUpload', 'uiRouterStyles', 'blockUI']);

//Filters
app.filter('statusFilter', function() {
	return function(status) {
		if(status === 'PROGRESS') {
			return 'Progress';
		}
		else if(status === 'NOT_SUBMITTED') {
			return 'Not Submitted';
		}
		else if(status === 'WAITING_ON_USER') {
			return 'Needs Editing';
		}
	}
});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

//Interceptors registration
app.factory("authenticationInterceptor", ['$q', '$location', '$injector', 'authInfo', angularCitizenClient.authenticationInterceptor]);

//Services registration
app.factory("appConfig", appConfig);
app.factory("authInfo", angularCitizenClient.infoHolder);
app.factory("applicationInfo", angularCitizenClient.infoHolder);
app.factory("backendClient", ['$http', 'Upload', angularCitizenClient.backendClient]);
app.factory("userService", ['$state', 'backendClient', 'authInfo', angularCitizenClient.userService]);
app.factory("dashboardService", ['$state', 'backendClient', 'authInfo', 'applicationInfo', 'appConfig', angularCitizenClient.dashboardService]);
app.factory("applicationService", ['$state', 'backendClient', 'authInfo', 'applicationInfo', 'appConfig', angularCitizenClient.applicationService]);

//Controller registration
app.controller("userController", ['userService', userController]);
app.controller("loginController", ['userService', loginController]);
app.controller("registerController", ['userService', registerController]);
app.controller("verifyController", ['userService', 'authInfo', '$scope', verifyController]);
app.controller("homeController", ['userService', 'dashboardService', homeController]);
app.controller("applicationsController", ['dashboardService', 'userService', applicationsController]);
app.controller("dashboardController", ['userService', 'dashboardService', 'authInfo', '$state', '$scope', '$timeout', dashboardController]);
app.controller("createController", ['applicationService', createController]);
app.controller("fillFormController", ['applicationService', fillFormController]);
app.controller("attachReportController", ['applicationService', attachReportController]);
app.controller("submitController", ['applicationService', submitController]);

//Configuration
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
	$httpProvider.interceptors.push('authenticationInterceptor');
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	routes($stateProvider, $urlRouterProvider, $locationProvider);
}]);

//Run on load
app.run(['backendClient', 'authInfo', function(backendClient, authInfo) {
	backendClient.me().then(function(response) {
		console.log("User data loaded");
	}, function(response) {
		console.error("Could not load user information");
	});
}]);
