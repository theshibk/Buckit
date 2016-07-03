angular.module('biApp').controller('listCtrl', ['$scope', 
       function($scope){
	
	// Self Reference
    var me = this,
    // Locals and Actions
        locals,
        actions;
	
    //Concrete implementation
    
    function getList() {
		return {
			name: "Austin's Bucket List",
			description: "Things I Want to Do",
			displayType: "list",
			events: [{
				name: "Grand Canyon Adventure",
				description: "Go canoeing down the Grand Canyon!",
				completed: false,
				album: [{
					image: "../../images/grandcanyon1.jpg"
				},
				{
					image: "../../images/grandcanyon2.jpg"
				}],
				comments: [{
					userProfile: {
						profilePicture: "../../images/randomperson1.jpg",
						name: "Kristian Wang"
					},
					content: "here come dat boi!",
					likes: 0,
					posted: new Date()
				},
				{   
					userProfile: {
					profilePicture: "../../images/randomperson2.jpg",
					name: "Donald J Trump"
				},
				content: "oh shit waddup!",
				likes: 0,
				posted: new Date()
			}],
			thumbnail : "/images/grandcanyon2.jpg"
			},
			{
				name: "Make Kimchi",
				description: "Learn how to make kimchi in the traditional fashion.",
				completed: false,
				album: [{
					image: "../../images/kimchi1.jpg"
				},
				{
					image: "../../images/grandcanyon2.jpg"
				}],
				comments: [{
					userProfile: {
						profilePicture: "../../images/randomperson1.jpg",
						name: "Kristian Wang"
					},
					content: "Wow this looks really fun!",
					likes: 0,
					posted: new Date()
				}],
				thumbnail : "/images/kimchi1.jpg"
			},
			{
				name: "Write a novel",
				description: "Fulfill my life's dream and write a sci-fi epic",
				completed: true,
				album: [{
					image: "../../images/grandcanyon1.jpg"
				},
				{
					image: "../../images/grandcanyon2.jpg"
				}],
				comments: [{
					userProfile: {
						profilePicture: "../../images/randomperson1.jpg",
						name: "Kristian Wang"
					},
					content: "Wow this looks really fun!",
					likes: 0,
					posted: new Date()
				}],
				thumbnail : "/images/novel1.jpg"
			}]
		}
	};
	
	function getCurrentUser(){
	    return {
	    	username: 'theshibk',
	    	password: 'password',
	    	lists: getList(),
	    	defaultList: getList(),
	    	friends: [],
	    	userProfile: {
					profilePicture: "/images/randomperson3.jpg",
					name: "Austin Krieger"
	    	}
	    };
	};
	
	function sortEvents() {
		if($scope.locals.currentList) {
			for (e in $scope.locals.currentList.events){
				if ($scope.locals.currentList.events[e].completed){
					$scope.locals.completed.push($scope.locals.currentList.events[e]);
				}
				else {
					$scope.locals.toDo.push($scope.locals.currentList.events[e]);
				}
			}
		}
	};
	
	me._initLocals = function(){
		locals = {
				currentUser : null,
				currentList : null,
				completed : [],
				toDo : []
		}
		
/* 		This is where one calls services to load in initial data
		locals.dataLoading = true;
		$q.all({
			
		}).then(function(results) {
			
			locals.dataLoading = false;
		});
		
*/
		locals.currentUser = getCurrentUser();
		locals.currentList = locals.currentUser.defaultList;
		
		return me;
	}
	
	 me._initActions = function () {
         actions = {
             "sortEvents": sortEvents,
         };
         return me;
     };
     
     me.defineListeners = function() {
    	 
     };
     
     me.defineScope = function() {
    	// Do all the scope initialization here
         me._initLocals()._initActions();

         $scope.locals = locals;
         $scope.actions = actions;
         
         
     	 $scope.actions.sortEvents();
     }
     
     me.defineListeners();
     me.defineScope();
     
	
}]);