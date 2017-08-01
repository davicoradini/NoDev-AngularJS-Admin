var application = angular.module(
    'noDev', [
        'angular-loading-bar',
        'ngCookies',
        'ngMaterial',
        'ngMessages',
        'angular.filter',
        'templates-app',
        'templates-common',
        'ui.router',
        'idf.br-filters',
        'ui.utils.masks',
        'md.data.table',
        'duScroll',
        'ngAutocomplete',
        'noDev.filters',
        'noDev.services.auth',
        'noDev.services.configuration',
        'noDev.protected',
        'noDev.public'
    ])

    .config(['$urlRouterProvider', 'cfpLoadingBarProvider', '$mdThemingProvider', '$httpProvider', '$locationProvider',
        function ($urlRouterProvider, cfpLoadingBarProvider, $mdThemingProvider, $httpProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(true);
            $httpProvider.interceptors.push('AuthInterceptor');
            cfpLoadingBarProvider.includeSpinner = false;

            $mdThemingProvider.theme('default')
                .primaryPalette('grey')
                .accentPalette('blue-grey')
                .warnPalette('deep-orange');

            $mdThemingProvider.enableBrowserColor({
                theme: 'default',
                palette: 'grey',
                hue: '800'
            });
        }
    ])

    .run(['$rootScope', '$log', '$state', '$timeout', '$window', '$location', '$mdSidenav', '$mdComponentRegistry',
        '$mdDialog', '$mdMedia', '$filter', 'configuration',
        function ($rootScope, $log, $state, $timeout, $window, $location,
                  $mdSidenav, $mdComponentRegistry, $mdDialog, $mdMedia, $filter, configuration) {

            $rootScope.appVersion = appVersion;
            $rootScope.$mdMedia = $mdMedia;
            $rootScope.$state = $state;

            $rootScope.config = configuration;

            if ($rootScope.appVersion) {
                $log.info('Version: ' + $rootScope.appVersion.number);
                $log.info('Build: ' + $rootScope.appVersion.buildDate);
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
                if ($mdComponentRegistry.get('sidenav-left')) {
                    $mdSidenav('sidenav-left').close();
                }

                $mdDialog.hide();
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                $rootScope.pageTitle = null;

                if (toState.data) {
                    $rootScope.pageTitle = toState.data.pageTitle;
                }
            });

            $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
                $state.go('public.404');
            });

            $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, error) {
                e.preventDefault();

                $log.error('State not changed', error);

                var errorMessage = '';
                if (error.message) {
                    errorMessage = error.message;
                }
                else if (error.data) {
                    if (error.data.message) {
                        errorMessage = error.data.message;
                    }
                    else if (typeof (error.data) === "string") {
                        errorMessage = error.data;
                    }
                }

                $rootScope.error = {message: errorMessage};

                $state.go("public.error");

            });

            $rootScope.toggleMenu = function () {
                var sideNav = $mdSidenav('sidenav-left');
                sideNav.toggle();
            };
        }
    ])

    .controller('AppController', [
        function () {
        }
    ])
;
