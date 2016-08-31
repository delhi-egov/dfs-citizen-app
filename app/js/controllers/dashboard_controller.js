module.exports = function(userService, dashboardService, authInfo, $state, $scope, $timeout) {
    var that = this;
    $timeout(function() {
        that.user = authInfo.user;
    }, 1000);
    this.logout = function() {
        userService.logout(this);
    };
    this.loadMyApplicationsPage = function() {
    	$state.go('dashboard.applications');
    };
    this.apply = function(process) {
        dashboardService.newApplication(this, process);
    };
    this.resume = function(application) {
        dashboardService.resumeApplication(this, application);
    };
    this.goHome = function() {
        $state.go('dashboard.home');
    };
    this.applyForNewPlan = function() {
    	this.apply('NewPlanNOC');
    };
    this.applyForNewBuilding = function() {
    	this.apply('NewBuildingNOC');
    };
    this.applyForRenewalBuilding = function() {
    	this.apply('RenewBuildingNOC');
    };
};
