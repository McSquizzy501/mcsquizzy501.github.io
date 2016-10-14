(function(){
  var app = angular.module('rift-generation-controller',[]);

	// Controllers
	app.controller('riftGenerationController',function(){
		//this.results = result;
		this.results = myText;
		this.generateResults = function(numResults){};
		this.generateResult = function(){};	
	});

	// Directives
	app.directive('riftGeneration', function() {
		return {
			restrict: 'E',
			templateUrl: "../../html/rift-generation.html"
		};
	});

	// Globals

	var myText = [];
	
	$.get('/js/srgm/json/rift-category.json', function(data) {
		alert(data);
		$.each(data, function(k, v){
			myText.push(k +' = ' + v + '<br>');
		});
	});



})();
