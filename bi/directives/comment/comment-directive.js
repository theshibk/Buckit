angular.module('biApp').directive('comment', ["$q", 
    function($q) {
	return {
		templateUrl: 'directives/comment/comment-template.html',
		scope: {
			comments : '='
		},
		link: function(scope){
			
			 // Self Reference
            var me = this,
            // Locals and Actions
                locals,
                actions;
            
            // Initialization methods
            me._initLocals = function() {
            	locals = {};
            	return me;
            }
            
            me._initActions = function() {
            	actions = {};
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