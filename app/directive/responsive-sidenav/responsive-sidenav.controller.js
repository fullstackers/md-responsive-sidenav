(function () {
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
  function SideNavController($mdSidenav, $scope) {

    var vm = this;

    vm.openNav = openNav;
    vm.closeNav = closeNav;
    vm.close = close;

    function openNav() {
      $mdSidenav("left").toggle();
    }

    function closeNav() {
      $mdSidenav("left").close();
    }

    function close() {
      $scope.$emit("$nav-close");
    }

  }

}());