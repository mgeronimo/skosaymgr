angular.module('skosayMgr.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  // Form data for the login modal
  $scope.loginData = {
  
      email: '',
      password: ''
      
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);    
      
    $http.post('http://devapp.skosay.com/api/v1/login', $scope.loginData).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('***SUCCESS***');
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('***ERROR***');
        console.log(status);
      });
      
    /*var handleSuccess = function(data, status) {
    $scope.variableName = data;
    console.log($scope.variableName);
    };*/

  };
    
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
