angular.module('biApp').directive('directiveName', ["someService", "$q",
 function(someService) {
	
	return {
		templateUrl: 'insert the path to html doc that maps this directive',
		scope: {
			passedData : '=' //This is where data that is passed in from html
				//ex. <directive passedDate="actions.something()"></directive>
		},
		link: function(scope){
			
			 // Self Reference
            var me = this,
            // Locals and Actions
                locals,
                actions;
            
            //Actual Implementation here
            function usefulFunction () {}
            
            // Initialization methods
            me._initLocals = function() {
            	locals = {
            			data : []
            	};
            	
         // This is where one calls services to load in initial data
        		locals.dataLoading = true;
        		$q.all({
        			data : someService.getData()
        		}).then(function(results) {
        			locals.data = results.data;
        			locals.dataLoading = false;
        		});
        		
        		
            	return me;
            }
            
            me._initActions = function() {
            	actions = {
            			"usefulFunction" : usefulFunction
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