var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function($scope) {})

//News Controller
app.controller('NewsCtrl', function($scope) {})

//Chats Controller
app.controller('EventCtrl', function($scope, wamApi) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        var prams = {
            //getgps data
            //longitude=174.777290&latitude=-41.306481
            longitude : 174.777290,
            latitude : -41.306481
        }

        wamApi('getEvents', prams).then(function (response) {
            console.log("getEvents", response)
            if (response.success) {
                var $data = JSON.parse(response.data);
                console.log("$data",$data.events)
                $scope.events = $data.events;
            }

        })
});

/*
app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
})
*/
//Event controller
/*
app.controller('EventDetailCtrl', function($scope,$stateParams,events) {
    $scope.event = event.get($stateParams.eventId);
})
*/


//Road controller
app.controller('RoadCtrl', function($scope) {

})


//Weather
app.controller('WeatherCtrl', function($scope) {

})





