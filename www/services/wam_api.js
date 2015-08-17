/**
 * Created by mike on 15/08/15.
 */


var prams = {
    //get gps data
    //longitude=174.777290&latitude=-41.306481
    longitude : 174.777290,
    latitude : -41.306481
}


/**
 * Handles our api calls to server
 */
angular.module("WAM").factory('wamApi', function ($http) {



    var api = {
        //http://wam.nzhost.me/api/getEvents/?longitude=174.777290&latitude=-41.306481
        path: "http://wam.nzhost.me/api/",
        key: "",//note implmented
        call: function (call) {
            return this.path + call + '?callback=JSON_CALLBACK';
        }
    }
    var wamApi = function (call, prams) {
        // $http returns a promise, which has a then function, which also returns a promise

        var promise = $http.jsonp(api.call(call), {
                params: prams
            }
        ).then(function (response) {
                // The then function here is an opportunity to modify the response
                //console.log("wamApi response", response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        // Return the promise to the controller
        return promise;

    };
    return wamApi;
});

