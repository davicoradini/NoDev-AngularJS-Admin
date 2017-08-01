angular.module('noDev.public.404', [
    'ui.router'
])

    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('public.404', {
                url: '/404',
                templateUrl: 'public/404/404.tpl.html',
                data: {
                    pageTitle: '404'
                }
            });
        }
    ])
;