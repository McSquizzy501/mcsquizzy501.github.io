(function(){
  var app = angular.module('rift-generation-controller',[]);

	// Controllers
	app.controller('riftGenerationController',['$http', function($http){
		//this.results = result;
        var self = this;
		
		this.inputNumResults = 10;
        	this.test = myText;
		this.results = [];
		
		this.tables = {};
		this.initial_tables = [];
		
	
		this.loadJson = function(url, callback){
			
			$http.get(url).then(
				function (response){
					callback(response);
					console.log("Succesfully loaded " + url);
				}, 
				function (res){
					console.log("Failed to load " + url);
				}
			);			
		};
		
		this.loadJson('/js/srgm/json/rift-init-tables.json', function(response){
			console.log(response);
			console.log(JSON.stringify(response));
			console.log(Object.keys(response);
			response = JSON.parse(JSON.stringify(response));
			for(var key in Object.keys(response))
			{
				console.log(key + ": " + response[key]);
			}
		});
		
		this.loadJson('/js/srgm/json/rift-tables.json', function(data){
			console.log("loadJson " + data);
			for(var key in Object.keys(data))
			{
				console.log(key + ": " + data[key]);
			}
		});
		
		this.generateResults = function(numResults){			
			
			
		};
		
		
		this.generateResult = function(){
			for(var i = 0; i < this.initial_tables.length; i++)
			{
				this.processTable(this.tables[this.initial_tables[i]]);
			}
		};
		
		this.submit = function(){
			this.generateResults(this.inputNumResults);
		};
		
		this.processTable = function(entry)
		{
			//Entry is an object with dice and table attributes
			//var obj = tables[entry]
			var dieSide = entry["dice"];
			var roll = Math.floor((Math.random() * dieSide) + 1);
			var table = this.entry["table"];
			var found = false;
			var index = 0;
			var key = "";
			var keys = Object.keys(table);
			
			console.log(keys);
			
			/*while(!found)
			{
				key = Object.
			}*/
		};
		
		// this.getMap(arry)
		// {
			// var map = new Map();
			// for(int i = 0; i < arry.length; i++)
			// {
				// var obj = arry[i];
				// map.set(Object.keys(obj)[0], obj[Object.keys(obj)[0]]);
			// }
			// return map;
		// }

		
	}]);

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
