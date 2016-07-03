angular.module('biApp').directive('editableTextField', [
 function() {
	
	return {
		templateUrl: 'directives/editableTextField/editableTextField-template.html',
		scope: {
			textdata : '='
		},
		link: function(scope){
			
			 // Self Reference
            var me = this,
            // Locals and Actions
                locals,
                actions;
            
            //Actual Implementation here
            function focus () {
            	locals.focused = true;
            	scope.$apply;
            }
            
            function unfocus() {
            	locals.focused=false;
            }
            
            function isFocused(){
            	return locals.focused;
            }
            
            // Initialization methods
            me._initLocals = function() {
            	locals = {
            			focused: false
            	};
            	
            	return me;
            }
            
            me._initActions = function() {
            	actions = {
            			"focus" : focus,
            			"isFocused" : isFocused,
            			"unfocus": unfocus
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