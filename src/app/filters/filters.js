angular.module('noDev.filters', [])

    .filter('SomeStatus', [
        function () {
            return function (value, number) {
                switch (value) {
                    case 'PENDING':
                        return 'pending';

                    case 'ACTIVE':
                        return 'active';

                    case 'BLOCKED':
                        return 'blocked';

                    default:
                        return value;
                }
            };
        }
    ])
;