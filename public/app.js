// Define the `emotionStatsApp` module
angular
    .module('emotionStatsApp', ['ngRoute', 'ng-fusioncharts'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
            })
            .when('/mymood', {
                templateUrl: '/mymood/mymood.html',
                controller: 'MyMoodController'
            })
            .when('/signin', {
                templateUrl: '/signin/signin.html',
                controller: 'SignInController',
                publicAccess: true
            })
            .when('/signup', {
                templateUrl: '/signup/signup.html',
                controller: 'SignUpController',
                publicAccess: true
            })
            .when('/create-password/:id', {
                templateUrl: '/create-password/create-password.html',
                controller: 'CreatePasswordController',
                publicAccess: true
            })
            .when('/employee', {
                templateUrl: '/employee/employee.html',
                controller: 'EmployeeController'
            })
            .when('/dashboard', {
                templateUrl: '/dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/mood-add/:id', {
                templateUrl: '/mood-add/mood-add.html',
                controller: 'MoodAddController'
            })
            .when('/forgot-password', {
                templateUrl: '/forgot-password/forgot-password.html',
                controller: 'ForgotPasswordController',
                publicAccess: true
            })
            .when('/reset-password/:token', {
                templateUrl: '/reset-password/reset-password.html',
                controller: 'ResetPasswordController',
                publicAccess: true
            })
            .when('/activity/:token', {
                templateUrl: '/activity/activity.html',
                controller: 'ActivityController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }).run(function ($rootScope, Authentication) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!(next.$$route && next.$$route.publicAccess)) {
            Authentication.getUser();
        }
    });
});
