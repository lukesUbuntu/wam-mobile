/**
 * Created by mike on 16/08/15.
 */
//this is going to be used to control the side menu
angular.module('WAM').controller('homectrl', function($scope,$ionicSideMenuDelegate ) {




        $scope.toggleLeft = function() {
            console.log("move the menu");
            $ionicSideMenuDelegate.toggleLeft();

        };


})
