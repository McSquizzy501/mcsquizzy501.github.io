(function(){
  var app = angular.module('rift-generation-module',[]);
  
  app.controller('riftGenerationController',function(){
    this.results = result;
	this.text = "";
	
	$.each(results, function(k, v){
		text = text+k+' = ' + v + '<br>';
	});
    
    this.generateResults = function(numResults){};
    this.generateResult = function(){};
    
  });
  
  var result = $.parseJSON('{a : "x", b : "y", c : "z"}');
  
})();
