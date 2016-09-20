module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    var params = {
        processType: undefined,
        currentStage: undefined,
        params: undefined
    };

    $stateProvider

    .state('user',  {
        abstract: true,
        templateUrl: 'app/views/usermanagement.html',
        controller: 'userController',
        controllerAs: 'uc',
        data: {
            css: 'build/stylesheets/usermanagement.css'
        }
    })
    .state('user.login', {
      templateUrl: 'app/views/partials/login.html',
      controller: 'loginController',
      controllerAs: 'lc',
      data: {
            css: ['build/stylesheets/login.css', 'build/stylesheets/usermanagement.css']
      }
  })
    .state('user.register', {
      templateUrl: 'app/views/partials/register.html',
      controller: 'registerController',
      controllerAs: 'rc',
      data: {
            css: ['build/stylesheets/register.css', 'build/stylesheets/usermanagement.css']
      }
  })
    .state('user.verify', {
      templateUrl: 'app/views/partials/verify.html',
      controller: 'verifyController',
      controllerAs: 'vc',
      data: {
            css: ['build/stylesheets/verify.css', 'build/stylesheets/usermanagement.css']
      }
  })
    .state('dashboard',  {
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
      templateUrl: 'app/views/partials/applications.html',
      controller: 'applicationsController',
      controllerAs: 'ac'
  })

    .state('Granting-of-Fire-Safety-Certificate', {
      abstract: true,
      templateUrl: 'app/views/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dc',
      data: {
            css: 'build/stylesheets/application.css'
      }
  })
    .state('Granting-of-Fire-Safety-Certificate.create', {
      templateUrl: 'app/views/partials/grant_create.html',
      controller: 'createController',
      controllerAs: 'cc',
      params: params
  })
    .state('Granting-of-Fire-Safety-Certificate.fillForm', {
      templateUrl: 'app/views/partials/grant_form.html',
      controller: 'fillFormController',
      controllerAs: 'ffc',
      params: params
  })
    .state('Granting-of-Fire-Safety-Certificate.uploadCertificate', {
      templateUrl: 'app/views/partials/grant_attach.html',
      controller: 'attachReportController',
      controllerAs: 'arc',
      params: params
  })
    .state('Granting-of-Fire-Safety-Certificate.complete', {
      templateUrl: 'app/views/partials/grant_submit.html',
      controller: 'submitController',
      controllerAs: 'sc',
      params: params
  })

  .state('Renewal-of-Fire-Safety-Certificate', {
      abstract: true,
      templateUrl: 'app/views/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dc',
      data: {
            css: 'build/stylesheets/application.css'
      }
  })
    .state('Renewal-of-Fire-Safety-Certificate.create', {
      templateUrl: 'app/views/partials/renew_create.html',
      controller: 'createController',
      controllerAs: 'cc',
      params: params
  })
    .state('Renewal-of-Fire-Safety-Certificate.fillForm', {
      templateUrl: 'app/views/partials/renew_form.html',
      controller: 'fillFormController',
      controllerAs: 'ffc',
      params: params
  })
    .state('Renewal-of-Fire-Safety-Certificate.fillDeclarationForm', {
      templateUrl: 'app/views/partials/renew_declaration_form.html',
      controller: 'fillFormController',
      controllerAs: 'ffc',
      params: params
  })
    .state('Renewal-of-Fire-Safety-Certificate.uploadFsc', {
      templateUrl: 'app/views/partials/renew_attach.html',
      controller: 'attachReportController',
      controllerAs: 'arc',
      params: params
  })
    .state('Renewal-of-Fire-Safety-Certificate.complete', {
      templateUrl: 'app/views/partials/renew_submit.html',
      controller: 'submitController',
      controllerAs: 'sc',
      params: params
  })

  .state('Declaration-by-Owner/Occupier', {
      abstract: true,
      templateUrl: 'app/views/dashboard.html',
      controller: 'dashboardController',
      controllerAs: 'dc',
      data: {
            css: 'build/stylesheets/application.css'
      }
  })
    .state('Declaration-by-Owner/Occupier.create', {
      templateUrl: 'app/views/partials/declaration_create.html',
      controller: 'createController',
      controllerAs: 'cc',
      params: params
  })
    .state('Declaration-by-Owner/Occupier.fillForm', {
      templateUrl: 'app/views/partials/declaration_form.html',
      controller: 'fillFormController',
      controllerAs: 'ffc',
      params: params
  })
    .state('Declaration-by-Owner/Occupier.complete', {
      templateUrl: 'app/views/partials/declaration_submit.html',
      controller: 'submitController',
      controllerAs: 'sc',
      params: params
  });

    $urlRouterProvider.otherwise('/');

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
};
