angular.module('starter.services', [])


app.factory('wamApi', function ($http) {
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
          console.log("taxiApi response", response);
          // The return value gets picked up by the then in the controller.
          return response.data;
        });
    // Return the promise to the controller
    return promise;

  };
  return wamApi;
})

    .factory('Chats', function(wamApi) {
  // Might use a resource here that returns a JSON array
  //getEvents
      var prams = {
        //getgps data
        //longitude=174.777290&latitude=-41.306481
        longitude : 174.777290,
        latitude : -41.306481
      }
      var events = [];

      wamApi('getEvents', prams).then(function (response) {
        console.log("getEvents", response)
        if (response.success) {
            var $data = JSON.parse(response.data);

            console.log("$data",$data.events)

          $.each($data.events,function(i,evnt){
            console.log("a",evnt.name);

            var event = {
              id: i,
              name: evnt.name,
              lastText: evnt.description,
            }
            events.push(event);
          })


        console.log("events",events)

          //$scope.taxi_info = response.data;
          //$scope.searchResults = true;
          return {
            all: function() {
              return events;
            },
            remove: function(chat) {
              chats.splice(chats.indexOf(chat), 1);
            },
            get: function(chatId) {
              for (var i = 0; i < chats.length; i++) {
                if (events[i].id === parseInt(chatId)) {
                  return events[i];
                }
              }
              return null;
            }
          };
        }
      })



});
