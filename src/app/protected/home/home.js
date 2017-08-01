angular.module('noDev.protected.home', [])

    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('protected.home', {
                url: '/',
                templateUrl: 'protected/home/home.tpl.html',
                data: {
                    pageTitle: 'Home'
                }
            });
        }
    ])
;