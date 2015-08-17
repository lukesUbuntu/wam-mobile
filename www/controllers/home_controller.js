/**
 * Created by mike on 16/08/15.
 */
angular.module('WAM').controller('homectrl', function($scope,$ionicSideMenuDelegate ) {




        $scope.toggleLeft = function() {
            console.log("move the menu");
            $ionicSideMenuDelegate.toggleLeft();

        };


})
