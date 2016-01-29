angular.module('sayso')
    .directive('card', [function() {
        return {
            templateUrl: 'partials/card.html',
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