(function(){
  var app = angular.module('rift-generation-controller',[]);

	// Controllers
	app.controller('riftGenerationController',function(){
		//this.results = result;
        var self = this;
        this.test = myText;
		this.results = [];
		this.generateResults = function(numResults){};
		this.generateResult = function(){};
		this.submit = function(){
			console.log("Loading");
			$.get('/js/srgm/json/rift-category.json', function(data) {
				console.log(data);
				$.each(data, function(k, v){
					self.results.push(k +' = ' + v);
                    console.log("Results = [" + self.results + "]");
				});
			});

            $scope.apply();
		};
	});

	// Directives
	app.directive("riftGeneration", function() {
		return {
			restrict: 'E',
			//template: "<h1>rift generation</h1>"
			templateUrl: "../../html/rift-generation.html"
		};
	});

	// Globals

	var myText = "TEST VALUE";
	




})();
