angular.module('skosayMgr.messages', [])

.controller('NewMessagesController', function($http, $ionicPopup, $scope, $state, $stateParams, ApiEndpoint) {
    $scope.id = $stateParams.id;

    //console.log('Here you go'+'\n'+$scope.id);
    
    var newList = this;
    newList.stores = [];
    
    var req = {
            method: 'GET',
            url: ApiEndpoint.url+'/v1/new'
      };
        
    $http(req)
        .success(function(data, status, headers, config) {
            
            newList.stores=data.stores;
        
            console.log(newList.stores,$scope);
            $state.go('app.newMsgs', { id: $scope.id });
        })
        .error(function(data, status, headers, config) {
            alert('Error!');
        });

})

.controller('InProgressController', function($http, $ionicPopup, $scope, $state, $stateParams, ApiEndpoint) {
    $scope.id = $stateParams.id;

    console.log('In Progress'+'\n'+$scope.id);
    
    var inProgList = this;
    inProgList.stores = [];
    
    var req = {
            method: 'GET',
            url: ApiEndpoint.url+'/v1/inprogress'
      };
        
    $http(req)
        .success(function(data, status, headers, config) {
            
            inProgList.stores=data.stores;
        
            console.log(inProgList.stores ,$scope);
            $state.go('app.inProgress', { id: $scope.id });
        })
        .error(function(data, status, headers, config) {
            alert('Error!');
        });

})

.controller('ResolvedController', function($http, $ionicPopup, $scope, $state, $stateParams, ApiEndpoint) {
    $scope.id = $stateParams.id;

    console.log('Resolved'+'\n'+$scope.id);
    
    var resolvedList = this;
    resolvedList.stores = [];
    
    var req = {
            method: 'GET',
            url: ApiEndpoint.url+'/v1/resolved'
      };
        
    $http(req)
        .success(function(data, status, headers, config) {
            
            resolvedList.stores=data.stores;
        
            console.log(resolvedList.stores ,$scope);
            $state.go('app.resolved', { id: $scope.id });
        })
        .error(function(data, status, headers, config) {
            alert('Error!');
        });

})