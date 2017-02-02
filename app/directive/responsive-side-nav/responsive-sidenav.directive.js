(function () {
  "use strict";

  angular
    .module("md-responsive-sidenav")
    .directive("responsiveSideNav", ResponsiveSideNav);

  /* @ngInject */
  function ResponsiveSideNav() {
    return {
      bindToController: true,
      controller: "SideNavController",
      controllerAs: "vm",
      replace: true,
      restrict: "E",
      templateUrl: "../app/directive/responsive-side-nav/responsive-side-nav.html"
    };
  }

}());
