(function(){
  var app = angular.module('rift-generation-controller',[]);
  
	app.controller('riftGenerationController',function(){
		//this.results = result;
		this.results = myText;
		this.generateResults = function(numResults){};
		this.generateResult = function(){};	
	});

	var myText = [];
	
	$.get('/js/srgm/json/rift-category.json', function(data) {
		alert(data);
		$.each(data, function(k, v){
			myText.push(k +' = ' + v + '<br>');
		});
	});
})();
