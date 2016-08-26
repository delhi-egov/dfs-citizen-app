module.exports = function(dashboardService) {
    var that = this;
    this.resume= function(application) {
        dashboardService.resumeApplication(this, application);
    };
    dashboardService.getApplications(this);
};
