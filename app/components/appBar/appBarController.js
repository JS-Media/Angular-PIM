/**
 * Created by Juergen on 03.04.2016.
 */

( function()
{
  angular.module( 'AngularPim' ).controller( 'appBarController', AppBarController );

  AppBarController.$inject = ['$translate', '$mdSidenav'];

  function AppBarController( $translate, $mdSidenav )
  {
    var that               = this;
    this.toggleMainSideMenu = toggleMainSideMenu;
    
    function toggleMainSideMenu()
    {
      $mdSidenav( 'main-menu' ).toggle();
    }
  }
})();