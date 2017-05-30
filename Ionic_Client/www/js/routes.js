/**
 * Created by Eran on 25/06/2016.
 */
comito
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $mdThemingProvider, $mdGestureProvider, $httpProvider) {
       // $httpProvider.defaults.headers.get = {'Access-Control-Allow-Origin': '*' };
        $mdGestureProvider.skipClickHijack();
        $mdThemingProvider.theme('default');

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);

        /*
         // Turn off back button text
         $ionicConfigProvider.backButton.previousTitleText(false);
         */

        $stateProvider.state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'js/shared/mainView/MainView.html',
                controller: 'mainViewController'
            })

            .state('app.activity', {
                url: '/activity',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Activity/activity.html',
                        controller: 'ActivityCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-activity').classList.toggle('on');
                            }, 200);
                        }
                    }
                }
            })
            .state('app.events', {
                url: '/events',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Events/events.html',
                        controller: 'EventsController'
                    },
                    'fabContent': {
                        template: '<button id="fab-gallery" class="button button-fab button-fab-bottom-right expanded button-energized-900 drop"><i class="icon ion-plus"></i></button>',
                        controller: function ($timeout) {
                            $timeout(function () {
                                document.getElementById('fab-gallery').classList.toggle('on');
                            }, 600);
                        }
                    }
                }
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Login/login.html',
                        controller: 'LoginCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })
            .state('app.profile', {
                url: '/profile/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Profile/profileView/profile.html',
                        controller: 'ProfileCtrl'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-edit"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.segments', {
                url: '/segments',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Segments/segments.html',
                        controller: 'segmentsController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" ng-click="next()" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-checkmark-round"></i></button>' ,
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.offers', {
                url: '/offers',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Offers/offers.html',
                        controller: 'OffersCtrl'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.profileEdit', {
                url: '/profileEdit/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Profile/profileView/profile-Edit.html',
                        controller: 'ProfileCtrl'
                    },
                    'fabContent': {
                        template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900" ng-click="move()"><i class="icon ion-edit"></i></button>',
                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })

            .state('app.detailsEvent', {
                url: '/detailsEvent?eventId',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/EventDetails/detailsEvent.html',
                        controller: 'EventsDetailsController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,
                        //controller: function ($timeout) {
                        /*$timeout(function () {
                         document.getElementById('fab-profile').classList.toggle('on');
                         }, 800);*/
                    }
                }
            })

            .state('app.createEvent', {
                url: '/createEvent',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/CreateEvent/createEvent.html',
                        controller: 'CreateEventController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,

                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900" ><i class="icon ion-android-send"></i></button>' ,

                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.feedback', {
                url: '/feedback',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Feedback/feedback.html',
                        controller: 'FeedbackController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,

                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-positive" ><i class="icon ion-android-send"></i></button>' ,

                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.faq', {
                cache: false,
                url: '/faq',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/FAQ/faq.html',
                        controller: 'FaqController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,

                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-positive" ><i class="icon ion-android-send"></i></button>' ,

                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/Settings/settings.html',
                        controller: 'SettingsController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,

                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-positive" ><i class="icon ion-android-send"></i></button>' ,

                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            })
            .state('app.editEvent', {
                url: '/editEvent/:id',
                views: {
                    'menuContent': {
                        templateUrl: 'js/components/CreateEvent/createEvent.html',
                        controller: 'CreateEventController'
                    },
                    'fabContent': {
                        //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-android-send"></i></button>' ,

                        // template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900" ><i class="icon ion-android-send"></i></button>' ,

                        controller: function ($timeout) {
                            /*$timeout(function () {
                             document.getElementById('fab-profile').classList.toggle('on');
                             }, 800);*/
                        }
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    });