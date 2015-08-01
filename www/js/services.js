angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'First News',
    lastText: 'THis is our first news?',

  }, {
    id: 1,
    name: 'Second News',
    lastText: 'Hey, This is a hot news because fire',

  }, {
    id: 2,
    name: 'Third News',
    lastText: 'This is our third news',



  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
