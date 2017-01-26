(function(){
  var app = angular.module('sector-generator-controller',['utilities']);

  // Controllers
  app.controller('sectorGeneratorController',['$http', 'diceService', function($http, diceService){
    //this.results = result;
    var self = this;
    diceService.soundOff();
    console.log(diceService.replaceInString("base: [1d6]"));
    console.log(diceService.replaceInString("addition: [1d6+1]"));
    console.log(diceService.replaceInString("subtraction: [1d6-1]"));
    console.log(diceService.replaceInString("multiplication: [1d6*1]"));
    console.log(diceService.replaceInString("division: [1d6/1]"));
    console.log(diceService.replaceInString("multadd: [1d6*2+1]"));
    this.inputNumResults = 10;
    this.rifts = [];    
  
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
    
    /* this.loadJson('/js/srgm/json/rift-init-tables.json', function(response){
      // console.log(response);
      // console.log(response["data"]);      
      self.initial_tables = response["data"]["tables"];
      
      // console.log(self.initial_tables);
      
    }); */
    
    /* this.loadJson('/js/srgm/json/rift-tables.json', function(response){
      // console.log(response);
      // console.log(response["data"]);      
      self.tables = response["data"];
      
      // console.log(self.tables);
      
    }); */
    
    

    
  }]);

  // Directives
  app.directive("riftGeneration", function() {
    return {
      restrict: 'E',
      //template: "<h1>rift generation</h1>"
      templateUrl: "../../html/rift-generation.html"
    };
  });
  app.directive("riftTemplate", function(){
    return {
      restrict: 'E',
      templateUrl: "../../html/rift-template.html"
    };
  });

  // Globals

  var myText = "TEST VALUE";
  
  


})();
