var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.logout = function() {
        backend.logout().then(function(response) {
                AuthInfoService.user = {};
                $state.go('login');
        }, function(response) {
            this.logoutError = response.message;
        });
    };
    this.submit = function() {
        backend.complete($state.params.application.id).then(function(response) {
            that.successMessage = "Application submission complete";
        }, function(response) {
            this.submitError = response.message;
        });
    };
};
