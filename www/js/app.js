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
    // setup an abstract state for the tabs directive
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  });

    // Each tab has its own nav history stack:
    $stateProvider .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

    $stateProvider.state('tab.news', {
    url: '/news',
      views: {
       'tab-news': {
        templateUrl: 'templates/list.html',
        controller: 'NewsCtrl'
        }
      }
    });
    $stateProvider.state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
    /*
    $stateProvider.state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
       */
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


/*------------- new factory from Maen -----------------*/
app.factory('eventApi', function ($http) {
  var api = {
    path: "http:/wam.nzhost.me/api",
    //key: ""
    call: function (call) {
      return this.path + call + '?callback=JSON_CALLBACK';
    }
  }
  var eventApi = function (call, prams) {
    // $http returns a promise, which has a then function, which also returns a promise
    var promise = $http.json(api.call(call), {
      params: prams
    }
    ).then(function (response) {
          // The then function here is an opportunity to modify the response
          console.log("eventApi response", response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
    //return the promise to the controller
    return promise;
  };
  return eventApi;
})



/*------- search controller ----------*/
    .controller('searchEvent', function ($scope, eventApi) {
      /*--- search event button ----*/
      $scope.search = function (eventLoc) {
        console.log("eventLocation", eventLoc)

        /*if(typeof searchEvent == "undefined")*/

        $scope.show();
        var params = {
          latitude : 51.508742,
          longtitude : -0.120850
        }
        eventApi('getDetails', prams).then(function (response) {
          console.log("getDetails", response)
          if(response.success) {
            $scope.eventInfo = response.data;
            $scope.searchResults = true;
          }
          else{
            $scope.showAlert(response.data)
            console.log("bad response", response);
          }
          setTimeout(function () {$scope.hide();}, 100)
        })
      }
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
