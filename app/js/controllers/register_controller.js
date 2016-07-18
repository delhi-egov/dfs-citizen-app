var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.credentials = {};
    this.register = function() {
        backend.register(that.credentials).then(function(response) {
                $state.go('login');
        }, function(response) {
            this.registerError = response.message;
        });
    };
};
