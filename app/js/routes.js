module.exports = function($stateProvider, $urlRouterProvider) {
    $stateProvider
                 .state('login', {
                                  url: '/login',
                                  templateUrl: 'views/login.html',
                                  controller: 'loginController',
                                  controllerAs: 'lc'
                 })
                 .state('register', {
                                  url: '/register',
                                  templateUrl: 'views/register.html',
                                  controller: 'registerController',
                                  controllerAs: 'rc'
                 })
                 .state('home', {
                                  url: '/home',
                                  templateUrl: 'views/home.html',
                                  controller: 'homeController',
                                  controllerAs: 'hc'
                 })
                 .state('newPlan', {
                                  url: '/newPlan',
                                  abstract: true,
                                  templateUrl: 'views/new_plan.html'
                 })
                 .state('newPlan.create', {
                                  url: '/create',
                                  templateUrl: 'views/new_plan_create.html',
                                  controller: 'createController',
                                  controllerAs: 'npc',
                                  params: {
                                      application: undefined,
                                      process: undefined,
                                      form: undefined,
                                      report: undefined
                                  }
                 })
                 .state('newPlan.fillForm', {
                                  url: '/fillForm',
                                  templateUrl: 'views/new_plan_form.html',
                                  controller: 'fillFormController',
                                  controllerAs: 'npc',
                                  params: {
                                      application: undefined,
                                      process: undefined,
                                      form: undefined,
                                      report: undefined
                                  }
                 })
                 .state('newPlan.attachReport', {
                                  url: '/attachReport',
                                  templateUrl: 'views/new_plan_attach.html',
                                  controller: 'attachReportController',
                                  controllerAs: 'npc',
                                  params: {
                                      application: undefined,
                                      process: undefined,
                                      form: undefined,
                                      report: undefined
                                  }
                 })
                 .state('newPlan.submit', {
                                  url: '/submit',
                                  templateUrl: 'views/new_plan_submit.html',
                                  controller: 'submitController',
                                  controllerAs: 'npc',
                                  params: {
                                      application: undefined,
                                      process: undefined,
                                      form: undefined,
                                      report: undefined
                                  }
                 });

                 $urlRouterProvider.otherwise('/home');
};
