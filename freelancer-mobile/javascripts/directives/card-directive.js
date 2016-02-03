angular.module('sayso')
    .directive('card', [function() {
        return {
            templateUrl: '/public/apps/SaySo-client/freelancer-mobile/partials/card.html',
            restrict: 'E',
            scope: {
                image: '@',
                category: '@',
                title: '@',
                languages: '@',
                level: '@',
                likes: '@',
                views: '@'
            }
        }
    }]);