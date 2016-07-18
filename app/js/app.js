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
var createNewPlanController = require("./controllers/create_new_plan_controller");
var fillFormNewPlanController = require("./controllers/fill_form_new_plan_controller");
var attachReportNewPlanController = require("./controllers/attach_report_new_plan_controller");
var submitNewPlanController = require("./controllers/submit_new_plan_controller");

var app = angular.module("app", [ngMaterial, 'ui.router', 'ngMessages', 'ngFileUpload']);

//Interceptors registration
app.factory("redirectToLoginInterceptor", ['$q', '$location', interceptors.redirectToLoginInterceptor]);

//Services registration
app.factory("authInfoService", services.authInfoService);

//Controller registration
app.controller("loginController", ['$scope', '$http', '$state', 'authInfoService', loginController]);
app.controller("registerController", ['$scope', '$http', '$state', 'authInfoService', registerController]);
app.controller("homeController", ['$scope', '$http', '$state', 'authInfoService', homeController]);
app.controller("createNewPlanController", ['$scope', '$http', '$state', 'authInfoService', createNewPlanController]);
app.controller("fillFormNewPlanController", ['$scope', '$http', '$state', 'authInfoService', fillFormNewPlanController]);
app.controller("attachReportNewPlanController", ['$scope', '$http', '$state', 'authInfoService', 'Upload', attachReportNewPlanController]);
app.controller("submitNewPlanController", ['$scope', '$http', '$state', 'authInfoService', submitNewPlanController]);

app.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                 $httpProvider.interceptors.push('redirectToLoginInterceptor');
                 routes($stateProvider, $urlRouterProvider);

                 $mdThemingProvider.theme('docs-dark').dark();
}]);
