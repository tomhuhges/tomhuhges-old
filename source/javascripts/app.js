



    var tomhuhges = angular.module('tomhuhges', ['ngRoute', 'ngSanitize']);

    // configure our routes
    tomhuhges.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/art', {
                templateUrl : 'pages/art.html',
                controller  : 'mainController'
            })

            .when('/art', {
                templateUrl : 'pages/art.html',
                controller  : 'artController'
            })

            // route for the about page
            .when('/code', {
                templateUrl : 'pages/code.html',
                controller  : 'codeController'
            })

            // route for the contact page
            .when('/writing', {
                templateUrl : 'pages/writing.html',
                controller  : 'writingController'
            })

            // route for the contact page
            .when('/linkdump', {
                templateUrl : 'pages/linkdump.html',
                controller  : 'linkdumpController'
            });
    });

    // create the controller and inject Angular's $scope
    tomhuhges.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'home';
    });

    tomhuhges.controller('artController', function($scope) {
        // create a message to display in our view
        $scope.message = 'art';
    });

    tomhuhges.controller('codeController', function($scope) {
        $scope.message = 'code';
    });

    tomhuhges.controller('writingController', function($scope) {
        $scope.message = 'writing';
    });

	tomhuhges.controller('linkdumpController', function($scope, $http) {

		var apikey = 'nlp5yalB647VfKtyzwxdmFR4zUbzmDxB5pAHqAGsx6mGCoVGpU';
		var jsonurl = 'http://api.tumblr.com/v2/blog/tomhuhgeslinkdump.tumblr.com/posts/link?api_key='+apikey+'&callback=JSON_CALLBACK';

		$http.jsonp(jsonurl)
			.success (function(result) {
				$scope.posts = result.response.posts;
			})
			.error (function(result) {
				$scope.message = 'error';
			});

	});

    