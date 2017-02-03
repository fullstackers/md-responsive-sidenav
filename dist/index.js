(function () {
  "use strict";

  angular
    .module("md-responsive-sidenav", [
      "md-responsive-sidenav-templates",
      "ngAnimate",
      "ngMaterial"
    ]);
}());
;(function () {
  "use strict";

  /**
   * @ngdoc controller
   * @name md-responsive-sidenav.controller:AppController
   * @description
   * AppController
   */
  angular
    .module("md-responsive-sidenav")
    .controller("SideNavController", SideNavController);

  /* @ngInject */
  function SideNavController($mdSidenav) {

    var vm = this;

    vm.authenicated = true;

    vm.openNav = openNav;
    vm.closeNav = closeNav;
    vm.signOut = signOut;
    vm.signIn = signIn;

    function openNav() {
      $mdSidenav("left").toggle();
    }

    function closeNav() {
      $mdSidenav("left").close();
    }

    function signOut() {
      vm.authenicated = false;
    }

    function signIn() {
      vm.authenicated = true;
    }

  }

}());;(function () {
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
;angular.module('md-responsive-sidenav-templates', ['../app/demo/side-template.html', '../app/directive/responsive-sidenav/responsive-sidenav.html']);

angular.module("../app/demo/side-template.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../app/demo/side-template.html",
    "<md-menu-content><md-menu-item ng-repeat=\"link in ['a', 'b', 'c']\"><md-button class=\"md-secondary md-raised\" ui-sref=\"{{link|lowercase}}\" ng-click=\"vm.closeNav()\">{{link}}</md-button></md-menu-item></md-menu-content>");
}]);

angular.module("../app/directive/responsive-sidenav/responsive-sidenav.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("../app/directive/responsive-sidenav/responsive-sidenav.html",
    "<div layout=\"column\" class=\"responsive-sidenav\"><md-toolbar><div class=\"md-toolbar-tools\"><md-button class=\"md-icon-button hide-gt-sm\" aria-label=\"Navigation\" ng-click=\"vm.openNav()\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></md-button><span flex></span><h1>{{title}}</h1><span flex></span><md-button class=\"md-icon-button show-sm\" aria-label=\"Sign Out\" ng-click=\"vm.signOut()\"><i class=\"fa fa-sign-out\"></i></md-button></div></md-toolbar><section layout=\"row\" flex><md-sidenav class=\"md-sidenav-left\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-sm')\"><md-content><md-toolbar hide-gt-sm><md-button ng-click=\"vm.closeNav()\">Close</md-button></md-toolbar><div ng-include src=\"sideTemplate\"></div></md-content></md-sidenav><md-content flex><div class=\"ui-view\"></div></md-content></section></div>");
}]);
