'use strict';

/**
 * @ngdoc function
 * @name pvcApp.controller:UsersiteCtrl
 * @description
 * # UsersiteCtrl
 * Controller of the pvcApp
 */
angular.module('pvcApp')
  .controller('UsersiteCtrl', ['$scope', function ($scope) {
    $scope.siteTitle = '太陽能發電系統';
    $scope.siteDescription = '台北市承德路三段90巷測試中';
    $scope.siteContentTitle = '再生能源 – 太陽能即時發電狀況';
    $scope.site = {
        title: '太陽能發電系統',
        description: '台北市承德路三段90巷測試中',
        content: { 
            title: '再生能源 – 太陽能即時發電狀況',
            summary: {
                energy: {
                    today: 2.67,
                    month: 207.7,
                    total: 6736
                },
                carbon: {
                    today: 1.70,
                    month: 132.3,
                    total: 4291
                },
                profit: {
                    today: 18.33,
                    month: 1425.4,
                    total: 46231
                }
            },
            currentOutput: {
                voltage: 233,
                current: 6.21,
                power: 1437
            },
            environment: {
                uv: 1,
                temperature: 18.9,
                visibility: 16.1
            },
            amchartData: '[ { "visibility": 3.2, "uv": 0, "date": "2016-11-23 01:00:00" }, { "visibility": 3.2, "uv": 0, "date": "2016-11-23 02:00:00" }, { "visibility": 3.2, "energy": 0, "uv": 0, "date": "2016-11-23 03:00:00" }, { "visibility": 4.8, "energy": 0, "uv": 0, "date": "2016-11-23 04:00:00" }, { "visibility": 4.8, "energy": 0, "uv": 0, "date": "2016-11-23 05:00:00" }, { "visibility": 4.8, "energy": 0, "uv": 0, "date": "2016-11-23 06:00:00" }, { "visibility": 4.8, "energy": 70, "uv": 0, "date": "2016-11-23 07:00:00" }, { "visibility": 6.4, "energy": 290, "uv": 0, "date": "2016-11-23 08:00:00" }, { "visibility": 8.0, "energy": 610, "uv": 1, "date": "2016-11-23 09:00:00" }, { "visibility": 8.0, "energy": 580, "uv": 1, "date": "2016-11-23 10:00:00" }, { "visibility": 4.8, "energy": 460, "uv": 2, "date": "2016-11-23 11:00:00" }, { "visibility": 4.8, "energy": 420, "uv": 2, "date": "2016-11-23 12:00:00" }, { "visibility": 8.0, "energy": 360, "uv": 2, "date": "2016-11-23 13:00:00" }, { "visibility": 16.1, "energy": 270, "uv": 2, "date": "2016-11-23 14:00:00" }, { "visibility": 16.1, "energy": 190, "uv": 1, "date": "2016-11-23 15:00:00" }, { "visibility": 16.1, "energy": 20, "uv": 1, "date": "2016-11-23 16:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-23 17:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-23 18:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-23 19:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-23 20:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-23 21:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-23 22:00:00" }, { "energy": 0, "date": "2016-11-23 23:00:00" }, { "energy": 0, "date": "2016-11-24 00:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-24 01:00:00" }, { "visibility": 9.7, "energy": 0, "uv": 0, "date": "2016-11-24 02:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-24 03:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-24 04:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-24 05:00:00" }, { "visibility": 16.1, "energy": 0, "uv": 0, "date": "2016-11-24 06:00:00" }, { "visibility": 16.1, "energy": 240, "uv": 0, "date": "2016-11-24 07:00:00" }, { "visibility": 16.1, "energy": 580, "uv": 0, "date": "2016-11-24 08:00:00" }, { "visibility": 16.1, "energy": 1190, "uv": 1, "date": "2016-11-24 09:00:00" }, { "visibility": 16.1, "energy": 1790, "uv": 1, "date": "2016-11-24 10:00:00" }, { "visibility": 16.1, "energy": 2030, "uv": 2, "date": "2016-11-24 11:00:00" }, { "visibility": 16.1, "energy": 2110, "uv": 2, "date": "2016-11-24 12:00:00" }, { "visibility": 16.1, "energy": 1110, "uv": 2, "date": "2016-11-24 13:00:00" }, { "visibility": 16.1, "energy": 330, "uv": 2, "date": "2016-11-24 14:00:00" } ]'
        }
    };
  }]);