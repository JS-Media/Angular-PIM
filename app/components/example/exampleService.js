( function()
{
  angular.module('AngularPim').service( 'serverCommunicationService', ServerCommunicationService );

  ServerCommunicationService.$inject = ['$filter', '$http', 'appConstants', '$cordovaNetwork', '$rootScope', '$q', 'resourceLocationData'];


  function ServerCommunicationService(   $filter,   $http,   appConstants,   $cordovaNetwork,   $rootScope,   $q,   resourceLocationData )
  {
    this.performPost = performPost;
    this.performGet = performGet;
    this.performDelete = performDelete;

    /**
     * @param {string} pResourceLocator Locator der aufgerufenen Resource
     * @param {string} pMethodName Methodenname der Action auf dem Server
     * @param {object} pParameters JSON-Objekt mit den Parametern
     *
     * @returns {object} Promise
     */
    function performPost( pResourceLocator, pMethodName, pParameters )
    {
      var deferred = $q.defer();
      var url = resourceLocationData.BASE_URL;

      if( $cordovaNetwork.isOffline() )
      {
        return deferred.reject( appConstants.PROMISE_ERROR_SERVERCOMMUNICATION_NO_CONNECTION ).promise;
      }
      if( !pResourceLocator )
      {
        return deferred.reject( appConstants.PROMISE_ERROR_SERVERCOMMUNICATION_NO_RESOURCE_LOCATION ).promise;
      }
      if( !pMethodName )
      {
        return deferred.reject( appConstants.PROMISE_ERROR_SERVERCOMMUNICATION_NO_METHOD_NAME ).promise;
      }
      url = url + pResourceLocator + '/' + pMethodName;

      performGet( pResourceLocator, null, pMethodName, null )
        .then( function( pResult )
        {
          postRequest( pResult );
        });

      return deferred.promise;


      function postRequest( pResult )
      {
        var jsonData = '';
        if(  typeof pParameters === 'object' )
        {
          jsonData = angular.toJson( pParameters );
        }

        $http(
          {
            method: 'POST',
            url: url,
            headers:
            {
              'Content-Type': 'application/atom+xml',
              'X-CSRF-Token': pResult.headers()['x-csrf-token']
            },
            data: jsonData,
            transformResponse: transformResponse
          })
          .then( function( pResult )
          {
            deferred.resolve( pResult.data );
          }, function( pError )
          {
            deferred.reject( pError );
            alert( 'Fehler:' + pError.status );
          });
      }
    }

    /**
     * @param {string} pResourceLocator Locator der aufgerufenen Resource
     * @param {array} [pParameterFunctions] Assoziatives Array/Map mit Key: {string} functionName, Value: {object} parameters
     * @param {string} [pMethodName]
     * @param {object} pParameters Objekt mit den Parametern
     *
     * @returns {object} Promise
     */
    function performGet( pResourceLocator, pParameterFunctions, pMethodName, pParameters )
    {
      var deferred = $q.defer();
      var url = resourceLocationData.BASE_URL;

      if( $cordovaNetwork.isOffline() )
      {
        return deferred.reject( appConstants.PROMISE_ERROR_SERVERCOMMUNICATION_NO_CONNECTION ).promise;
      }
      if( !pResourceLocator )
      {
        return deferred.reject( appConstants.PROMISE_ERROR_SERVERCOMMUNICATION_NO_RESOURCE_LOCATION ).promise;
      }
      url = url + pResourceLocator;

      url = extendUrl( url, pParameterFunctions, pMethodName );

      var parameters = {
        $format: 'json'
      };

      if( angular.isObject( pParameters ) )
      {
        parameters = angular.extend( parameters, pParameters );
      }

      $http(
        {
          method : 'GET',
          url : url,
          params : parameters,
          headers :
          {
            'X-Requested-With' : 'XMLHttpRequest',
            'Content-Type' : 'application/atom+xml',
            'DataServiceVersion': '2.0',
            'X-CSRF-Token': 'Fetch'
          },
          transformResponse: transformResponse
        })
        .then( function( pResult )
        {
//        appStructureModel.csrfToken = pResult.headers()['x-csrf-token'];
          deferred.resolve( pResult );
        }, function( pError )
        {
          alert( 'Fehler:' + pError.status );
          deferred.reject( pError );
        });
      return deferred.promise;
    }

    function performDelete()
    {

    }

    var JSON_PROTECTION_PREFIX = /^\)\]\}',?\n/;

    /**
     * Behandelt JSON-Response so wie AngularJS aber mit Exception, falls Response nicht parsebar ist
     */
    function transformResponse( data, headers )
    {
      if( angular.isString( data ) )
      {
        // Strip json vulnerability protection prefix and trim whitespace
        var tempData = data.replace( JSON_PROTECTION_PREFIX, '').trim();

        if (tempData)
        {
          var contentType = headers('Content-Type');

          if( (contentType && ( contentType.indexOf( 'application/json' ) === 0 ) ) || isJsonLike( tempData ) )
          {
            try
            {
              data = JSON.parse( tempData );
            }
            catch( e )
            {
              throw appConstants.JSON_ERROR_PARSE_FAIL;
            }
          }
        }
      }

      return data;
    }

    function extendUrl( pUrl, pParameterFunctions, pMethodName )
    {
      var url = pUrl;
      if( pParameterFunctions )
      {
        for( var functionName in pParameterFunctions )
        {
          var parameters = pParameterFunctions[functionName];
          url = url + '/' + functionName + '(';
          for( var property in parameters )
          {
            if( !parameters.hasOwnProperty( property ) )
            {
              continue;
            }

            url = url + property + "='" + parameters[property] + "',";
          }
          url = url + ')';
        }
      }

      if( pMethodName )
      {
        url = url + '/' + pMethodName;
      }

      return url;
    }

    var JSON_ENDS = { '[': /]$/, '{': /}$/ };
    var JSON_START = /^\[|^\{(?!\{)/;

    /**
     * Hilfsfunktion aus AngularJS
     */
    function isJsonLike(str)
    {
      var jsonStart = str.match(JSON_START);
      return jsonStart && JSON_ENDS[jsonStart[0]].test(str);
    }

  }
})();
