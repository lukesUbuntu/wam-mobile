/**
 * Created by mike on 16/08/15.
 */


angular.module('WAM').service('locationsvc', function () {
//set options

    var posOptions = {timeout: 10000, enableHighAccuracy: true};

    navigator.geolocation.getCurrentPosition(onSuccess, onError,posOptions);

        //if we get the location
     function onSuccess(position) {

         console.log(position);

         var my_location = position;




         return my_location;

    }
        //if we do not get the location
    function onError(error) {
       /* alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');*/
    }




//////////

});
