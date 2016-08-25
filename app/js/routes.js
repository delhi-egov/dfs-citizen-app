module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    var params = {
        processType: undefined,
        currentStage: undefined,
        params: undefined
    };

    $stateProvider

    .state('user',  {
        url: '/user',
        abstract: true,
        templateUrl: 'app/views/usermanagement.html',
        data: {
            css: 'build/stylesheets/usermanagement.css'
        }
    })
    .state('user.login', {
      url: '/login',
      templateUrl: 'app/views/partials/login.html',
      controller: 'loginController',
      controllerAs: 'lc'
  })
    .state('user.register', {
      url: '/register',
      templateUrl: 'app/views/partials/register.html',
      controller: 'registerController',
      controllerAs: 'rc'
  })
    .state('user.verify', {
      url: '/verify',
      templateUrl: 'app/views/partials/verify.html',
      controller: 'verifyController',
      controllerAs: 'vc'
  })
    .state('dashboard',  {
        url: '/dashboard',
        abstract: true,
        templateUrl: 'app/views/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dc',
        data: {
            css: 'build/stylesheets/dashboard.css'
        }
    })
    .state('dashboard.home', {
      url: '/',
      templateUrl: 'app/views/partials/home.html',
      controller: 'homeController',
      controllerAs: 'hc'
  })
    .state('dashboard.applications', {
      url: '/applications',
      templateUrl: 'app/views/partials/applications.html',
      controller: 'applicationsController',
      controllerAs: 'ac'
  })
    .state('NewPlanNOC', {
      abstract: true,
      templateUrl: 'app/views/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dc',
      data: {
            css: 'build/stylesheets/application.css'
      }
  })
    .state('NewPlanNOC.create', {
      templateUrl: 'app/views/partials/new_plan_create.html',
      controller: 'createController',
      controllerAs: 'cc',
      params: params
  })
    .state('NewPlanNOC.fillForm', {
      templateUrl: 'app/views/partials/new_plan_form.html',
      controller: 'fillFormController',
      controllerAs: 'ffc',
      params: params
  })
    .state('NewPlanNOC.uploadDesign', {
      templateUrl: 'app/views/partials/new_plan_attach.html',
      controller: 'attachReportController',
      controllerAs: 'arc',
      params: params
  })
    .state('NewPlanNOC.complete', {
      templateUrl: 'app/views/partials/new_plan_submit.html',
      controller: 'submitController',
      controllerAs: 'sc',
      params: params
  });

    $urlRouterProvider.otherwise('/dashboard/');

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
};
