module.exports = function(userService, authInfo, $scope) {
    var that = this;
    this.otp = undefined;
    this.user = authInfo.user;
    this.verifyOtp = function(error) {
        if(!error) {
            userService.verifyOtp(this, this.otp);
        }
    };
    this.generateOtp = function() {
        that.generateMessage = undefined;
        userService.generateOtp(this)
        .then(function(response) {
            that.generateMessage = "New OTP has been sent to your mobile";
            $scope.$apply();
        });
    };
};
