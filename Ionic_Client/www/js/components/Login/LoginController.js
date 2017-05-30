comito.controller('LoginCtrl', function ($scope, $rootScope, $q, UserService, $ionicLoading, $state, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();                                        //$state, $q, UserService, $ionicLoading
    $timeout(function () {
        $scope.$parent.hideHeader();
    }, 0);

    // This is the success callback from the login method
    var fbLoginSuccess = function (response) {
        if (!response.authResponse) {
            fbLoginError("Cannot find the authResponse");
            return;
        }

        var authResponse = response.authResponse;
        console.log(authResponse);


        // For the purpose of this example I will store user data on local storage
        console.log("About to sginup user for the first time");
        UserService.signUp(authResponse.userID, authResponse.userID, authResponse.accessToken, function (err, res) {
                if (err) {
                    console.log(err);
                }
                if (!res) {
                    console.log("oops, thats should not happen");
                }
                else {
                    console.log("Not sure if thi is the right value, logging for debbug: \n" + JSON.stringify(res));
                    $rootScope.userId = res.id;
                }
            }
        );
        console.log("End of sign up, callback should log after this message");
        $ionicLoading.hide();
        $state.go('app.profile');
    };

    // This is the fail callback from the login method
    var fbLoginError = function (error) {
        console.log("An error occurred while user clicked login");
        console.log('fbLoginError', JSON.stringify(error));
        $ionicLoading.hide();
    };


    //This method is executed when the user press the "Login with facebook" button
    $scope.facebookSignIn = function () {
        console.log("User clicked login, calling getLoginStatus");
        facebookConnectPlugin.getLoginStatus(function (success) {
            console.log('getLoginStatus', JSON.stringify(success));
            if (success.status === 'connected') {
                console.log("User is in status \"connected\"");
                var uid = success.authResponse.userID;
                var accessToken = success.authResponse.accessToken;
                console.log("About to sginup user, user should already exist");
                UserService.signUp(uid, uid, accessToken, function (err, res) {
                    console.log(err);
                    console.log(res);
                });
                console.log("End of sign up, callback should log after this message");
                $state.go('app.profile');


            } else {

                console.log("User in status " + success.status);

                $ionicLoading.show({
                    template: 'Logging in...'
                });
                console.log("About to call login to facebook");
                facebookConnectPlugin.login(["public_profile", "user_likes", "user_about_me", "user_tagged_places", "user_religion_politics", "user_work_history", "user_birthday", "user_about_me", "user_hometown", "user_education_history", "user_actions.books",
                    "user_actions.music", "user_actions.video"], fbLoginSuccess, fbLoginError);
            }
        });
    };

    ionicMaterialInk.displayEffect();


});
