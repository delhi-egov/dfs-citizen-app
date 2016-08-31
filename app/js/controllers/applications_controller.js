module.exports = function(dashboardService, userService) {
    var that = this;
    this.resume= function(application) {
        dashboardService.resumeApplication(this, application);
    };
    userService.me(this).then(function() {
    	dashboardService.getApplications(that);
    });
};
