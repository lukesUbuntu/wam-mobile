/**
 * Created by mike on 15/08/15.
 */
angular.module('WAM').controller('EventCtrl', function($scope,$state, $ionicLoading,wamApi, event_service) {

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


$scope.geteventdetail = function (info){


    event_service.selected_event = info;

   // test that the data is being passed correctly
   // console.log('this event from the event controller is: ',info.id );
   // console.log('the event from the event service is: ', event_service.selected_event );
    $state.go("event_details");
}




});

