comito.controller('ProfileCtrl', function ($scope, $state, $stateParams, $timeout, $rootScope,
                                           ionicMaterialMotion, ionicMaterialInk, languagesCountries) {
    $scope.editData = {
        name: 'Eliran Shem Tov',
        img: 'img/profiletmp.jpg',
        in: 'Berlin',
        from: [{'name': 'Tel-Aviv'}],
        about: 'Eliran is a 27 years old js developer. Living in Berlin, Germany. Born and raised in the holy land, Israel.',
        languages: [{'name': 'English'}, {'name': 'Hebrew'}],
        looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
        likes: {
            music: [{'name': 'RadioHead'}, {'name': 'ColdPlay'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
            books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
            movies: [{'name': 'Batman Vs Superman'}, {'name': 'Spiderman'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
        },
        visited: []
    };
    $scope.init = function () {
        $rootScope.user = {
            id: '2',
            img: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10915312_1013256015356503_3421707777820962675_n.jpg?oh=63863a51f352c87bf867644d24be8aae&oe=57D491DC&__gda__=1473758860_58dab4639542d7fd6f54eb6446c87d91'
        };
        if ($stateParams.id && $scope.users[$stateParams.id - 1]) {
            $scope.userData = $scope.users[$stateParams.id - 1];
            $scope.name = $scope.userData.name.split(" ")[0];
        } else {
            $scope.userData = {
                name: 'Eliran Shem Tov',
                img: 'img/profiletmp.jpg',
                age: '27',
                in: 'Berlin',
                from: [{'name': 'Tel-Aviv'}],
                about: 'Eliran is a 27 years old js developer. Living in Berlin, Germany. Born and raised in the holy land, Israel.',
                languages: [{'name': 'English'}, {'name': 'Hebrew'}],
                looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
                likes: {
                    music: [{'name': 'RadioHead'}, {'name': 'ColdPlay'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
                    books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
                    movies: [{'name': 'Batman Vs Superman'}, {'name': 'Spiderman'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
                },
                hobbies: [{name: 'playing a guiter'}, {name: 'program in c++'}],
                visited: [{name: 'Germany'}, {name: 'Ireland'}]
            };
            $scope.name = $scope.userData.name.split(" ")[0];
        }
        if ($rootScope.user.id == $stateParams.id) {
            $scope.myProfile = true;
        } else {
            $scope.myProfile = false;
        }
        //TODO get user details
        $scope.events = [{
            id: '1', name: "event", description: "desc desc desc", time: "17 in July", owner: "1"
            , img: 'http://lorempixel.com/400/200/nightlife/'
        },
            {
                id: '2', name: "cool event", description: "desc desc desc", time: "18 in July", owner: "2"
                , img: 'http://lorempixel.com/400/200/food/'
            },
            {
                id: '3', name: "more event", description: "desc desc desc", time: "19 in July", owner: "3"
                , img: 'http://lorempixel.com/400/200/art/'
            }];

        $scope.editData = angular.copy($scope.userData);

    };

    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    $scope.startConversation = function () {
        //chatService.createConversation($rootScope.user.id ,$rootScope.user.img,$stateParams.id ,$scope.userData.img);
        $state.go('app.rooms');
    }

    $scope.users = [{
        id: 1, name: 'Eliran Shem Tov',
        age: 27,
        in: 'Berlin',
        from: 'Tel-Aviv',
        about: 'Eliran is a 27 years old Python developer. Living in Berlin, Germany. Born and raised in the holy land, Israel.',
        img: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/11174825_10153282716704883_3960129319377772344_n.jpg?oh=4d5d9c7601fbc5dbbe136e2f2d2ed016&oe=58027312',
        languages: [{'name': 'English'}, {'name': 'Hebrew'}],
        looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
        likes: {
            music: [{'name': 'RadioHead'}, {'name': 'ColdPlay'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
            books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
            movies: [{'name': 'Batman Vs Superman'}, {'name': 'Spiderman'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
        },
        hobbies: [{name: 'playing a guiter'}, {name: 'program in c++'}],
        visited: [{name: 'Germany'}, {name: 'Ireland'}]
    },

        // user 2
        {
            id: 2, name: 'Stav Ben Simchon',
            age: 18,
            in: 'Berlin',
            from: 'Amsterdam',
            about: 'Stav is a 18 years old Pascal developer. Living in Tel Aviv, Israel. Born and raised by Birds and bears.',
            img: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/10646969_10202275550802619_4901323642074662294_n.jpg?oh=96873c6b07f89d93d9288804c41a5ab6&oe=57C21E2C',
            languages: [{'name': 'English'}, {'name': 'Hebrew'}],
            looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
            likes: {
                music: [{'name': 'RadioHead'}, {'name': 'ColdPlay'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
                books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
                movies: [{'name': 'Batman Vs Superman'}, {'name': 'Spiderman'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
            },
            visited: []
        },

        // user 3
        {
            id: 3, name: 'Or Enjoy',
            age: 12,
            in: 'Berlin',
            from: 'Reshon-Lezion',
            about: 'Tight ASOS Fan. Buys everything, especially things with unicorns on it.',
            img: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10915312_1013256015356503_3421707777820962675_n.jpg?oh=63863a51f352c87bf867644d24be8aae&oe=57D491DC&__gda__=1473758860_58dab4639542d7fd6f54eb6446c87d91',
            languages: [{'name': 'English'}, {'name': 'Hebrew'}],
            looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
            likes: {
                music: [{'name': 'beyonce'}, {'name': 'lady gaga'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
                books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
                movies: [{'name': 'Batman Vs Superman'}, {'name': 'Spiderman'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
            },
            visited: []
        },

        // user 4
        {
            id: 4, name: 'Eran Reuveni',
            age: 27,
            in: 'Berlin',
            from: 'Jerusalem',
            about: 'Eran is a 27 years old js developer. Loves Zhava Galon and looks for nice girls to meet.',
            img: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10255288_10204720278794324_1732904991633562820_n.jpg?oh=f202ca4125bd51e285dd1e369baa02ef&oe=57C8E0DA&__gda__=1473196709_d305d5b6a5f7d3cfd340b2b03c6bf103',
            languages: [{'name': 'English'}, {'name': 'Hebrew'}],
            looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
            likes: {
                music: [{'name': 'RadioHead'}, {'name': 'ColdPlay'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
                books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
                movies: [{'name': 'FRIDAY 13'}, {'name': 'Shopoholic'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
            },
            visited: []

        }
    ];
    $scope.EditMode = function () {
        $state.go('app.profileEdit');
    };
    $scope.musicChips = [{name: 'Banana'}, {name: 'Nice'}];

    $scope.currentTab = 1;
    $scope.switchTab = function (id) {
        if (id != $scope.currentTab) {
            $scope.currentTab = id;
        }
    };


    //Chips tags!
    $scope.selectedItem = null;
    $scope.searchText = null;
    $scope.selectedTag = [];
    $scope.querySearch = querySearch;
    $scope.transformChip = transformChip;

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {

        if ($scope.editData.from.length) {
            $scope.editData.from.pop();
        }
        // If it is an object, it's already a known chip
        if (angular.isObject(chip)) {
            return chip;
        }

        // Otherwise, create a new one

        return {name: chip};
    }

    /**
     * Search for tags.
     */
    function querySearch(query, option) {
        if (option == 'language') {
            var l = loadLowercase(languagesCountries.getLanguages());
            var results = query ? l.filter(createFilterFor(query)) : [];
            return results;
        } else if (option == 'country') {
            var c = loadLowercase(languagesCountries.getCountries());
            var results = query ? c.filter(createFilterFor(query)) : [];
            return results;
        }
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

    function loadLowercase(array) {
        return array.map(function (tag) {
            tag._lowername = tag.name.toLowerCase();
            return tag;
        });
    }


    // Set Motion
    $timeout(function () {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 100);


    // Set Ink
    ionicMaterialInk.displayEffect();


    $scope.update = function () {
        $state.go('app.profile');
        //update user
        //$scope.userData=$scope.editData;
    }
});
