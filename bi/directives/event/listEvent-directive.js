angular.module('biApp').directive('listEvent', ['$uibModal', '$q', 
    function($uibModal, $q) {
	return {
		templateUrl: 'directives/event/list-event-template.html',
		scope: {
			event : '='
		},
		link: function(scope){
			
		// Self Reference
        var me = this,
        // Locals and Actions
                locals,
                actions;
            
			
		function openEvent(){
			var modalInstance = $uibModal.open({
				
				scope: scope,
				templateUrl: 'directives/event/eventModal.html'
				
			});
		};
			

            // Initialization methods
            me._initLocals = function() {
            	locals = {};
            	return me;
            }
            
            me._initActions = function() {
            	actions = {
            			"openEvent" : openEvent
            	};
            	return me;
            }
            
         // Template methods
            me.defineListeners = function () {
            };

            me.defineScope = function () {
                me._initLocals()._initActions();
                scope.locals = locals;
                scope.actions = actions;
            }
            
            me.defineListeners();
            me.defineScope();
	
		
		}
		
	}
}]);