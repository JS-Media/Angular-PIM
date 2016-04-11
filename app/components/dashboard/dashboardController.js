/**
 * Created by Juergen on 09.04.2016.
 */

( function()
{
  angular.module( 'AngularPim' ) .controller( 'dashboardController', DashboardController );

  DashboardController.$inject = [ '$translate' ];

  function DashboardController( $translate )
  {
    var that = this;
  }
})();