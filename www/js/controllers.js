angular.module('skosayMgr.controllers', [])

.controller('NewMessagesController', function($http, $ionicPopup, $scope, $stateParams, ApiEndpoint) {
  //
  /*this.access_token = "V8NvolnV52nIquvifNnxWoBh4myqTBsAm1KChet2";
    
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
      
    };*/
    $scope.id = $stateParams.id;
    console.log('Here you go'+'\n'+$scope.id);
    
    var req = {
            method: 'GET',
            url: ApiEndpoint.url+'/v1/new'
      };
        
    $http(req)
        .success(function(data, status, headers, config) {
            console.log(data.storeDept);
        })
        .error(function(data, status, headers, config) {
            alert('Error!');
        });

})

.controller('LoginController', function($http, $state, ApiEndpoint){
    
    this.loginData = {
        email: '',
        password: ''
    };
    
    this.login = function (loginData){

      console.log(ApiEndpoint);

      var req = {
            method: 'POST',
            url: ApiEndpoint.url+'/v1/managerLogin',
            data: { 
                //"grant_type": "password",         
                username: loginData.email,
                password: loginData.password,
                client_id: loginData.email,
                client_secret: "12345",
                grant_type: "password"
            },
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      };
        
        console.log(req);
      
//    $http.post(ApiEndpoint.url+'/v1/managerLogin', $scope.loginData).
        
        $http(req)
            .success(function(data, status, headers, config) {
          
                  /*$scope.token = {
                      access_token: data.access_token,
                      token_type: data.token_type,
                      expires_in: data.expires_in
                  };*/

                //$scope.status = status;

                console.log('***SUCCESS***'+'\n'+data.status_code);
                //$location.path('app/newMsgs');
                $state.go('app.newMsgs', { id: data.userid });
        })
        .error(function(data, status, headers, config) {

            /*console.log('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Details: '+data.message+'\n\n');
            
            console.log(config,status, data, status,headers);*/
            
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
