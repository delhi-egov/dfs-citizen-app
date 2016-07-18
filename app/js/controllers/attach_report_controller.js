var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService, Upload) {
    var backend = client($http, Upload);
    var that = this;
    this.next = 'submit';
    this.logout = function() {
        backend.logout().then(function(response) {
                AuthInfoService.user = {};
                $state.go('login');
        }, function(response) {
            this.logoutError = response.message;
        });
    };
    this.submit = function() {
        backend.attachDocument($state.params.application.id, $state.params.report, this.file).then(function(response) {
            backend.changeStage($state.params.application.id, 'reportAttached').then(function(response) {
                    $state.go($state.params.process + '.' + that.next, {application: $state.params.application, process: $state.params.process, form: $state.params.form, report: $state.params.report});
            }, function(response) {
                this.submitError = response.message;
            });
        }, function(response) {
            this.submitError = response.message;
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('Progress: ' + progressPercentage);
        });
    };
};
