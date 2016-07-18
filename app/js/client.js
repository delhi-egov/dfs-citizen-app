module.exports = function($http) {
    return {
        login: function(phone, password) {
            return $http.post('http://localhost:9999/user/login', {
                phone: phone,
                password: password
            });
        },
        logout: function() {
            return $http.post('http://localhost:9999/user/logout', {});
        },
        register: function(credentials) {
            return $http.post('http://localhost:9999/user/register', credentials);
        },
    };
};
