/**
 * Created by Eliran on 08/06/2016.
 */
comito.controller('EventsController', function ($scope, $state, EventService) {

    $scope.init = function () {
        //TODO get events
        EventService.getAllEvents(function (err, events) {
            $scope.events = events;
        });

        //    $scope.events=[{id:'1',name: "event",description:"desc desc desc" ,time:"17 in July" , owner:"or Joy"
        //        ,img:'http://lorempixel.com/400/200/nightlife/'},
        //        {id:'2',name: "cool event",description:"desc desc desc" ,time:"18 in July" , owner:"steve"
        //            ,img:'http://lorempixel.com/400/200/food/'},
        //        {id:'3',name: "more event",description:"desc desc desc" ,time:"19 in July" , owner:"eliran shem tov"
        //            ,img:'http://lorempixel.com/400/200/art/'},
        //        {id:'4',name: "nice event",description:"desc desc desc" ,time:"17 in July" , owner:"eran "
        //            ,img:'http://lorempixel.com/400/200/people/'}]
    };

    $scope.editEvent = function (id) {
        $state.go('app.editEvent', {id: id});
    };

});