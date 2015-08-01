var app = angular.module('starter.controllers', [])

app.controller('DashCtrl', function($scope) {})

//News Controller
app.controller('NewsCtrl', function($scope) {})
//Chats Controller
    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })
//Event controller
app.controller('EventCtrl', function($scope) {

})


//Road controller

app.controller('RoadCtrl', function($scope) {



})


//Weather
app.controller('WeatherCtrl', function($scope) {

})


//global notes array
var notes = [
    {
        id:'1',
        title:'First News',
        description:'This is my first news.'

    },
    {
        id:'2',
        title:'Second News',
        description:'This is my Second News.'
    }];

function getNote(noteId){
    for(var i =0; i<notes.length; i++){
        if(notes[i].id === noteId){
            return notes[i];
        }
    }
    return undefined;
}
function updateNote(note){
    for(var i =0; i<notes.length; i++){
        if(notes[i].id === note.id){
            notes[i] = note;
            return;
        }
    }

}
app.controller('ListCtrl',function($scope) {
    $scope.notes = notes;
})
app.controller('EditCtrl',function($scope, $state){
    $scope.note = angular.copy(getNote($state.params.noteId));

    $scope.save = function(){
        updateNote($scope.note);
        //redirect
        $state.go('list');
    }
})



