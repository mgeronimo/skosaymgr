/* var skosayMgr = angular.module('skosayMgr.servic',[]);

skosayMgr.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})


/* SkosayMgr.service('loginService', function($scope, $http){
    this.hello = function() {
        return "Hello World";
    };
});

 skosayApp.factory('skosayLoginSvc', function($http){
    return {
        getSessions: function() {
            return $http.post('dev.skosay.com/api/v1/login', { 
                email: $scope.loginData.email,
                password: $scope.loginData.password
            });
        }
    };
}); --> */

