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
  function SideNavController($mdSidenav) {

    var vm = this;

    vm.links = ["Dashboard"];
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

}());