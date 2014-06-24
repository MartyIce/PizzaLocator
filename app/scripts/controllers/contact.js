'use strict';

angular.module('abetterAppApp')
  .controller('ContactController', ['$scope', '$http', function ($scope, $http) {

        $scope.zipCodeChanged = function() {
            if($scope.zipCode.length === 5) {
                queryYahoo($scope.zipCode);
            }
        }

        function queryYahoo(zipCode) {
            var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D%22' + zipCode + '%22%20and%20query%3D%22pizza%22&format=json&diagnostics=true&callback=JSON_CALLBACK';
            $http.jsonp(url).
                success(function(data, status, headers, config) {
                    if(data.query.results) {
                        console.log(data.query.results.Result);
                        $scope.feed = {
                            title: 'Decatur, IL',
                            items: data.query.results.Result
                        };
                    }
                }).
                error(function(data, status, headers, config) {
                    console.error('Error fetching feed:', data);
                });
        }

        $scope.zipCode = '62521';
        queryYahoo($scope.zipCode);
    }]);
