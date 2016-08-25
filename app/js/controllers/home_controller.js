module.exports = function(userService, dashboardService) {
    var that = this;
    this.apply = function(process) {
        dashboardService.newApplication(this, process);
    };
    this.resume= function(application) {
        dashboardService.resumeApplication(this, application);
    };
    this.applyForNewPlan = function() {
        this.apply('NewPlanNOC');
    };
    this.applyForNewBuilding = function() {
        this.apply('NewBuildingNOC');
    };
    this.applyForRenewalBuilding = function() {
        this.apply('RenewBuildingNOC');
    }
    dashboardService.getApplications(this);
};
