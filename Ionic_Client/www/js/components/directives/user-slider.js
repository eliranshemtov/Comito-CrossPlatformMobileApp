comito.directive('userSlider', ['$window', function ($window) {
    return {
        restrict: 'A',
        templateUrl: '/templates/userSlider.html',
        scope: {
            users: '=',
            dots: '='
        },
        link: function postLink(scope, element) {

            scope.width = $window.innerWidth;


            angular.element($window).bind('resize', function () {

                scope.width = $window.innerWidth;
                scope.$digest();

            });

            var slick = null;
            var config = {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: false,
                dots: false,
                draggable: true
            };

            function setupSlick() {
                if (slick) {
                    element.find('.user-slider').slick('unslick');
                    $('.user-slider').slick(config);
                }
                else {
                    //slick =  element.find('.img-slider').slick();
                    //slick(config);
                    $('.user-slider').slick(config);
                }
            }

            /**$(window).resize(function() {
                setupSlick();
            });**/

            scope.$watch('users', function () {
                setupSlick();
            });

        }
    };
}]);