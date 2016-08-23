module.exports = function(applicationService) {
    this.submit = function() {
        applicationService.attachDocument(this);
    };
    this.back = function() {
        applicationService.back(this);
    };
    this.skip = function() {
        applicationService.skip(this);
    };
    applicationService.initDocumentController(this);
};
