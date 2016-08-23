module.exports = function(userService) {
    var that = this;
    this.credentials = {};
    this.register = function() {
        userService.register(this, this.credentials);
    };
};
