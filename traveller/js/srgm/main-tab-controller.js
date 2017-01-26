
(function(){
  var app = angular.module('main-tab-controller',[]);
  app.controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(setTab) {
      this.tab = setTab;
    };

    this.isActive = function(checkTab) {
      return this.tab == checkTab;
    };

  });
})();
