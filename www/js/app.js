// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])



app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    // setup an abstract state for the tabs directive
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  });


    $stateProvider.state('tab.news', {
        url: '/news',
        views: {
            'tab-news': {
                templateUrl: 'templates/tab-news.html',
                controller: 'NewsCtrl'
            }
        }
    })

        //Event-list route
    $stateProvider.state('tab.event', {
        url: '/event',
        views: {
          'tab-event': {
            templateUrl: 'templates/tab-event.html',
            controller: 'EventCtrl'
          }
        }
      })
        .state('tab.event-detail', {
            url: '/event/:eventId/:eventName',
            views: {
                'tab-event': {
                    templateUrl: 'templates/event-detail.html',
                    controller: 'EventDetailCtrl'
                }
            }
        })
  //road list route
    $stateProvider.state('tab.road', {
        url: '/road',
        views: {
          'tab-road': {
            templateUrl: 'templates/tab-road.html',
            controller: 'RoadCtrl'
          }
        }
      })

      //tab for weather
    $stateProvider.state('tab.weather', {
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




app.run(function($ionicPlatform,$cordovaGeolocation) {
    //gelocation option
    var posOptions = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
            //$scope.coords = position.coords;
            // showMap(position.coords);
            //latitude: -41.3062287
            //longitude: 174.777496
            //$rootScope.latitude = position.latitude;
           // $rootScope.latitude = position.latitude;
            //app.value('latitude',  position.longitude);
            //app.value('longitude', position.latitude);

            //$rootScope.longitude = position.longitude
            //console.log("position",position.latitude)

        }, function(err) {
            // error
        });
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
