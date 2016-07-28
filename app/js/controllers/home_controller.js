var client = require('../client');

module.exports = function(userService, dashboardService) {
    var that = this;
    this.credentials = {};
    this.selected='newApplication';
    this.logout = function() {
        userService.logout(this);
    };
    this.apply = function(process) {
        dashboardService.newApplication(this, process);
    };
    this.resume= function(application) {
        dashboardService.resumeApplication(this, application);
    };
    dashboardService.getApplications(this);
};
