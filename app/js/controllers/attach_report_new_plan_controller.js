var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService, Upload) {
    var backend = client($http, Upload);
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
        backend.attachDocument($state.params.application.id, 'complianceReport', this.file).then(function(response) {
            backend.changeStage($state.params.application.id, 'reportAttached').then(function(response) {
                    $state.go('newPlan.submit', {application: $state.params.application});
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
