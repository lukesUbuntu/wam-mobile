//need to replace with phone locations
/*
 $ionicPlatform.ready(function(){
 //gelocation option
 var posOptions = {timeout: 10000, enableHighAccuracy: true};
 $cordovaGeolocation
 .getCurrentPosition(posOptions)
 .then(function (position) {
 $scope.coords = position.coords;
 showMap(position.coords);


 }, function(err) {
 // error
 });
 });
 */


var prams = {
    //get gps data
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
           // var $data = JSON.parse(response.data);
            console.log("getNews",response.data)
            $scope.news_items = response.data;
            $scope.hide();
        }

    })
});

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
            // var $data = JSON.parse(response.data);
            console.log("getEvents",response.data)
            $scope.event_items = response.data;
            $scope.hide();
        }

    })
});


//Event Details controller

app.controller('EventDetailCtrl', function($scope, $state) {
    $scope.eventId = $state.params.eventId;
    $scope.eventName = $state.params.eventName;
    $scope.eventDescription = $state.params.eventDescription;
   // $scope.eventThumbnail = $state.params.eventThumbnail;
})

//News Details controller

app.controller('NewsDetailCtrl', function($scope, $state ) {
    $scope.newsId = $state.params.newsId;
    $scope.newsName = $state.params.newsName;
    $scope.newsDistance = $state.params.newsDistance;
    $scope.newsDescription = $state.params.newsDescription;



})

//Road controller
app.controller('RoadCtrl', function($scope , $ionicLoading,wamApi) {

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
    wamApi('getRoadWorks', prams).then(function (response) {
        //console.log("getEvents", response)
        if (response.success) {
            // var $data = JSON.parse(response.data);
            console.log("getRoadWorks",response.data)
            $scope.road_events = response.data;
            $scope.hide();
        }

    })

    /*
     $scope.pictureUrl = "http://placehold.it/300x300";
    $scope.takePicture = function(options){
        //define the options for images Url path and type
        var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG
        }
        $cordovaCamera.getPicture({})
            .then(function(data){

                console.log('camera data:' + angular.toJson(data));

               $scope.pictureUrl= 'data:image/jpeg;base64,' + data;

        },function(error){
                console.log('camera error:' + angular.toJson(data));
        });
    }*/
})

//News Details controller

app.controller('RoadDetailCtrl', function($scope, $state ) {
    $scope.roadId = $state.params.roadId;
    $scope.roadName = $state.params.roadName;
    $scope.roadDistance = $state.params.roadDistance;
    $scope.roadDescription = $state.params.roadDescription;



})
//Weather
app.controller('WeatherCtrl', function($scope, $cordovaGeolocation, $ionicPlatform) {


    function showMap(coords) {
        //google map marker
        var marker=new google.maps.Marker({
            position:{lat: coords.latitude, lng: coords.longitude},
            animation:google.maps.Animation.BOUNCE
        });
        //map options
        var mapOptions = {
            center: {lat: coords.latitude, lng: coords.longitude},
            zoom: 9

        };
        //bind to html div id to map and marker
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions,marker);

        marker.setMap(map);
        // Zoom to 15 when clicking on marker
        google.maps.event.addListener(marker,'click',function() {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });

    }
        $ionicPlatform.ready(function(){
            //gelocation option
            var posOptions = {timeout: 10000, enableHighAccuracy: true};
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    $scope.coords = position.coords;
                    showMap(position.coords);


                }, function(err) {
                    // error
                });
        });



});