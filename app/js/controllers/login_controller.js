module.exports = function(userService) {
    var that = this;
    this.credentials = {};
    this.login = function() {
        userService.login(this, this.credentials);
    };
};
