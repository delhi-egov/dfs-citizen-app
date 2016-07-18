var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.credentials = {};
    this.login = function() {
        backend.login(that.credentials.phone, that.credentials.password).then(function(response) {
                AuthInfoService.user = response.data;
                $state.go('home');
        }, function(response) {
            this.loginError = response.message;
        });
    };
};
