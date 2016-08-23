module.exports = function(userService) {
    this.logout = function() {
        userService.logout(this);
    };
};
