/**
 * Created by Eliran on 09/06/2016.
 */
comito.controller('EventsDetailsController', function ($scope, $state, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab(false);
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.openChat = false;

    $scope.joined = false;
    $scope.joinEvent = function () {
        $scope.joined = true;
        // add to participants list
    };

    $scope.leave = function () {
        $scope.joined = false;
        // remove from participants list
    };

// set motion
    $timeout(function () {
        ionicMaterialMotion.ripple();
    });


    $scope.eventId = $stateParams.eventId;
    $scope.init = function () {
        //get event by id
        $scope.event = '';
    };
    $scope.event = {
        Minutes: '45',
        Hour: '12',
        Date: '17th March',
        duration: '4.5',
        eventName: 'Cooking With Simon',
        Segment: 'Food',
        description: 'Lorem ipsum dolor sit amet, has vidit euismod vocibus ne, dicant corrumpit per ne. His eros veniam eu, his quaeque electram voluptatum te, tempor adipisci neglegentur vel an. Et pri soleat quidam audire, ut mea veri salutandi moderatius. Ut sit!',
        tag: 'Food, Love, Berlin, Fun, Learn, HowTo, Together',
        place: 'Alexander Plats',
        ownerName: 'Simon Walter',
        ownerId: '2',
        participants: [{img: "../../img/profiletmp.jpg", id: 1}
            , {img: "../../img/eran.jpg", id: 2}, {img: "http://lorempixel.com/40/40/people/", id: 3},
            {img: "http://lorempixel.com/40/40/food/", id: 4}]
    };

    $scope.goToUser = function (id) {
        $state.go('app.profile', {id: id});
    }
});