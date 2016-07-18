var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.credentials = {};
    this.logout = function() {
        backend.logout().then(function(response) {
                AuthInfoService.user = {};
                $state.go('login');
        }, function(response) {
            this.logoutError = response.message;
        });
    };
    this.createApplication = function() {
        backend.createApplication('newPlan').then(function(response) {
                $state.go('newPlan.fillForm', {application: response.data});
        }, function(response) {
            this.createError = response.message;
        });
    };
};
