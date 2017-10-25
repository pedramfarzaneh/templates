angular.module("exampleApp", [])
    .controller("defaultCtrl", function($scope) {
        $scope.init = function () {
            $scope.data2 = [{ "name": "محمد حسن", "uid": "123" }, { "name": "مرتضی", "uid": "124" }, { "name": "محمد", "uid": "125" }
            ];
            $("#tags").autocomplete({
                source: function (request, response) {
                    //data :: JSON list defined
                    response($.map(data, function (value, key) {
                        return {
                            label: value.name,
                            value: value.uid
                        }
                    }))}
            });
        };
        $scope.data = {
            cities: ["London", "New York", "Paris"],
            totalClick: 0
        };

        $scope.$watch("data.totalClick", function(newVal) {
            console.log("Total click count: " + newVal)

        })
    })
    .directive("triButton", function() {
        return {
            scope: {
                counter: "=counter"
            },
            link: function(scope, element) {
                element.on("click", function(event) {
                    console.log("Button click: " + event.target.innerText)
                    scope.$apply(function() {
                        scope.counter++;
                    })
                })
            }
        }
    })


var app2;
app2 = angular.module("routeApp", ['ngRoute'])
    .controller("routeCtrl", function ($scope, $location) {
        $scope.citieList = ["Isfahan", "tehran"];
        $scope.cityObj = {};
        $scope.newCity = function () {
            $scope.cityObj = {};
            $scope.cityObj.name = "";
            $location.path("edit");
        }
        $scope.editCity = function (item) {
            $scope.cityObj = {};
            $scope.cityObj.name = item;
            $location.path("edit");
        }
        $scope.registerCity = function () {
            var add = true;
            for(var i = 0 ; i< $scope.citieList.length;i++){
                if($scope.citieList[i] == $scope.cityObj.name){
                    $scope.citieList[i] = $scop.cityObj.name;
                    add=false;
                }
            }
            if (add) {
                $scope.citieList.push($scope.cityObj.name);
            }

            $location.path("");
        }
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {templateUrl: "mainView.html"})
            .when("/edit", {templateUrl: "editView.html"})
    })