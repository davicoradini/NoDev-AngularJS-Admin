angular.module('noDev.protected', [
    'noDev.protected.home'
])

    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('protected', {
                abstract: true,
                url: '',
                controller: 'ProtectedController as protectedCtrl',
                templateUrl: 'protected/protected.tpl.html'
            });
        }
    ])
;