/**
 * Created by mike on 16/08/15.
 */
angular.module('WAM').controller('eventdtlCtrl', function($scope, $ionicLoading, event_service) {

    var this_event = event_service.selected_event;
    $scope.event = this_event;

console.log("we are playing with", this_event.id)

})