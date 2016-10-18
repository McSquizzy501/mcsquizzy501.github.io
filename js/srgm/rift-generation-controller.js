(function(){
  var app = angular.module('rift-generation-controller',[]);

	// Controllers
	app.controller('riftGenerationController',['$http', function($http){
		//this.results = result;
        var self = this;
		
		this.inputNumResults = 10;
        	this.test = myText;
		this.results = [];		
	
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
			console.log(response["data"]);			
			self.initial_tables = response["data"]["tables"];
			
			console.log(self.initial_tables);
			
		});
		
		this.loadJson('/js/srgm/json/rift-tables.json', function(response){
			console.log(response);
			console.log(response["data"]);			
			self.tables = response["data"];
			
			console.log(self.tables);
			
		});
		
		this.generateResults = function(numResults){			
			console.log("Generating "+ numResults + " results");
			for(var i = 0; i < this.inputNumResults; i++)
			{
				console.log("Generating");
				this.generateResult();
			}
			
		};
		
		
		this.generateResult = function(){
			console.log(self.initial_tables);
			var len = self.initial_tables.length;
			console.log("There are " + len + " initial tables;")
			for(var i = 0; i < this.initial_tables.length; i++)
			{
				var key = this.initial_tables[i];
				console.log("key = " + key);
				console.log(self.tables);
				console.log(self.tables[key]);
				this.processTable(self.tables[key]);
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
			var table = entry["table"];
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
