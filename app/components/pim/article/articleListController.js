/**
 * Created by Juergen on 11.04.2016.
 */

( function()
{
  angular.module( 'AngularPim' ) .controller( 'articleListController', ArticleListController );

  ArticleListController.$inject = [ '$translate' ];

  function ArticleListController( $translate )
  {
    var that = this;
  }
})();