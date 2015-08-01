//need to replace with phone locations
var prams = {
    //getgps data
    //longitude=174.777290&latitude=-41.306481
    longitude : 174.777290,
    latitude : -41.306481
}

var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function($scope) {})

//News Controller
app.controller('NewsCtrl', function($scope,$ionicLoading,wamApi) {

    $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function () {
        $ionicLoading.hide();
    };

    $scope.show();
    //get the events
    wamApi('getNews', prams).then(function (response) {
        //console.log("getNews", response)
        if (response.success) {
            var $data = JSON.parse(response.data);
            console.log("$data",$data)
            $scope.news_items = $data;
            $scope.hide();
        }

    })
})

//Chats Controller
app.controller('EventCtrl', function($scope, $ionicLoading,wamApi) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function () {
        $ionicLoading.hide();
    };

    $scope.show();
    //get the events
    wamApi('getEvents', prams).then(function (response) {
        //console.log("getEvents", response)
        if (response.success) {
            var $data = JSON.parse(response.data);
            console.log("$data",$data.events)
            $scope.event_items = $data.events;
            $scope.hide();
        }

    })
});


//Event Details controller

app.controller('EventDetailCtrl', function($scope, $state) {
    $scope.eventId = $state.params.eventId;
})



//Road controller
app.controller('RoadCtrl', function($scope) {

})


//Weather
app.controller('WeatherCtrl', function($scope) {

});