angular.module('noDev.services.configuration', [])

    .factory('Configuration', ['configuration', 'ResourceFactory',
        function (configuration, ResourceFactory) {
            return new ResourceFactory(configuration.apiUrl, 'configuration');
        }]
    )

    .service('ConfigurationService', ['$q', '$rootScope', 'Configuration',
        function ($q, $rootScope, Configuration) {
            var self = this;

            self.get = get;

            function get(key) {
                var parameters = {
                    q: {
                        filters: [{
                            name: 'key',
                            op: 'eq',
                            val: key
                        }]
                    }
                };

                return Configuration.get(parameters).$promise.then(function (response) {
                    return response.objects.length ? response.objects[0] : null;
                });
            }
        }
    ])
;