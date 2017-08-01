angular.module('noDev.public', [
    'noDev.public.404',
    'noDev.public.error',
    'noDev.public.unauthorized',
    'ui.router'
])

    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('public', {
                abstract: true,
                url: '',
                templateUrl: 'public/public.tpl.html',
                controller: 'PublicController as publicCtrl'
            });
        }
    ])
;