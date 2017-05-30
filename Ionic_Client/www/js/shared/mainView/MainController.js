comito
    .controller('mainViewController', function ($scope, $ionicModal, $ionicPopover, $timeout, $rootScope) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.isExpanded = false;
        $scope.hasHeaderFabLeft = false;
        $scope.hasHeaderFabRight = false;

        $rootScope.user = {
            id: '3',
            name: 'Eliran Shem Tov',
            img: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10915312_1013256015356503_3421707777820962675_n.jpg?oh=63863a51f352c87bf867644d24be8aae&oe=57D491DC&__gda__=1473758860_58dab4639542d7fd6f54eb6446c87d91',
            From: {name: 'tel aviv'},
            about: 'Eliran is a 27 years old js developer. Living in Berlin, Germany. Born and raised in the holy land, Israel.',
            languages: [{'name': 'English'}, {'name': 'Hebrew'}],
            looking4: 'Tourists to hang out with in berlin... Just good time and beer.',
            likes: {
                music: [{'name': 'RadioHead'}, {'name': 'ColdPlay'}, {'name': 'Arctic Monkeys'}, {'name': 'Berry Saharof'}, {'name': 'Lilly allen'}],
                books: [{'name': 'Harry Potter'}, {'name': 'Moby dick'}, {'name': 'Life and death'}],
                movies: [{'name': 'Batman Vs Superman'}, {'name': 'Spiderman'}, {'name': 'Butman'}, {'name': 'SouthPark'}]
            },
            visited: [{name: 'mexico'}, {name: 'Berlin'}]
        };


        //geolocation
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
            })
            //console.log("navigator.geolocation works well");
        }


        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        }

        ////////////////////////////////////////
        // Layout Methods
        ////////////////////////////////////////

        $scope.hideNavBar = function () {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
        };

        $scope.showNavBar = function () {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
        };

        $scope.noHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }
        };

        $scope.setExpanded = function (bool) {
            $scope.isExpanded = bool;
        };

        $scope.setHeaderFab = function (location) {
            var hasHeaderFabLeft = false;
            var hasHeaderFabRight = false;

            switch (location) {
                case 'left':
                    hasHeaderFabLeft = true;
                    break;
                case 'right':
                    hasHeaderFabRight = true;
                    break;
            }

            $scope.hasHeaderFabLeft = hasHeaderFabLeft;
            $scope.hasHeaderFabRight = hasHeaderFabRight;
        };

        $scope.hasHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (!content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }

        };

        $scope.hideHeader = function () {
            $scope.hideNavBar();
            $scope.noHeader();
        };

        $scope.showHeader = function () {
            $scope.showNavBar();
            $scope.hasHeader();
        };

        $scope.clearFabs = function () {
            var fabs = document.getElementsByClassName('button-fab');
            if (fabs.length && fabs.length > 1) {
                fabs[0].remove();
            }
        };
        $scope.shareAnywhere = function () {
            window.plugins.socialsharing.share('Yo..! Ive got The best thing for you...\n Co-Mito App helps you discover People and Places in Berlin!' +
                '\n \n http://www.co-mito.com\n' +
                ' It offers you the best matched people and events, tailor made for you by fields of interest!');
        };
    });
