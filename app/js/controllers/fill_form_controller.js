module.exports = function(applicationService) {
    this.submit = function() {
        applicationService.attachForm(this);
    };
    this.back = function() {
        applicationService.back(this);
    };
    applicationService.initFormController(this);
};
