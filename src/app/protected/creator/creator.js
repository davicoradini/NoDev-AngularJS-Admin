angular.module('noDev.protected.creator', [])

    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('protected.creator', {
                url: '/creator',
                templateUrl: 'protected/creator/creator.tpl.html',
                data: {
                    pageTitle: 'Creator'
                }
            });
        }
    ])
;