angular.module('noDev.protected.creator', [])

    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.state('protected.creator', {
                url: '/creator',
                templateUrl: 'protected/creator/creator.tpl.html',
                controller: 'AppCtrl as AppCtrl',
                data: {
                    pageTitle: 'Creator'
                }
            });
        }
    ])
;