comito
    .service('UserService', function ($http, CONFIG) {
        // For the purpose of this example I will store user data on ionic local storage but you should save it on a database

        var signUp = function (username, password, fbToken, callback) {
            console.log("About to post to server");
            $http.post(CONFIG.SERVER + '/signup', {username: username, password: password, fbToken: fbToken})
                .success(function (response) {
                    console.log("Response from Server:");
                    console.log(response);
                    callback(null, response);
                })
                .error(function (err) {
                    console.log("authentication failed");
                    callback({err: 'authentication failed'}, null)
                });
        };

        return {
            signUp: signUp
        };
    });
