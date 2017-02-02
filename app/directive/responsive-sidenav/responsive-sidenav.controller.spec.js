// xdescribe("Product Overview Controller", function () {
//   "use strict";
//
//   var controller, $rootScope, $scope, $state, $stateParams, DataService, deferred, product;
//
//   beforeEach(module("md-responsive-sidenav"));
//   beforeEach(inject(function (_$controller_, _$rootScope_, $q) {
//     $rootScope = _$rootScope_;
//     $scope = $rootScope.$new();
//     $scope.product = {
//       id: 1
//     };
//     product = {
//       id: 1
//     };
//
//     deferred = $q.defer();
//     DataService = jasmine.createSpyObj("DataService", ["getCodes"]);
//     DataService.getCodes.and.returnValue(deferred.promise);
//     $state = jasmine.createSpyObj("$state", ["go", "includes"]);
//     $state.current = {name: "test"};
//     $stateParams = {
//       ioc: "test"
//     };
//
//     controller = _$controller_("ProductOverviewController as vm", {
//         $scope: $scope,
//         $state: $state,
//         $stateParams: $stateParams,
//         DataService: DataService
//       },
//       {product: product}
//     );
//
//
//   }));
//
//   it("should create the controller", function () {
//     expect(controller).toBeDefined();
//   });
//
//
// });
