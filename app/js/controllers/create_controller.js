var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.next = 'fillForm';
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
        backend.createApplication($state.params.process).then(function(response) {
                $state.go($state.params.process + '.' + that.next, {application: response.data, process: $state.params.process, form: $state.params.form, report: $state.params.report});
        }, function(response) {
            this.createError = response.message;
        });
    };
};
