( function()
{
  angular.module( 'AngularPim' ).controller( 'orderExecuteListButtonsBarController', OrderExecuteListButtonsBarController );

  OrderExecuteListButtonsBarController.$inject = [ '$scope', '$translate', 'orderService', '$mdToast', 'orderExecuteModelProvider' ];

  function OrderExecuteListButtonsBarController( $scope, $translate, orderService, $mdToast, orderExecuteModelProvider )
  {
    var that = this;

    this.orderExecuteModel = orderExecuteModelProvider.getOrderExecuteModel();
    this.readNfc = readNfc;
    this.showNfcButton = true;
    this.orderNumber = null;

    var timeout;

    function readNfc()
    {
      that.showNfcButton = false;
      nfc.addNdefListener(readTextRecord);

      var toast = $mdToast.simple().textContent('Bitte das Gerät an den NFC-Tag halten um den Auftrag auszulesen!').capsule( true );
      $mdToast.show( toast );


      timeout = setTimeout(function()
      {
        $mdToast.show($mdToast.simple().textContent(
          'Keinen NFC-Tag erkannt, bitte erneut versuchen').capsule(true));
        nfc.removeNdefListener(readTextRecord);
        that.showNfcButton = true;
      }, 10000);

    }

    function readTextRecord(nfcEvent)
    {
      var toast = $mdToast.simple().textContent('Fertigungsauftrag ausgelesen!').capsule( true );
      $mdToast.show( toast );

      var payload=nfcEvent.tag.ndefMessage[0]["payload"];

      that.orderNumber = ndef.textHelper.decodePayload(payload);

      that.showNfcButton = true;
      nfc.removeNdefListener(readTextRecord);
      clearTimeout(timeout);

      loadFaufDetails();
    }

    function loadFaufDetails()
    {
      orderService.getFaufDetailsFromSap( that.orderNumber )
                  .then( function( pResult )
                  {
                    that.orderExecuteModel.orderMap[ '' + that.orderNumber ] = pResult;
                    console.log( that.orderExecuteModel.orderMap );
                  }, function( pError )
                  {
                    console.log('Error' + pError);
                    that.showNfcButton = true;
                  });
    }
  }
})();