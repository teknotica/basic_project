angular.module('app')

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('homepage', {
        url: '/',
        templateUrl: 'app/views/homepage.html',
        controller: 'HomepageCtrl'
    });

});