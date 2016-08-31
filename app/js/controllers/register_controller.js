module.exports = function(userService) {
    var that = this;
    this.credentials = {};
    this.register = function(error) {
    	if(!error) {
        	userService.register(this, this.credentials);
    	}
    };
};
