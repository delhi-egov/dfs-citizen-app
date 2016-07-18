var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.form = {};
    this.logout = function() {
        backend.logout().then(function(response) {
                AuthInfoService.user = {};
                $state.go('login');
        }, function(response) {
            this.logoutError = response.message;
        });
    };
    this.submit = function() {
        backend.attachForm($state.params.application.id, 'formI', this.form).then(function(response) {
            backend.changeStage($state.params.application.id, 'formFilled').then(function(response) {
                    $state.go('newPlan.attachReport', {application: $state.params.application});
            }, function(response) {
                this.submitError = response.message;
            });
        }, function(response) {
            this.submitError = response.message;
        });
    };
};
