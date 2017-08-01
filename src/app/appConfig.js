angular.module('noDev')

  .provider('configuration', [
     function () {
        var config = null;

        var configs = {
           development: {
              environment: 'development',
              hostnames: ['localhost', '0.0.0.0'],
              apiUrl: 'http://localhost:5000/v1',
              appWebUrl: 'http://localhost:8282/#'
           },
           staging: {
              environment: 'staging',
              hostnames: ['nodev.com'],
              apiUrl: 'https://nodev.com/v1'
           },
           production: {
              environment: 'production',
              hostnames: ['nodev.com'],
              apiUrl: 'https://nodev.com/v1'
           }
        };

        angular.forEach(configs, function (configItem) {
           angular.forEach(configItem.hostnames, function (hostname) {
              if (window.location.hostname === hostname) {
                 config = configItem;
              }
           });
        });

        if (!config) {
           throw new Error('Configuration not found for this domain: ' + window.location.hostname);
        }

        console.log('Configuration loaded for: ' + config.environment);

        return {
           $get: function () {
              return config;
           }
        };
     }
  ])

;
