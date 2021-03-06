angular.module('emotionStatsApp')
    .controller('DashboardController', DashboardController);

function DashboardController($rootScope, $scope, DataService) {
    $scope.attrs = {};
    $scope.categories = [];
    $scope.dataset = {};
    $scope.myDataSource2 = {};
    $scope.dshMoodReviews = {};
    $scope.dataSource3 = {};

    $rootScope.flag = true;
    DataService.getEmployeesAverageMood(function (response) {
            $scope.data = response;
            $scope.attrs = {
                "caption": "Average Mood (Last 4 Weeks)",
                "numberprefix": "",
                "plotgradientcolor": "",
                "bgcolor": "transparent",
                "showalternatehgridcolor": "0",
                "divlinecolor": "CCCCCC",
                "showvalues": "0",
                "showcanvasborder": "0",
                "canvasborderalpha": "0",
                "canvasbordercolor": "CCCCCC",
                "canvasborderthickness": "1",
                "captionpadding": "30",
                "linethickness": "3",
                "yaxisvaluespadding": "15",
                "legendshadow": "0",
                "legendborderalpha": "0",
                "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
                "showborder": "0"
            };

            $scope.moodAverages = $scope.data.averageMood;
            $scope.moodReviews = $scope.data.moodReviews;
            $scope.dshMoodReviews = $scope.data.moodReviews;

            $scope.categories = [
                {
                    "category": []
                }

            ];

            $scope.dataset = [
                {
                    "seriesname": "2013",
                    "data": []
                }
            ];

            angular.forEach($scope.moodAverages, function (value, key) {
                $scope.categories[0]['category'].push({
                    'label': key
                });

                angular.forEach(value, function (obj, tag) {
                    if (tag == "average") {
                        $scope.dataset[0]['data'].push({
                            'value': obj
                        });
                    }
                });
            });
            $scope.myDataSource2 = {
                chart: {
                    "paletteColors": "#949FB1, #F7464A",
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
                "data": []
            };

            angular.forEach($scope.moodReviews, function (obj, tag) {
                if (tag == "percent") {
                    $scope.percent = 100;
                    $scope.myDataSource2['data'].push({
                        label: "Percent", value: obj
                    });
                    $scope.myDataSource2['data'].push({
                        label: "Remaining", value: (100 - obj)
                    });
                }
            });

        }
    )
}