angular.module('noDev.services.auth', [])

    .factory('AuthInterceptor', ['$location', 'AuthService', function ($location, AuthService) {
        return {
            request: function (config) {
                var token = AuthService.getToken();

                if (token) {
                    config.headers['Authentication-Token'] = token;
                }

                return config;
            }
        };
    }])

    .service('AuthService', ['$cookies',
        function ($cookies) {
            var self = this;

            var COOKIE_NAME = 'NODEVS_TOKEN';

            self.setToken = setToken;
            self.getToken = getToken;
            self.clearToken = clearToken;

            function setToken(token) {
                $cookies.put(COOKIE_NAME, token);
            }

            function getToken() {
                return $cookies.get(COOKIE_NAME);
            }

            function clearToken() {
                $cookies.remove(COOKIE_NAME);
            }
        }
    ])
;