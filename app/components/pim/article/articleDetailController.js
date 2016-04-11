/**
 * Created by Juergen on 11.04.2016.
 */

( function()
{
  angular.module( 'AngularPim' ) .controller( 'articleDetailController', ArticleDetailController );

  ArticleDetailController.$inject = [ '$translate' ];

  function ArticleDetailController( $translate )
  {
    var that = this;
  }
})();