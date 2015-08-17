/**
 * Created by mike on 16/08/15.
 */
angular.module("WAM").factory('event_service', function ($http) {

    //we will store the selected event here, this is simply a way of storing the object in memory so we can retreve it as
    //required, this will be overritten each time the user selects a new event.

    var selected_event = {};

    return selected_event;




})