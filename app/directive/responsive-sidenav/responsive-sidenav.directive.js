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
      scope: {
        closeEnable: "="
      },
      restrict: "E",
      templateUrl: "../app/directive/responsive-sidenav/responsive-sidenav.html",
      link: function (scope, element, attrs) {
        if (angular.isUndefined(attrs.sideTemplate)) {
          throw new Exception.ArgumentUndefinedException("Missing Side Template");
        }
        scope.title = attrs.title || "Home";
        scope.sideTemplate = attrs.sideTemplate;
      }
    };
  }

}());
