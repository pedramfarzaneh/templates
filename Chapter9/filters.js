/**
 * Created by Pedram on 4/19/2017.
 */
angular.module("exampleApp.filters",[]).filter("dayName",function () {
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return function (input) {
        return angular.isNumber(input)?dayNames[input] : input;
    }
})