var translation_de_DE = (function() 
{
  var dict = {};
  var error = {};
  var format = {};
  var info = {};
  var text = {};
  
  // dict
  dict.all = 'Alle';
  dict.all_categories = 'Alle Kategorien';
  dict.art_no = 'Art.-Nr.';
  dict.art_number = 'Art.-Nummer';
  dict.article_no = 'Artikelnr.';
  dict.article_number = 'Artikelnummer';
  dict.article_description = 'Artikelbeschreibung';
  dict.articlesearch = 'Artikelsuche';
  dict.article_care = 'Artikelpflege';
  dict.attribute_care = 'Attributspflege';
  
  dict.back = 'Zurück';

  dict.cancel = 'Abbrechen';
  dict.category = 'Kategorie';
  dict.category_main = 'Hauptkategorie';
  dict.category_secondary = 'Nebenkategorie';
  dict.change = 'Ändern';
  dict.comment = 'Kommentar';
  dict.confirmation = 'Bestätigung';
  dict.country = 'Land';
  dict.create = 'Anlegen';
  dict.creationdate = 'Erstelldatum';
  dict.customer = 'Kunde';
  dict.customer_number = 'Kundennummer';
  
  dict.date = 'Datum';
  dict.detail_information= 'Detailinformationen';
  dict.description= 'Beschreibung';
  
  dict.error = 'Fehler';
  dict.ean = 'EAN';
  dict.erasure = 'Löschen';
  
  dict.filter = 'Filter';
  dict.filter_by = 'Filtern';
  dict.freigabe = 'Freigabe';
  dict.freigaben = 'Freigaben';
  dict.from = 'von';
  
  dict.gtc = 'AGB';

  dict.header_data = 'Kopfdaten';
  dict.house_number = 'Hausnummer';

  dict.imprint = 'Impressum';
  dict.informations = 'Informationen';

  dict.limit = 'Limit';
  dict.login = 'Anmelden';
  dict.logout = 'Abmelden';

  dict.manufacturer = 'Hersteller';
  dict.manufacturer_art_no = 'Hersteller-Art.-Nr.';
  dict.manufacturer_art_number = 'Hersteller-Art.-Nummer';
  dict.manufacturer_article_number = 'Herstellerartikelnummer';
  
  dict.name = 'Name';
  dict.news = 'News';
  dict.no = 'Nein';
  dict.number_placeholder = 'z. B. 12345678';
  dict.number_type = 'Nummerntyp';
  
  dict.objects = 'Objekte';
  dict.ok = 'OK';
  dict.or = 'oder';
  dict.optional = 'optional';

  dict.password = 'Passwort';
  dict.path = 'Pfad';
  dict.position = 'Position';
  dict.positions = 'Positionen';
  dict.privacy_policy = 'Datenschutzerklärung';
  dict.proceed = 'Fortfahren';

  dict.reject = 'Ablehnen';
  dict.rejected = 'Abgelehnt';
  dict.reset_filter = 'Zurücksetzen';
  
  dict.save = 'Speichern';
  dict.select = 'Auswählen';
  dict.selected = 'ausgewählt';
  dict.search = 'Suchen';
  dict.search_noun = 'Suche';
  dict.settings = 'Einstellungen';
  dict.shipped = 'Versendet';
  dict.stand = 'Stand';
  dict.status = 'Status';
  dict.street = 'Stasse';
  dict.sum = 'Summe';

  dict.update = 'Aktualisieren';
  dict.update_data = 'Daten aktualisieren';
  dict.update_selection_now = 'Auswahl jetzt aktualisieren';
  dict.username = 'Benutzername';
  
  dict.quantity = 'Menge';
  
  dict.yes = 'Ja';
  
  dict.zip_code = 'PLZ';
  
  
  // error
  error.commen_error_template = 'Es ist ein unbekannter Fehler aufgetreten. Bitte starten Sie die App neu und melden sich erneut an. Sollte der Fehler danach immer noch auftreten, wenden Sie sich bitte an den Support.';
  error.common_error_title = 'Unbekannter Fehler';

  error.enter_integer_value = 'Bitte geben Sie einen ganzzahligen Wert größer 0 ein.';
  
  error.forbidden_template = 'Sie sind nicht berechtigt diese Aktion auszuführen. Bitte melden Sie sich erneut an, um Ihre Berechtigung zu aktualisiern.';
  error.forbidden_title = 'Keine Berechtigung';

  error.http_timeout_template = 'Es konnte keine Verbindung zum Server hergestellt werden. Bitte stellen Sie Sicher, dass eine Verbindung mit dem Internet besteht. Sollten Sie eine Verbindung haben, dann probieren es bitte zu einem späteren Zeitpunkt';
  error.http_timeout_title = 'Server nicht erreichbar';
  
  error.invalid_login_data = 'Die von Ihnen eingegebenen Anmeldedaten sind nicht korrekt. Bitte korrigieren Sie Ihre Eingabe und versuchen Sie es erneut.';
  error.invalid_password = 'Das eingegebene Passwort ist nicht korrekt. Bitte versuchen Sie es erneut.';
  error.invalid_password_title = 'Passwort falsch';
  
  error.login_error_title = 'Anmeldung fehlgeschlagen';
  error.login_failed = 'Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
  
  error.no_password_entered = 'Bitte geben Sie ein Passwort ein.';
  error.no_selectable_orgelement_found_title = 'Org.-Elemente fehlen';
  error.no_selectable_orgelement_found_template = 'Für die Benutzung dieser App ist es erforderlich, mindestens einem Org.-Element zugeordnet zu sein, auf das bestellt werden kann. Bitte wenden Sie sich an den Support.';
  
  error.password_required_template = 'Sie müssen sich erst authentifizieren, ehe Sie fortfahren können.';
  error.password_required_title = 'Authentifizierung notwendig';
  
  error.search_noresult = 'Für den Suchbegriff <em>{{searchString}}</em> wurden keine Treffer gefunden.';
  error.search_title = 'Artikel-Suche';
  error.server_unavailable_template = 'Der Server steht aufgrund von Wartungsarbeiten zur Zeit nicht zur Verfügung. Bitte probieren Sie es später noch einmal.';
  error.server_unavailable_title = 'Server vorübergehend nicht verfügbar';
  error.servercommunication_no_connection_template = 'Sie haben keine Verbindung zum Internet. Zum Fortfahren stellen Sie bitte eine Verbindung her.';
  error.servercommunication_no_connection_title = 'Keine Internetverbindung';
  error.settings_unable_to_save_template = 'Fehler beim Speichern';
  error.settings_unable_to_save_title = 'Beim Speichern der Einstellungen ist ein Fehler aufgetreten, bitte starten Sie die App neu und versuchen Sie es erneut.';
  
  error.unknown = 'Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es erneut.';
  error.unknown_title = 'Unbekannter Fehler';
  error.unauthorized_template = 'Sie wurden nicht als angemeldeter Benutzer erkannt. Bitte melden Sie sich an.';
  error.unauthorized_title = 'Sie sind nicht angemeldet';
  
  // format
  format.date = 'd.M.yyyy';
  format.date_houre = 'd.M.yyyy HH:mm';
  
  // info
  info.common_hint = 'Hinweis';
  
  info.not_implemented = 'Diese Funktion wurde noch nicht implementiert.';
  
  info.settings_saved_template = 'Die Einstellungen wurden erfolgreich gespeichert.';
  info.settings_saved_title = 'Einstellungen gespeichert';
  
  // text
  text.add_to_cart_success_title = 'Hinzugefügt';
  
  

  return {
    dict: dict,
    error: error,
    format: format,
    info: info,
    text: text
  };
})();