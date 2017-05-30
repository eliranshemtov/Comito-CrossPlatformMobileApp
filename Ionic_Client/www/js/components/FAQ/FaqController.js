/**
 * Created by Eliran on 10/06/2016.
 */
comito.controller('FaqController', function ($scope, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab(false);
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);


    $scope.init = function () {
        $scope.faq = [
            {id: 1, q: "What platforms does Comito support?", a: "IOS, Android, and Desktop, via co-mito.com", rank: 0},
            {id: 2, q: "who is your lorem ispum dolor?", a: "shauli's blog is the best", rank: 4},
            {
                id: 3,
                q: "aba shcha arum ku?",
                a: "Not all “system builder” products for Windows 7 are currently available on the site. We are working to add more. Only Facebook at the moment. In the future we might support few more networks.",
                rank: 3
            },
            {id: 4, q: "Can i do this?", a: "Yes, but you’ll need your product key.", rank: 2},
            {
                id: 5,
                q: "What social media tha app supports?",
                a: "Only Facebook at the moment. In the future we might support few more networks.",
                rank: 1
            },
        ];

        $scope.user.likes = [];
        $scope.user.dislike = [];
    };


    $scope.like = function (id) {
        var obj;
        for (var i = 0; i < $scope.faq.length; i++) {
            obj = $scope.faq[i];
            if (obj.id == id) {
                if ($scope.user.likes.indexOf(id) == -1) {
                    obj.rank++;
                    $scope.user.likes.push(id);
                    if ($scope.user.dislike.indexOf(id) == -1) {
                        $scope.user.dislike.slice($scope.user.dislike.indexOf(id), 1);
                    }
                }
                $scope.updateFaq();
                return;
            }
        }
        ;
    };

    $scope.dislike = function (id) {
        var obj;
        for (var i = 0; i < $scope.faq.length; i++) {
            obj = $scope.faq[i];
            if (obj.id == id) {
                if ($scope.user.dislike.indexOf(id) == -1) {
                    obj.rank--;
                    $scope.user.dislike.push(id);
                }
                if ($scope.user.likes.indexOf(id) == -1) {
                    $scope.user.likes.slice($scope.user.dislike.indexOf(id), 1);
                }

                $scope.updateFaq();
                return;
            }
        }
        ;

    };
    $scope.updateFaq = function () {
        //faq update
    };

});