comito.controller('segmentsController', function ($scope, $state, SegmentService) {


    $scope.init = function () {
        $scope.selectedSegments = [];

        SegmentService.getAllSegments(function (err, segments) {
            if (err) {
                console.log(err);
            }
            else {
                $scope.segments = segments;
            }
        });
    };

    $scope.toggleSegment = function (id) {
        var pos = $scope.selectedSegments.indexOf(id);
        if (pos < 0) {
            $scope.selectedSegments.push(id)
        } else {
            $scope.selectedSegments.splice(pos, 1);
        }
        if ($scope.selectedSegments.length > 3) {
            $scope.selectedSegments.splice(0, 1);
        }
    };

    $scope.next = function () {
        if ($scope.selectedSegments.length == 3) {
            $scope.updateSegments();
            $state.go('app.offers')
        } else {
            return;
        }
    };
    $scope.updateSegments = function () {
        $scope.selectedSegments;
        //TODO save;
    }

});
