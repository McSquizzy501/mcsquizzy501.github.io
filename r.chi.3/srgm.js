function executeFunctionByName(functionName, context /*, args */) {
  var args = [].slice.call(arguments).splice(2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(context, args);
}

var srGM = srGM || {};

srGM.util = srGM.util || {};
srGM.data = srGM.data || {};

srGM.data.leyLineCharacteristics = [
  ['Tiny', '200ft', '50ft', '1000ft'],
  ['Small', '200ft', '50ft', '1000ft'],
  ['Medium', '200ft', '50ft', '1000ft'],
  ['Large', '200ft', '50ft', '1000ft'],
  ['Very Large', '200ft', '50ft', '1000ft'],
  ['Huge', '200ft', '50ft', '1000ft'],
  ['Gargantuan', '200ft', '50ft', '1000ft'],
  ['Colossal', '200ft', '50ft', '1000ft']
];

srGM.data.stormMagicCharacteristics = [
  //Name, effect
  ["Negation", "PPE is spent, but nothing happens as the storm consumes the effect"],
  ["Negation", "PPE is spent, but nothing happens as the storm consumes the effect"],
  ["Surge", "Spell range is doubled, and so is any damage or other (numerical) effect.<br/>Duration, however, remains the same. The magic is somewhat uncontrollable,<br/> however, so the caster can only use the maxium possible effect."],
  ["Diminish", "Spell range is halved, and so is any damage or other numerical effect.<br/>Duration remains unaffected."],
  ["Wild", "The caster uses a completely different spell or power than intended, as selected<br/>by the GM. This could even be a power the caster normally cannot use."],
  ["Explosive", "The caster is automatically shaken and must make a Vigor check to<br/>avoid a Wound as the magic erupts in their face. The intended effect does not happen,<br/> but the PPE is still spent."],
];

srGM.data.stormCharacteristics = [
  //Name, Description, Mechanics, Function*
  ["Ley Lightning", "Blue-white bolts of energy fly forth from the storm, targeting everyone who uses PPE or is carrying a magical item or piece of Techno-Wizard gear. The bolts strike unerringly and do 2d6 Mega Damage. Anyone struck who has any kind of concealing or illusory magic active loses the effect instantly; this includes concealment, disguise, and invisibility.", null],
  ["Air Lift", "Everyone and everything (vehicles included) in the group is lifted off the ground about 10 feet into the air, surrounded by even more intense crackling blue-white energy. The winds of the ley line storm carry everything along the ley line (at about 30–40 mph) for 7–10 minutes before dropping the whole group back to the ground. Only mechanically powered flight can escape this effect. Everything that hits the ground at the end takes 5d6 damage from velocity and impact.", null],
  ["Rolling Thunder", "A black, roiling cloud bursts along the ley line at about 60mph. As it passes, everyone within it is drenched, knocked prone, and Shaken by tremendous thunderclaps.", null],
  ["Euphoria", "A wave of joy and fearlessness grips everyone for 1d6+4 minutes. Some act drunk, others as though on very good pain medication, and all minor diseases, poisons, and Fatigue disappear. Anyone injured heals one wound. Combat between even the bitterest of enemies ceases while the euphoria is in effect; it takes a Smarts check at −2 for anyone to realize they should get away from enemies before the good feelings go away.", null],
  ["Alien Interdimensional Effluvia", "Along with actual rain, strange slugs, larvae, unattached tentacles, oozing slime, or any number of other foul, slimy, disturbing things rain out of the sky, covering the area (and anyone in it). Living things continue to wriggle and writhe, the stench embeds itself into clothing and belongings for weeks, and the entire experience is horrifying, creepy, and miserable. You might even require Vigor checks from the characters for them to avoid losing their lunch.", null],
  ["Dimensional Flux", "In an instant, the entire group and all of their belongings disappear into a featureless, wispy, white space, almost like appearing in the heart of a cloud. Distant lights flash far away, but there’s no storm, and no terrain features to navigate by. After what seems like a few minutes, the group reappears in the exact spot they left, but many hours have passed and the storm is long over.", null],
  ["Massive Ley Lightning Bolt", "A huge bolt of energy strikes the entire area, inflicting 3d6 Mega Damage. Anyone who uses PPE or carries magic gear suffers an extra d6, and 2d6 PPE is instantly drained from both characters and devices.", null],
  ["A Rift Opens", "If there’s a nexus nearby, it opens there, but it can also open right on the ley line.", "srGM.util.genRift"],
  ["A Rift Opens", "If there’s a nexus nearby, it opens there, but it can also open right on the ley line.", "srGM.util.genRift"],
  ["A Rift Opens", "If there’s a nexus nearby, it opens there, but it can also open right on the ley line.", "srGM.util.genRift"],
];

srGM.data.LeyLine = function(s, w, h, l, n) {
  this.size = s;
  this.width = w;
  this.height = h;
  this.length = l;
  this.nexus = n;
  this.storm = null;
  this.rift = null;
}

srGM.data.Storm = function() {
  this.mag_char = "";
  this.mag_eff = "";
  this.char = "";
  this.eff = "";
  this.desc = "";
  this.func = null;
}

srGM.data.Rift = function() {
	this.category = "";
  this.type = "";
  this.condition = "";
  this.size = "";
  
  this.duration = "";
  this.switch = "";
  
  this.deviation = "";
  this.era = "";
  this.magic = "";
  this.psi = "";
  
  
}

srGM.util.randBetween = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

srGM.util.genRift = function(context) {
	console.log("A rift was generated for:");
  console.log(context);
}

srGM.util.genLeyLine = function(override) {
  var nexus = (Math.max(srGM.util.randBetween(1, 6) - 5, 0) == true);
  if (override) {
    nexus = true;
  }
  var dataRoll = srGM.util.randBetween(1, 8) - 1;
  console.log("data roll: " + dataRoll);
  var data = srGM.data.leyLineCharacteristics[dataRoll];
  console.log(data);
  var line = new srGM.data.LeyLine(data[0], data[1], data[2], data[3], nexus);
  if (line.nexus) {
  
    var stormRoll = srGM.util.randBetween(0, 99);
    // 33% chance of a storm
    if (stormRoll < 33) {
      line.storm = new srGM.data.Storm();
      var stormMagCharRoll = srGM.util.randBetween(0, 5);
      var stormCharRoll = srGM.util.randBetween(0, 7);
      var magTraits = srGM.data.stormMagicCharacteristics[stormMagCharRoll];
      var traits = srGM.data.stormCharacteristics[stormCharRoll];
      console.log(magTraits);
      console.log(traits);
      
      line.storm.mag_char = magTraits[0];
      line.storm.mag_eff = magTraits[1];
      line.storm.char = traits[0];
      line.storm.desc = traits[1];
      line.storm.eff = traits[2];
      line.storm.func = traits[3];
      
      if (line.storm.func)
      {
      	executeFunctionByName(line.storm.func, window, line);
      }
      
    }
  }

  return line;
}

// Generate n ley line encounters
srGM.util.genLeyLineEncounters = function(n, override) {
  var lines = [];
  for (var i = 0; i < n; i++) {
    var ll = srGM.util.genLeyLine(override);
    lines.push(ll);
  }

  return lines;
}

srGM.printResults = function(id, n) {
  console.clear();
  console.log("printResults (" + id + ", " + n + ")");
  $("#" + id).empty();
  var lines = srGM.util.genLeyLineEncounters(n, true);
  console.log(lines);

  lines.forEach(function(ll) {
    console.log(ll);
    var html = "Encounter: A " + ll.size + " ley line, " + ll.width + " wide, " + ll.height + " tall, and " + ll.length + " long.";
    if (ll.nexus) {
      html = html + "<br/>It is part of a nexus.";
    }
    html = html + "<br/><br/>"

    console.log(html);

    $("#" + id).append(html);
  });
}

$(document).ready(function() {

  $("#numResults").spinner({
    min: 0
  });
  $("#btnResults").button();

  $("#btnResults").click(function() {
    var spinner = $("#numResults");
    var val = spinner.val();
    srGM.printResults("content", val);
  });
});
