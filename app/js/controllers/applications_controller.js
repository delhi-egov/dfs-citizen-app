module.exports = function(dashboardService, userService) {
    var that = this;
    this.resume= function(application) {
        dashboardService.resumeApplication(this, application);
    };
    this.takeAction = function(application) {
        if(application.stage === 'WAITING_ON_USER') {
            //Add edit action here
        }
        else if(application.stage !== 'COMPLETE') {
            this.resume(application);
        }
    };
    userService.me(this).then(function() {
    	dashboardService.getApplications(that);
    });
};
