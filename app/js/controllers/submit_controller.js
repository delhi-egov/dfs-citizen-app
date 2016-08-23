module.exports = function(applicationService) {
    this.submit = function() {
        applicationService.complete(this);
    };
    this.back = function() {
        applicationService.back(this);
    };
};
