(function()
{
  'use strict';

  angular.module( 'AngularPim', ['ngMaterial', 'pascalprecht.translate', 'ui.router'] );

  angular.module( 'AngularPim' ).config( config );

  config.$inject( '$stateProvider', '$urlRouterProvider', '$translateProvider', '$mdThemingProvider', '$httpProvider' );


  function config( $stateProvider, $urlRouterProvider, $translateProvider, $mdThemingProvider, $httpProvider )
  {
    // Theming
    $mdThemingProvider
      .theme( 'default' )
      .primaryPalette('blue')
      .accentPalette('red');

    // Uebersetzung hinzufügen
    $translateProvider
      .translations( 'de_DE', translation_de_DE )
      .preferredLanguage( 'de_DE' )
      .useSanitizeValueStrategy('escaped');
  }
})();

/*
 "use strict";

 ( function()
 {
 angular.module('industry4App', [ 'ngMaterial', 'ngCordova', 'pascalprecht.translate', 'ui.router' ] );


 angular.module('industry4App').run( run );

 run.$inject = [ '$rootScope', '$cordovaDevice', '$cordovaStatusbar'];

 function run( $rootScope, $cordovaDevice, $cordovaStatusbar )
 {
 document.addEventListener( 'deviceready', function ()
 {
 $cordovaStatusbar.overlaysWebView( false ); // Always Show Status Bar
 $cordovaStatusbar.styleHex( '#E53935' ); // Status Bar With Red Color, Using Angular-Material Style
 window.plugins.orientationLock.lock( 'portrait' );
 },
 false );
 }


 angular.module('industry4App').config( config );

 config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider', '$mdThemingProvider', '$httpProvider'];

 function config( $stateProvider, $urlRouterProvider, $translateProvider, $mdThemingProvider, $httpProvider )
 {
 // Theming
 $mdThemingProvider
 .theme( 'default' )
 .primaryPalette('blue')
 .accentPalette('red');

 // Uebersetzung hinzufügen
 $translateProvider
 .translations( 'de_DE', translation_de_DE )
 .preferredLanguage( 'de_DE' )
 .useSanitizeValueStrategy('escaped');


 // Default-State (wird beim Start der App automatisch gewählt)
 $urlRouterProvider.otherwise ('/tabs/orderassign');

 $stateProvider.state( 'tabs',
 {
 url: '/tabs',
 abstract: true,
 views:
 {
 'mainContent':
 {
 templateUrl: 'components/tabs/tabs.html',
 controller: 'tabsController as controller'
 }
 }
 });

 $stateProvider.state( 'tabs.orderassign',
 {
 url: '/orderassign',
 views:
 {
 'tabOrderassign':
 {
 templateUrl: 'components/tabs/orderAssignment/orderList.html',
 controller: 'orderListController as controller'
 }
 }
 });

 $stateProvider.state( 'tabs.orderexecute',
 {
 url: '/orderexecute',
 views:
 {
 'tabOrderexecute':
 {
 templateUrl: 'components/tabs/orderExecution/orderExecuteList.html',
 controller: 'orderExecuteListController as controller'
 },
 'buttonContent@':
 {
 templateUrl: 'components/tabs/orderExecution/orderExecuteListButtonsBar.html',
 controller: 'orderExecuteListButtonsBarController as controller'
 }
 }
 });

 $stateProvider.state( 'orderassigndetails',
 {
 url: '/orderassigndetails/:orderNo',
 views:
 {
 'mainContent':
 {
 templateUrl: 'components/orderAssignmentDetails/orderAssignmentDetails.html',
 controller: 'orderAssignmentDetailsController as controller'
 },
 'buttonContent':
 {
 templateUrl: 'components/orderAssignmentDetails/orderAssignmentDetailsButtonsBar.html',
 controller: 'orderAssignmentDetailsController as buttonContainerController'
 }
 },
 resolve:
 {
 orderNo: [ '$stateParams', function( $stateParams )
 {
 return $stateParams.orderNo;
 }]
 }
 });

 $stateProvider.state( 'orderexecutedetails',
 {
 url: '/orderexecutedetails/:orderNo',
 views:
 {
 'mainContent':
 {
 templateUrl: 'components/orderExecuteDetails/orderExecuteDetails.html',
 controller: 'orderExecuteDetailsController as controller'
 },
 'buttonContent':
 {
 templateUrl: 'components/orderExecuteDetails/orderExecuteDetailsButtonsBar.html',
 controller: 'orderExecuteDetailsButtonsBarController as controller'
 }
 },
 resolve:
 {
 orderNo : [ '$stateParams', function( $stateParams )
 {
 return $stateParams.orderNo;
 }]
 }
 });

 $stateProvider.state( 'orderreport',
 {
 url: '/orderreport/:orderNo',
 views:
 {
 'mainContent':
 {
 templateUrl: 'components/orderReport/orderReport.html',
 controller: 'orderReportController as controller'
 }
 },
 resolve:
 {
 orderNo : [ '$stateParams', function( $stateParams )
 {
 return $stateParams.orderNo;
 }]
 }
 });
 }
 })();
 */