// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('WAM', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

    .service('thisservice', function () {

        var thisvar = {idex:1};


})









.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider.state('news', {
    url: '/news',
    templateUrl: 'views/news.html'

  })
      .state('events', {
        url: '/events',
        templateUrl: 'views/events.html'
      })

      .state('traffic', {
        url: '/traffic',
        templateUrl: 'views/traffic.html'
      })

      .state('event_details', {
          url: '/event_details',
          templateUrl: 'views/event_details.html'
      })



        $urlRouterProvider.otherwise('app.news');

});
