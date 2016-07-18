var angular = require("angular");
var ngMaterial = require("angular-material");

require("angular-messages");
require("angular-ui-router");
require("ng-file-upload");

var interceptors = require("./interceptors");
var routes = require("./routes");
var services = require("./services");

var loginController = require("./controllers/login_controller");
var registerController = require("./controllers/register_controller");
var homeController = require("./controllers/home_controller");
var createController = require("./controllers/create_controller");
var fillFormController = require("./controllers/fill_form_controller");
var attachReportController = require("./controllers/attach_report_controller");
var submitController = require("./controllers/submit_controller");

var app = angular.module("app", [ngMaterial, 'ui.router', 'ngMessages', 'ngFileUpload']);

//Interceptors registration
app.factory("redirectToLoginInterceptor", ['$q', '$location', interceptors.redirectToLoginInterceptor]);

//Services registration
app.factory("authInfoService", services.authInfoService);

//Controller registration
app.controller("loginController", ['$scope', '$http', '$state', 'authInfoService', loginController]);
app.controller("registerController", ['$scope', '$http', '$state', 'authInfoService', registerController]);
app.controller("homeController", ['$scope', '$http', '$state', 'authInfoService', homeController]);
app.controller("createController", ['$scope', '$http', '$state', 'authInfoService', createController]);
app.controller("fillFormController", ['$scope', '$http', '$state', 'authInfoService', fillFormController]);
app.controller("attachReportController", ['$scope', '$http', '$state', 'authInfoService', 'Upload', attachReportController]);
app.controller("submitController", ['$scope', '$http', '$state', 'authInfoService', submitController]);

app.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                 $httpProvider.interceptors.push('redirectToLoginInterceptor');
                 routes($stateProvider, $urlRouterProvider);

                 $mdThemingProvider.theme('docs-dark').dark();
}]);
