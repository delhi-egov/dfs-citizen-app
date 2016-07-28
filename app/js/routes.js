module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    var params = {
        processType: undefined,
        currentStage: undefined,
        params: undefined
    };

    $stateProvider
                 .state('login', {
                                  url: '/login',
                                  templateUrl: 'app/views/login.html',
                                  controller: 'loginController',
                                  controllerAs: 'lc'
                 })
                 .state('register', {
                                  url: '/register',
                                  templateUrl: 'app/views/register.html',
                                  controller: 'registerController',
                                  controllerAs: 'rc'
                 })
                 .state('verify', {
                                  url: '/verify',
                                  templateUrl: 'app/views/verify.html',
                                  controller: 'verifyController',
                                  controllerAs: 'vc'
                 })
                 .state('home', {
                                  url: '/',
                                  templateUrl: 'app/views/home.html',
                                  controller: 'homeController',
                                  controllerAs: 'hc'
                 })
                 .state('BuildingPlanNOC', {
                                  //url: '/new',
                                  abstract: true,
                                  templateUrl: 'app/views/new_plan.html',
                                  controller: 'dashboardController',
                                  controllerAs: 'dc'
                 })
                 .state('BuildingPlanNOC.create', {
                                  //url: '/create',
                                  templateUrl: 'app/views/new_plan_create.html',
                                  controller: 'createController',
                                  controllerAs: 'npc',
                                  params: params
                 })
                 .state('BuildingPlanNOC.fillForm', {
                                  //url: '/fillForm',
                                  templateUrl: 'app/views/new_plan_form.html',
                                  controller: 'fillFormController',
                                  controllerAs: 'npc',
                                  params: params
                 })
                 .state('BuildingPlanNOC.uploadDesign', {
                                  //url: '/attachReport',
                                  templateUrl: 'app/views/new_plan_attach.html',
                                  controller: 'attachReportController',
                                  controllerAs: 'npc',
                                  params: params
                 })
                 .state('BuildingPlanNOC.complete', {
                                  //url: '/submit',
                                  templateUrl: 'app/views/new_plan_submit.html',
                                  controller: 'submitController',
                                  controllerAs: 'npc',
                                  params: params
                 });

                 $urlRouterProvider.otherwise('/');

                 // use the HTML5 History API
                 $locationProvider.html5Mode(true);
};
