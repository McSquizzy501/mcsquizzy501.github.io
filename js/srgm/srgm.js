(function() {
  var app = angular.module('SRGM', ['utilities', 'main-tab-controller','navbar-controller', 'rift-generation-controller']);

  /*app.controller('NavBarController', function() {
    this.navToggle = true;
    this.dropDown1 = true;
    this.dropDown2 = true;
    this.dropDowns = [false, false];
    
    this.isDdOpen = function(dd) {
      return this.dropDowns[dd];
    };
    
    this.toggleDd = function(dd) {
      this.dropDowns[dd] = !this.dropDowns[dd];
    };
    
  });

  app.controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(setTab) {
      this.tab = setTab;
    };

    this.isActive = function(checkTab) {
      return this.tab == checkTab;
    };

  });*/

})();
