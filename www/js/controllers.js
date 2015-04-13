angular.module('skosayMgr.controllers', [])

.controller('LoginController', function($http, $state, ApiEndpoint){
    
    this.loginData = {
        email: '',
        password: ''
    };
    
    this.login = function (loginData){
        
        document.getElementById('submitButton').style.display = 'none';
        document.getElementById('falseButton').style.display = '';
//
      console.log(ApiEndpoint);

      var req = {
            method: 'POST',
            url: ApiEndpoint.url+'/v1/managerLogin',
/*            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
            }, */
            data: { 
                username: loginData.email,
                password: loginData.password,
                client_id: loginData.email,
                client_secret: "12345",
                grant_type: "password"
            }
      };
        
      console.log(req);
      
//    $http.post(ApiEndpoint.url+'/v1/managerLogin', $scope.loginData).
        
      $http(req)
          .success(function(data, status, headers, config) {

            console.log('***SUCCESS***'+'\n'+data.status_code);
                //$location.path('app/newMsgs');

            $state.go('app.newMsgs', { id: data.userid });
 //           $state.go('app.inProgress', { id: data.userid });
   //         $state.go('app.resolved', { id: data.userid });
          })
          .error(function(data, status, headers, config) {

            /*console.log('***ERROR***'+'\n\n'+
                  'Status: '+status+'\n\n'+
                  'Details: '+data.message+'\n\n');
            
            console.log(config,status, data, status,headers);*/
            alert('Log in failed!');
            document.getElementById('submitButton').style.display = '';
            document.getElementById('falseButton').style.display = 'none';
            
        });
    }
    this.loginData = {};
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
