angular.module('biApp').directive('listEvent', ['$uibModal', function($uibModal) {
	return {
		templateUrl: 'list-event-template.html',
		scope: {
			event : '='
		},
		link: function(scope){
			
		scope.openEvent = function(){
			var modalInstance = $uibModal.open({
				
				scope: scope,
				templateUrl: 'eventModal.html'
				
			});
		};	
		
			
			
			
			
			
			
		}
		
	}
}]);