angular.module('sayso', ['ngRoute', 'ngSanitize','appConfig'])
    .constant('MOVIES_URL', '/rdata/movies')
    .constant('SUBTITLES_URL', '/rdata/subtitle')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'mainController',
                controllerAs: 'main',
                templateUrl: 'partials/main.html'
            })
            .when('/teacher', {
                controller: 'teacherController',
                controllerAs: 'teacher',
                templateUrl: 'partials/teacher.html'
            })
            .otherwise('/');
    }]);