module.exports = function(userService) {
    var that = this;
    this.otp = undefined;
    this.verifyOtp = function() {
        userService.verifyOtp(this, this.otp);
    };
    this.generateOtp = function() {
        userService.generateOtp(this)
        .then(function(response) {
            that.generateMessage = "New OTP has been sent to your mobile";
        })
        .catch(function(response) {

        });
    };
};
