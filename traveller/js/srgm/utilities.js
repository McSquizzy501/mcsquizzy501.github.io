(function(){
  var app = angular.module('utilities',[]);
	
  app.service('diceService', function(){
    
    this.version = '0.0.1';
    
    this.soundOff = function(){
      console.log("[diceService] " + this.version);
    };
    
    this.replaceInString = function(dieSpec){
      var match = /[\w\s]*\[(\d+)?d(\d+)([*/]\d+)?([+-]\d+)?\][\w\s]*$/.exec(dieSpec);
      if (!match) {
        return dieSpec;
      }

      var howMany = (typeof match[1] == 'undefined') ? 1 : parseInt(match[1]);
      var dieSize = parseInt(match[2]);
      var modifiers = [];
      for(var i = 3; i < match.length; i++){
        if(typeof match[i] != 'undefined')
        {
          modifiers.push(match[i]);
        }
      }
			
      var sum = 0;
			
      for( var i = 0; i < howMany; i++)
      {
        sum += Math.floor((Math.random() * dieSize) + 1);
      }
			
      var str = ""+sum;

      for( var i = 0; i < modifiers.length; i++)
      {
        str = str+modifiers[i];
      }
      
      var val = eval(str);

      return dieSpec.replace(/\[(\d+)?d(\d+)([*/]\d+)?([+-]\d+)?\]/, val);
    }
		
  });
})();
