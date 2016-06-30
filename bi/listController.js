angular.module('biApp').controller('listCtrl', ['$scope', 
       function($scope){
	
	$scope.getList = function() {
		return {
			name: "Austin's Bucket List",
			description: "Things I Want to Do",
			displayType: "list",
			events: [{
				name: "Grand Canyon Adventure",
				description: "Go canoeing down the Grand Canyon!",
				completed: false,
				album: [{
					image: "images/grandcanyon1.jpg"
				},
				{
					image: "images/grandcanyon2.jpg"
				}]
			},
			{
				name: "Make Kimchi",
				description: "Learn how to make kimchi in the traditional fashion.",
				completed: false
			},
			{
				name: "Write a novel",
				description: "Fulfill my life's dream and write a sci-fi epic",
				completed: true
			}],
			type: "extended"
		}
	};
	
	$scope.getCurrentUser = function (){
	    return {
	    	username: 'theshibk',
	    	password: 'password',
	    	lists: $scope.getList(),
	    	defaultList: $scope.getList(),
	    	friends: [],
	    	name: 'Austin'
	    };
	};
	

	
	initScope = function(){
		$scope.data = {};
		$scope.data.currentUser = $scope.getCurrentUser();
		$scope.data.currentList = $scope.data.currentUser.defaultList;
		$scope.data.completed = [];
		$scope.data.toDo = [];
	}
	
	$scope.sortEvents = function () {
		if($scope.data.currentList) {
			for (e in $scope.data.currentList.events){
				if ($scope.data.currentList.events[e].completed){
					$scope.data.completed.push($scope.data.currentList.events[e]);
				}
				else {
					$scope.data.toDo.push($scope.data.currentList.events[e]);
				}
			}
		}
	};
	
	initScope();
	$scope.sortEvents();
}]);