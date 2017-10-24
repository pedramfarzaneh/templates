/**
 * Created by Pedram on 4/18/2017.
 */
var controllersModule = angular.module("exampleApp.Controllers", [])

controllersModule.controller("dayCtrl", function ($scope, days) {
    $scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function ($scope, days) {
    $scope.day = days.tomorrow;
});

