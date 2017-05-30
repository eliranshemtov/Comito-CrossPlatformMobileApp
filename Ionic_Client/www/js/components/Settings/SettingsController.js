/**
 * Created by Eliran on 10/06/2016.
 */
comito.controller('SettingsController', function ($scope, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab(false);
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);

    $scope.genders = ['Male', 'Female', 'Both'];

    $scope.init = function () {
        $scope.settings = {
            distance: 10,
            gender: 'Both',
            age: {
                min: 22,
                max: 30
            },
            push: true,
            chat: false
        }
    }
    $scope.getSelectedText = function () {
        return "Show me " + $scope.settings.gender;
    };

    $scope.settings = {};
    $scope.settings.distance = 10;
    // To be changed with doubled slider
    $scope.settings.push = true;
    $scope.settings.chat = false;


    $scope.$watch('settings', function (newVal, oldVal) {
        if (newVal) {
            //Save
        }
        ;
    }, true);


    $scope.logout = function () {
    };

});