var skosayMgr = angular.module('skosayMgr', ['ionic', 'skosayMgr.controllers', 'skosayMgr.services', 'skosayMgr.messages'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
/*
 .config(function ($httpProvider) {
    $httpProvider.defaults.transformRequest.push(function (data, headerGetter) {
        console.log("transform Request");
        return data;
    });
    
    $httpProvider.defaults.transformResponse.push(function (data, headerGetter) {
        console.log("transform Response");
        return data;
    }); 

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/form-data; charset=UTF-8';
}) 
*/

.constant('ApiEndpoint', {
  url: 'http://localhost:8100/api'
})

    .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: "/login",
//    abstract: true,
    templateUrl: "templates/login.html",
    controller: 'LoginController'
//    controller: 'AppCtrl'
  })
  
   .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  //  controller: 'LoginController'
  })

  .state('app.newMsgs', {
    url: "/newMsgs/:id",
    views: {
      'tab-new-msgs': {
        templateUrl: "templates/newMsgs.html",
        controller: 'NewMessagesController'
      }
    }
  })

  .state('app.inProgress', {
    url: "/inProgress/:id",
    views: {
      'tab-progress': {
        templateUrl: "templates/inProgress.html",
        controller: 'InProgressController'
      }
    }
  })

  .state('app.resolved', {
    url: "/resolved/:id",
    views: {
      'tab-resolved': {
        templateUrl: "templates/resolved.html",
        controller: 'ResolvedController'
      }
    }
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.locations', {
      url: "/locations",
      views: {
        'menuContent': {
          templateUrl: "templates/locations.html",
//          controller: 'locationsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
//  $urlRouterProvider.otherwise('/app/locations');
  $urlRouterProvider.otherwise('/login');
});
