module.exports = function(applicationService) {
    this.submit = function() {
        applicationService.attachForm(this);
    };
    applicationService.initFormController(this);
};