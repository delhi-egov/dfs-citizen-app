var client = require('../client');

module.exports = function($scope, $http, $state, AuthInfoService) {
    var backend = client($http);
    var that = this;
    this.credentials = {};
    this.selected='newApplication';
    this.logout = function() {
        backend.logout().then(function(response) {
                AuthInfoService.user = {};
                $state.go('login');
        }, function(response) {
            that.logoutError = response.message;
        });
    };
    this.apply = function(process, form, report) {
        $state.go(process + '.create', {application: undefined, process: process, form: form, report: report});
    };
    this.resume= function(application) {
        var stages = {
            'NEW' : 'fillForm',
            'formFilled' : 'attachReport',
            'reportAttached' : 'submit'
        };
        var forms = {
            'newPlan' : 'formI',
            'newBuilding' : 'formI',
            'renewBuilding' : 'formJ'
        };
        var reports = {
            'newPlan' : 'complianceReport',
            'newBuilding' : 'complianceReport',
            'renewBuilding' : 'declaration'
        };
        $state.go(application.type + '.' + stages[application.stage], {application: application, process: application.type, form: forms[application.type], report: reports[application.type]});
    };

    backend.getApplications().then(function(response) {
        that.applications = response.data;
        that.applications.forEach(function(item, index, arr) {
            if(item.status === 'PROGRESS') {
                backend.getStatus(item.id).then(function(response) {
                    that.applications[index].progress = response.data[0];
                });
            }
        });
    }, function(response) {
        that.fetchError = response.message;
    });
};
