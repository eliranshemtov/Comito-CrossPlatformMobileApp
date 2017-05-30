comito.directive('eventSlider', ['$window', function ($window) {
    return {
        restrict: 'A',
        templateUrl: '/templates/eventSlider.html',
        scope: {
            events: '=',
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
                autoplay: true,
                infinite: false,
                autoplaySpeed: 6000,
                arrows: false,
                dots: true,
                draggable: true
            };

            function setupSlick() {
                if (slick) {
                    element.find('.img-slider').slick('unslick');
                    $('.img-slider').slick(config);
                }
                else {
                    //slick =  element.find('.img-slider').slick();
                    //slick(config);
                    $('.img-slider').slick(config);
                }
            }

            /**$(window).resize(function() {
                setupSlick();
            });**/

            scope.$watch('events', function () {
                setupSlick();
            });

        }
    };
}]);