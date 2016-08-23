module.exports = function(applicationService) {
    this.createApplication = function() {
        applicationService.createApplication(this);
    };
};
