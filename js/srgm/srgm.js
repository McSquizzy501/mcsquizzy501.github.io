(function() {
  var app = angular.module('SRGM', []);

  app.controller('NavBarController', function() {
    this.navToggle = true;
    this.dropDown1 = false;
    this.dropDown2 = false;
  });

  app.controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(setTab) {
      this.tab = setTab;
    };

    this.isActive = function(checkTab) {
      return this.tab == checkTab;
    };

  });

  app.directive('riftGeneration', function() {
    return {
      restrict: 'E',
      template: "<h1>This is the Rift Generation section</h1>"
    };
  });
  
  app.directive('riftGeneration', function() {
    return {
      restrict: 'E',
      template: "<h1>This is the Rift Generation section</h1>"
    };
  });

})();