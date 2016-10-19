(function(){
	var app = angular.module('utilities');
	
	app.service('diceService', function(
		this.replaceInString = function(string){
			var match = /\[(\d+)?d(\d+)([*/]\d+)*([+-]\d+)*?\]$/.exec(dieSpec);
			if (!match) {
				throw "Invalid dice notation: " + dieSpec;
			}

			var howMany = (typeof match[1] == 'undefined') ? 1 : parseInt(match[1]);
			var dieSize = parseInt(match[2]);
			var modifiers = [];
			for(var i = 3; i < match.length; i++){
				if(typeof match[i] != 'undefined'))
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
			
			for( var i = 0; i < modifers.length; i++)
			{
				str = str+modifiers[i];
			}
			
			sum = eval(str);
		}
		this.parseDice = function(string){}
	));
})();
