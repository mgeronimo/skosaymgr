angular.module('skosayMgr.controllers', [])

.controller('NewMessagesController', function($http, $ionicPopup, ApiEndpoint) {
  //
  this.access_token = "V8NvolnV52nIquvifNnxWoBh4myqTBsAm1KChet2";
    
    this.getNewMsgs = function() {
        this.newMsgs = {};
                  
        console.log(this.newMsgs, 'Before GET');

      var req = {
            method: 'GET',
             url: ApiEndpoint.url+'/v1/new',
            headers: {
                   'Authorization': 'V8NvolnV52nIquvifNnxWoBh4myqTBsAm1KChet2'
                 }
      };
      
//    $http.post(ApiEndpoint.url+'/v1/managerLogin', $scope.loginData).
      $http(req)
        .success(function(data, status, headers, config) {
          
          this.newMsgs = data;
          
        // this callback will be called asynchronously
        // when the response is available
        console.log(this.newMsgs, '***SUCCESS***');
          $state.go('app.history',this.newMsgs);
        })
        .error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('***ERROR***'+'\n\n'+
              'Status: '+status+'\n\n'+
              'Details: '+data.error+'\n\n'+
              'Desc: '+data.error_description);
        console.log($scope, config,status, data, status,headers);
      });
      
    };

})

.controller('LoginController', function($http, ApiEndpoint){
    
    this.loginData = {
        email: '',
        password: ''
    };
    
    this.login = function (loginData){

      console.log(loginData, 'Before POST');

      var req = {
            method: 'POST',
             url: ApiEndpoint.url+'/v1/managerLogin',
//            headers: {
//                 'Content-Type': undefined
//             },
            data: { 
                username: loginData.email,
                grant_type: 'password',         
                client_secret: '12345',
                client_id: loginData.email,
                password: loginData.password
            },
      };
      
//    $http.post(ApiEndpoint.url+'/v1/managerLogin', $scope.loginData).
        
        $http(req)
            .success(function(data, status, headers, config) {
          
                  $scope.token = {
                      access_token: data.access_token,
                      token_type: data.token_type,
                      expires_in: data.expires_in
                  };

                  $scope.status = status;

                console.log('***SUCCESS***');
        })
            .error(function(data, status, headers, config) {

        alert('***ERROR***'+'\n\n'+
              'Status: '+status+'\n\n'+
              'Details: '+data.error+'\n\n'+
              'Desc: '+data.error_description);
        console.log($scope, config,status, data, status,headers);
      });
    }
})

.controller('locationsCtrl', function($scope) {
  $scope.locations = [
    { title: 'Kenny Rogers', id: 1 },
    { title: 'National Bookstore', id: 2 },
    { title: 'UP-Ayala TBI', id: 3 },
    { title: 'Shell', id: 4 },
    { title: 'BPI', id: 5 },
    { title: 'Hap Chan', id: 6 }
  ];
})
