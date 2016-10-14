
(function(){
  var app = angular.module('navbar-controller',[]);
  app.controller('NavBarController', function() {
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
})();
