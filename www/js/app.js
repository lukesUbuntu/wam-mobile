// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers'])



app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.news', {
    url: '/news',
      views: {
       'tab-news': {
        templateUrl: 'templates/list.html',
        controller: 'NewsCtrl'
        }
      }
  })
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

  //Event-list route
      .state('tab.event', {
        url: '/event',
        views: {
          'tab-event': {
            templateUrl: 'templates/tab-event.html',
            controller: 'EventCtrl'
          }
        }
      })
  //road list route
  .state('tab.road', {
        url: '/road',
        views: {
          'tab-road': {
            templateUrl: 'templates/tab-road.html',
            controller: 'RoadCtrl'
          }
        }
      })

      //tab for weather
      .state('tab.weather', {
        url: '/weather',
        views: {
          'tab-weather': {
            templateUrl: 'templates/tab-weather.html',
            controller: 'WeatherCtrl'
          }
        }
      })




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/news');

});




app.run(function($ionicPlatform) {
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
