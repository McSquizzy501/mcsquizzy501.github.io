(function(){
  var app = angular.module('travel-controller',['utilities']);

  // Controllers
  app.controller('travelController',['$http', 'diceService', function($http, diceService){
    //this.results = result;
    var self = this;
    diceService.soundOff();
    this.inputDistance = 0;
    this.inputTopSpeed = 0;
    this.inputTravelModes = [{id: '1', name: 'Ground - Walk'}, {id: '2', name: 'Ground - Wheeled'}, {id: '3', name: 'Hover'}, {id: '4', name: 'Flight'}];
    this.inputMode = '';
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
    
    this.loadJson('/js/srgm/json/rift-init-tables.json', function(response){
      // console.log(response);
      // console.log(response["data"]);      
      self.initial_tables = response["data"]["tables"];
      
      // console.log(self.initial_tables);
      
    });
    
    this.loadJson('/js/srgm/json/rift-tables.json', function(response){
      // console.log(response);
      // console.log(response["data"]);      
      self.tables = response["data"];
      
      // console.log(self.tables);
      
    });
    
    this.generateResults = function(numResults){      
      console.log("Generating "+ numResults + " results");
      
      for(var i = 0; i < this.inputNumResults; i++)
      {
        console.log("Generating");
        var rift = this.generateResult(i);
        console.log(rift);
        self.rifts.push(rift);
      }
      
    };
    
    
    this.generateResult = function(id){
      // console.log(self.initial_tables);
      var rift = {};
      rift["id"] = id;
      rift["other factors"] = [];
      // var len = self.initial_tables.length;
      // console.log("There are " + len + " initial tables;")
      for(var i = 0; i < self.initial_tables.length; i++)
      {  
        var key = self.initial_tables[i];
        //console.log("key = " + key);
        // console.log(self.tables);
        // console.log(self.tables[key]);
        this.processTable(key, rift);
        //console.log(rift);
      }
      
      return rift;
    };
    
    this.submit = function(){
      this.rifts = [];
      this.generateResults(this.inputNumResults);
    };
    
    this.processTable = function(key, rift)
    {
      //Entry is an object with dice and table attributes
      //var obj = tables[entry]
      console.log("processTable["+key+"]");
      var entry = self.tables[key];
      var dieSide = entry["dice"];
      var roll = Math.floor((Math.random() * dieSide) + 1);
      var table = entry["table"];
      var found = false;
      var index = 0;
      var keys = Object.keys(table);
      var txt = "";
      console.log(keys);
      console.log(table);
      console.log("Roll: " + roll);
      
      while(!found && index < keys.length)
      {
        var k = keys[index];
        if(roll > k)
        {
          index++;
        }
        else
        {
          found = true;
          var res = table[k];
          var txt = "";
          if(res.constructor == Array){
            txt = res[0];
            for(var i = 1; i < res.length; i++)
            {
              this.processTable(res[i], rift);
            }
          } else {
            txt = res;
          }
          
          //console.log(key+" in rift? "+(key in rift));
          
          if( !(key in rift) )
          {
            rift[key] = diceService.replaceInString(txt);
          }
          else
          {
            if (rift[key].constructor == Array)
            {
              rift[key].push(diceService.replaceInString(txt));
            }
            else
            {
              var tmp = rift[key];
              rift[key] = [];
              rift[key].push(tmp);
              rift[key].push(txt);
            }
          }
          
          //console.log("Result["+key+"]: "+table[key]);
        }
      }
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
  app.directive("riftTemplate", function(){
    return {
      restrict: 'E',
      templateUrl: "../../html/rift-template.html"
    };
  });

  // Globals

  var myText = "TEST VALUE";
  
  


})();
