(function(){
  var app = angular.module('rift-generation-module',[]);
  
  app.controller('riftGenerationController',function(){
		//this.results = result;
		this.text = "";
	
		
	});
    
    this.generateResults = function(numResults){};
    this.generateResult = function(){};
    
  });
	
	var myText = '';
	
  $.get('json/rift-category.json', function(data) {
	  $.each(data, function(k, v){
		myText = myText + k +' = ' + v + '<br>';
  });
  
})();
