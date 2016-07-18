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
                 });

                 $urlRouterProvider.otherwise('/home');
};
