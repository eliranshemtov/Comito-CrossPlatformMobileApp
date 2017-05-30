comito.controller('OffersCtrl', function ($scope, $ionicScrollDelegate, $timeout, $rootScope, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();


    $scope.init = function () {

        $scope.events = [{
            id: '1', name: "Sit Amet", description: "desc desc desc", time: "17 in July", owner: "or Joy"
            , img: 'http://lorempixel.com/400/200/nightlife/'
        },
            {
                id: '2', name: "Cool Event", description: "desc desc desc", time: "18 in July", owner: "steve"
                , img: 'http://lorempixel.com/400/200/food/'
            },
            {
                id: '3',
                name: "Cooking cookies",
                description: "desc desc desc",
                time: "19 in July",
                owner: "eliran shem tov"
                ,
                img: 'http://lorempixel.com/400/200/art/'
            },
            {
                id: '4',
                name: "Tonight\' Fashion Show",
                description: "desc desc desc",
                time: "17 in July",
                owner: "eran "
                ,
                img: 'http://lorempixel.com/400/200/people/'
            }];


        $scope.users = [
            // user 1
            {
                id: 1, name: 'Eliran Shem Tov',
                age: 27,
                in: 'Berlin',
                from: 'Tel-Aviv',
                about: 'Eliran is a 27 years old Python developer. Living in Berlin, Germany. Born and raised in the holy land, Israel.',
                picUrl: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/11174825_10153282716704883_3960129319377772344_n.jpg?oh=4d5d9c7601fbc5dbbe136e2f2d2ed016&oe=58027312'
            },

            // user 2
            {
                id: 2, name: 'Stav Ben Simchon',
                age: 18,
                in: 'Berlin',
                from: 'Amsterdam',
                about: 'Stav is a 18 years old Pascal developer. Living in Tel Aviv, Israel. Born and raised by Birds and bears.',
                picUrl: 'https://scontent-fra3-1.xx.fbcdn.net/v/t1.0-9/10646969_10202275550802619_4901323642074662294_n.jpg?oh=96873c6b07f89d93d9288804c41a5ab6&oe=57C21E2C'
            },

            // user 3
            {
                id: 3, name: 'Or Enjoy',
                age: 12,
                in: 'Berlin',
                from: 'Reshon-Lezion',
                about: 'Tight ASOS Fan. Buys everything, especially things with unicorns on it.',
                picUrl: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10915312_1013256015356503_3421707777820962675_n.jpg?oh=63863a51f352c87bf867644d24be8aae&oe=57D491DC&__gda__=1473758860_58dab4639542d7fd6f54eb6446c87d91'
            },

            // user 4
            {
                id: 4, name: 'Eran Reuveni',
                age: 27,
                in: 'Berlin',
                from: 'Jerusalem',
                about: 'Eran is a 27 years old js developer. Loves Zhava Galon and looks for nice girls to meet.',
                picUrl: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10255288_10204720278794324_1732904991633562820_n.jpg?oh=f202ca4125bd51e285dd1e369baa02ef&oe=57C8E0DA&__gda__=1473196709_d305d5b6a5f7d3cfd340b2b03c6bf103'
            }
        ]
    };


});
