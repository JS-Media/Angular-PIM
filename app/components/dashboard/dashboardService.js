/**
 * Created by Juergen on 09.04.2016.
 */

( function()
{
  angular.module( 'AngularPim' ).service( 'dashboardService', DashboardService );

  DashboardService.$inject = ['$filter', '$http', 'appConstants', '$cordovaNetwork', '$rootScope', '$q', 'resourceLocationData'];


  function DashboardService( $filter, $http, appConstants, $cordovaNetwork, $rootScope, $q, resourceLocationData )
  {

  }
})();