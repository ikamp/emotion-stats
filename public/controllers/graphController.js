angular.module('emotionStatsApp')
    .controller('GraphController', graphController);

function graphController($scope, DataService) {
    $scope.myDataSource1 = {};
    DataService.getMood(function (response) {
        $scope.data = response;
        $scope.sad = {
            "rate": 0,
            "total": 0
        };
        $scope.unhappy = {
            "rate": 0,
            "total": 0
        };
        $scope.happy = {
            "rate": 0,
            "total": 0
        };
        $scope.ok = {
            "rate": 0,
            "total": 0
        };
        $scope.satisfied = {
            "rate": 0,
            "total": 0
        };

        if (response.average == 1) {
            $scope.mood = "sad";
        } else if (response.average == 2) {
            $scope.mood = "unhappy";
        } else if (response.average == 3) {
            $scope.mood = "ok";
        } else if (response.average == 4) {
            $scope.mood = "satisfied";
        } else if (response.average == 5) {
            $scope.mood = "happy";
        }

        if (response.TotalPercent1) {
            $scope.sad = {
                "rate": response.TotalPercent1.toString(),
                "total": response.Total1
            };
        }
        if (response.TotalPercent2) {
            $scope.unhappy = {
                "rate": response.TotalPercent2.toString(),
                "total": response.Total2
            };
        }
        if (response.TotalPercent3) {
            $scope.ok = {
                "rate": response.TotalPercent3.toString(),
                "total": response.Total3
            };
        }
        if (response.TotalPercent4) {
            $scope.satisfied = {
                "rate": response.TotalPercent4.toString(),
                "total": response.Total4
            };
        }
        if (response.TotalPercent5) {
            $scope.happy = {
                "rate": response.TotalPercent5.toString(),
                "total": response.Total5
            };
        }

        $scope.myDataSource1 = {
            "chart": {
                "paletteColors": "#949FB1, #4D5360, #46BFBD, #FDB45C, #F7464A",
                "bgColor": "#ffffff",
                "showBorder": "1",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",
                "centerLabelBold": "1",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0"
            },
            data: [
                {label: "Sad", value: $scope.sad.rate},
                {label: "Unhappy", value: $scope.unhappy.rate},
                {label: "Ok", value: $scope.ok.rate},
                {label: "Satisfied", value: $scope.satisfied.rate},
                {label: "Happy", value: $scope.happy.rate}
            ]
        };
    });
}