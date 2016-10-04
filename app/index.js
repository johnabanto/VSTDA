var myApp = angular.module('myApp', []);

	myApp.controller('mainController', function($scope) {
		// creating an empty array
		$scope.todos = [];

		// calling on user input from addNew to add data to table
		$scope.addNew = function() {
			$scope.todos.push(
				{
					toDo: $scope.task,
					priority: $scope.priority
				});
	
		}

	});