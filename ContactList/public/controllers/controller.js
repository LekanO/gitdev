var contactApp = angular.module('contactApp', []);

contactApp.controller('contactCtrl', function ($scope, $http) {
	console.log('This is it');

	$http.get('/allContacts').success(function (response){
		console.log('fetched data')
		$scope.allContacts = response;
	});

	$scope.addContact = function () {
		console.log($scope.contact);
	}

});