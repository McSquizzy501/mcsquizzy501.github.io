(function(){
  var app = angular.module('rift-generation-controller',[]);

	// Controllers
	app.controller('riftGenerationController',function(){
		//this.results = result;
		this.results = [];
		this.generateResults = function(numResults){};
		this.generateResult = function(){};
		this.submit = function(){
			alert("Loading");
			$.get('./json/rift-category.json', function(data) {
				alert(data);
				$.each(data, function(k, v){
					results.push(k +' = ' + v + '<br>');
				});
			});
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

	//var myText = ['123 abc'];
	




})();
