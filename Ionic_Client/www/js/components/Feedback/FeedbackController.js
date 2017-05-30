comito.controller('FeedbackController', function ($scope, $stateParams, $state, ionicMaterialInk, $mdDialog) {
    ionicMaterialInk.displayEffect();
    $scope.$parent.showHeader();
    //$scope.$parent.clearFabs();
    //$scope.$parent.setHeaderFab(false);
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);


    $scope.reasons = ['Offer New FAQ', 'Bad experience', 'Tip', 'User interface', 'Technical issue', 'Other'];
    $scope.chosenReason = undefined;
    $scope.msg = undefined;


    //Add user id to the msg
    $scope.feedbackSent = function () {
        console.log($scope.chosenReason + $scope.msg);
        //TO DO sendFeedback
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Thanks For Feedbacking Us!')
                .textContent('We promise to take this issue close to our hearts, and fix all your concerns ASAP... ')
                .ok('Explore Berlin!')
        );
        $state.go('app.offers')
    };

    $scope.clearValue = function () {
        $scope.chosenReason = undefined;
        $scope.msg = undefined;
    };
});