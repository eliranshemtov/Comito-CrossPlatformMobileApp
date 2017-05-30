/**
 * Created by Eliran on 08/06/2016.
 */
comito.controller('CreateEventController', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $mdToast, $mdDialog, $rootScope) {
    var scope = this;
    // Tabs and navigation through the form!
    $scope.currentTab = 1;
    $scope.title = "Create Your Event";
    $scope.init = function () {
        if ($stateParams.id) {
            $scope.title = "Edit Your Event";
            //get event from server by id
            $scope.selectedMinutes = "30";
            $scope.selectedHour = "10";
            $scope.selectedDate = new Date('04/04/2017');
            $scope.duration = 7;
            $scope.eventName = "my event";
            $scope.selectedSegment = "Fashion";
            $scope.description = "description";
            $scope.selectedTag = [{name: 'fashion', lowerName: 'fasion'}];
            $scope.view.selectedPlace = "ChIJzVgnPB1ZmEcRoZeG18SPq4A";
            //TODO get event
        }
    }

    $scope.nextTab = function () {

        if ($scope.currentTab == 1 && ($scope.selectedDate == undefined || $scope.selectedHour == undefined || $scope.selectedMinutes == undefined || $scope.duration == undefined) ||
            $scope.currentTab == 2 && ($scope.eventName == undefined || $scope.selectedSegment == undefined || $scope.description == undefined || $scope.selectedTag == undefined)) {

            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Please fill in all the fields')
                    .textContent('We must know everything to rule the world!')
                    .ok('Got it!')
            );
        }
        else {
            $scope.currentTab++;
            if ($scope.currentTab == 3) {
                InitializeComponents()
                if ($scope.view.selectedPlace) {

                    buscarDireccion();
                }
            }
        }
    };

    // $scope.sendData = function(){
    //     $scope.eventId=99;
    //
    //     if ($scope.view.selectedPlace == ''){
    //         $mdDialog.show(
    //             $mdDialog.alert()
    //                 .parent(angular.element(document.querySelector('#popupContainer')))
    //                 .clickOutsideToClose(true)
    //                 .title('Hey! Choosse location!')
    //                 .textContent('If you won\'t tell us the location, how will we get there?!')
    //                 .ok('Got it!')
    //         );
    //     } else{
    //       var evData={
    //         "hour": $scope.selectedHour,
    //         "minute": $scope.selectedMinutes,
    //         "date": $scope.selectedDate,
    //         "duration": $scope.duration,
    //         "name": $scope.eventName,
    //         "description": $scope.description,
    //         "place": $scope.view.selectedPlace,
    //         "owner":$rootScope.user.Id,
    //         "members": [
    //           {"uid":$rootScope.user.Id,"picUrl":""}
    //         ],
    //         "segments":$scope.selectedSegment,
    //         "tags":$scope.selectedTag
    //         }
    //         Event.create(evData).$promise.then(function(val){
    //             Event.rooms.create({id:val.id},{"members": [{"uid":$rootScope.user.Id}],"messages":[{}]}).$promise.then(function(val){
    //               console.log("event and room build successfully");
    //                 chatService.createRoom(val.id ,$rootScope.user.id , $rootScope.user.img);
    //             })
    //           })
    //     };
    // };

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab(false);
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);


    // When! ( Shown if $scope.currentTab == 1 )
    $scope.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    $scope.minutes = ['00', "15", "30", "45"];
    $scope.selectedMinutes = undefined;
    $scope.selectedHour = undefined;
    $scope.selectedDate = undefined;
    $scope.duration = undefined;


    // What! ( Shown if $scope.currentTab == 2 )
    $scope.segments = ['Art', 'Dating', 'Fashion', 'Finance', 'Food', 'Health', 'Music', 'Politics', 'Science', 'Sports', 'Tech', 'TV', 'Culture', 'Career'];
    $scope.eventName = undefined;
    $scope.selectedSegment = undefined;
    $scope.description = undefined;
    // selected tags var is down below (in chips).


    //Chips tags!
    var self = $scope;

    self.readonly = false;
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.tags = loadtags();
    self.selectedTag = [];
    self.numberChips = [];
    self.numberChips2 = [];
    self.numberBuffer = '';
    self.autocompleteDemoRequireMatch = true;
    self.transformChip = transformChip;

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
        // If it is an object, it's already a known chip
        if (angular.isObject(chip)) {
            return chip;
        }

        // Otherwise, create a new one
        return {name: chip}
    }

    /**
     * Search for tags.
     */
    function querySearch(query) {
        var results = query ? self.tags.filter(createFilterFor(query)) : [];
        return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(tags) {
            return (tags._lowername.indexOf(lowercaseQuery) === 0)
        };

    }


//   Where? -  Google Maps (shown when currentTab == 3)

    var mapa;
    var geocoder;

    $scope.view = {
        addressInput: '',
        places: [],
        selectedPlace: '',
        markers: [],
    };
    $scope.buscarDireccion = buscarDireccion;
    $scope.centrarUbicacion = centrarUbicacion;
    $scope.borrarMarcadores = borrarMarcadores;

    $scope.initialWhere = function () {
        InitializeComponents();
    }

    //Initializes the map and other components
    function InitializeComponents() {
        var mapConfig = {
            center: {lat: 52.531677, lng: 13.381777},
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        mapa = new google.maps.Map(document.getElementById('map'), mapConfig);
        geocoder = new google.maps.Geocoder();
    };

    //Search different locations according to the direction given
    function buscarDireccion() {
        if (geocoder !== undefined) {
            geocoder.geocode(
                {
                    address: $scope.view.addressInput,
                    componentRestrictions: {country: 'DE'}
                },
                function (results, status) {
                    $scope.view.places = [];
                    $scope.view.selectedPlace = '';
                    switch (status) {
                        case google.maps.GeocoderStatus.OK:
                            console.log(results);
                            $scope.view.places = results;
                            if (results.length < 2) {
                                $scope.view.selectedPlace = results[0].place_id;
                                $scope.view.addressInput = results[0].formatted_address;
                                centrarUbicacion();
                            } else mostrarMensaje($scope.view.places.length + ' Locations found!');
                            break;
                        case google.maps.GeocoderStatus.ZERO_RESULTS:
                            mostrarMensaje('No results');
                            break;
                        case google.maps.GeocoderStatus.REQUEST_DENIED:
                            mostrarMensaje('The search request has been denied');
                            break;
                        case google.maps.GeocoderStatus.INVALID_REQUEST:
                            mostrarMensaje('invalid request');
                            break;
                    }
                    $scope.$apply();
                }
            );
        }
    }

    //Positioned in the center of the map view the selected location
    function centrarUbicacion() {
        if ($scope.view.selectedPlace !== undefined & $scope.view.selectedPlace !== '') {
            var location = _.result(_.find($scope.view.places, function (x) {
                return x.place_id === $scope.view.selectedPlace;
            }), 'geometry.location');
            if (location !== undefined) {
                var marker = new google.maps.Marker({position: location, map: mapa});
                $scope.view.markers.push(marker);
                mapa.setCenter(location);
            }
            else {
                mostrarMensaje('Could not display the location');
            }
        }
    }

    //map markers
    function borrarMarcadores() {
        for (var i = 0; i < $scope.view.markers.length; i++) {
            $scope.view.markers[i].setMap(null);
        }
        $scope.view.markers = [];
    }

    //Displays a toast message (basis function)
    function simpleToastBase(message, position, delay, action) {
        $mdToast.show(
            $mdToast.simple()
                .content(message)
                .position(position)
                .hideDelay(delay)
                .action(action)
        );
    }

    //Displays a toast message
    function mostrarMensaje(mensaje) {
        simpleToastBase(mensaje, 'top right', 6000, 'X');
    }


    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    //ionicMaterialMotion.fadeSlideInRight({
    //    selector: '.animate-fade-slide-in .item'
    //});
});
