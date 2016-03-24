var translation_de_DE = (function() 
{
  var dict = {};
  var error = {};
  var format = {};
  var info = {};
  var text = {};
  
  // dict
  dict.additive = 'Zusatz';
  dict.additive_2 = 'Zusatz 2';
  dict.address_additional = 'Adresszusatz';
  dict.all = 'Alle';
  dict.all_categories = 'Alle Kategorien';
  dict.all_manufacturers = 'Alle Hersteller';
  dict.approve = 'Genehmigen';
  dict.approval_steps = 'Genehmigungsschritte';
  dict.approver = 'Genehmiger';
  dict.art_no = 'Art.-Nr.';
  dict.art_number = 'Art.-Nummer';
  dict.article_no = 'Artikelnr.';
  dict.article_number = 'Artikelnummer';
  dict.article_description = 'Artikelbeschreibung';
  dict.articlesearch = 'Artikelsuche';
  
  dict.back = 'Zurück';
  dict.balance = 'Saldo';
  dict.budgetsettings = 'Budgeteinstellungen';
  dict.besteller = 'Besteller';
  
  dict.cancel = 'Abbrechen';
  dict.canceled = 'Storniert';
  dict.cart = 'Warenkorb';
  dict.category = 'Kategorie';
  dict.category_main = 'Hauptkategorie';
  dict.category_secondary = 'Nebenkategorie';
  dict.change = 'Ändern';
  dict.charged = 'Berechnet';
  dict.city = 'Ort';
  dict.comment = 'Kommentar';
  dict.confirmation = 'Bestätigung';
  dict.cost_center = 'Kostenstelle';
  dict.country = 'Land';
  dict.create = 'Anlegen';
  dict.creationdate = 'Erstelldatum';
  dict.customer = 'Kunde';
  dict.customer_number = 'Kundennummer';
  
  dict.dangerous_goods = 'Gefahrgut';
  dict.dangerous_goods_surcharge = 'Gefahrgutzuschlag';
  dict.date = 'Datum';
  dict.delivery_address = 'Lieferadresse';
  dict.delivery_addresses = 'Lieferadressen';
  dict.delivery_data = 'Lieferdaten';
  dict.delivery_date = 'Liefertermin';
  dict.delivery_date_type = 'Lieferdatumstyp';
  dict.detail_information= 'Detailinformationen';
  dict.description= 'Beschreibung';
  
  dict.error = 'Fehler';
  dict.ean = 'EAN';
  dict.erasure = 'Löschen';
  
  dict.filter = 'Filter';
  dict.filter_by = 'Filtern';
  dict.freigabe = 'Freigabe';
  dict.freigaben = 'Freigaben';
  dict.freitext_position = 'Freitext-Position';
  dict.from = 'von';
  
  dict.gross = 'brutto';
  dict.gtc = 'AGB';
  dict.gvs_article_number = 'GVS Artikelnummer';
  
  dict.header_data = 'Kopfdaten';
  dict.house_number = 'Hausnummer';
  dict.house_number = 'Hausnummer';

  dict.imprint = 'Impressum';
  dict.informations = 'Informationen';
  dict.invoice_address = 'Rechnungsadresse';
  
  dict.limit = 'Limit';
  dict.login = 'Anmelden';
  dict.logout = 'Abmelden';
  dict.label_certificates = 'Label/Zertifikate';
  
  dict.manufacturer = 'Hersteller';
  dict.manufacturer_art_no = 'Hersteller-Art.-Nr.';
  dict.manufacturer_art_number = 'Hersteller-Art.-Nummer';
  dict.manufacturer_article_number = 'Herstellerartikelnummer';
  
  dict.name = 'Name';
  dict.nachhaltig = 'Nachhaltig';
  dict.net = 'netto';
  dict.news = 'News';
  dict.no = 'Nein';
  dict.number_placeholder = 'z. B. 12345678';
  dict.number_type = 'Nummerntyp';
  
  dict.objects = 'Objekte';
  dict.occasion = 'Anlass';
  dict.ok = 'OK';
  dict.or = 'oder';
  dict.optional = 'optional';
  dict.orderamount = 'Bestellwert';
  dict.orderdate = 'Bestelldatum';
  dict.ordered = 'Bestellt';
  dict.orderno = 'Auftragsnr.';
  dict.orderpreview = 'Bestellvorschau';
  dict.ordertemplate = 'Bestellvorlage';
  dict.ordertemplates = 'Bestellvorlagen';
  dict.org_element = 'Org-Element';
  dict.organisation_element = 'Organisationselement';
  dict.orderpositions = 'Bestellpositionen';
  
  dict.packaging = 'Verpackung';
  dict.password = 'Passwort';
  dict.path = 'Pfad';
  dict.position = 'Position';
  dict.positions = 'Positionen';
  dict.price_net = 'Nettopreis';
  dict.privacy_policy = 'Datenschutzerklärung';
  dict.proceed = 'Fortfahren';
  dict.product_data = 'Produktdaten';
  dict.purchaser = 'Besteller';
  
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
  dict.surcharge_for_small_quantities = 'Mindermengenzuschlag';
  
  dict.totalvalueofgoods_gross = 'Summe (brutto)';
  dict.total_price_netto = 'Gesamtpreis (netto)';
  dict.totalvalueofgoods_net = 'Summe (netto)';
  
  dict.update = 'Aktualisieren';
  dict.update_data = 'Daten aktualisieren';
  dict.update_selection_now = 'Auswahl jetzt aktualisieren';
  dict.username = 'Benutzername';
  
  dict.quantity = 'Menge';
  
  dict.vorgangsnummer = 'Vorgangsnummer';
  
  dict.yes = 'Ja';
  
  dict.zip_code = 'PLZ';
  
  
  // error
  error.add_to_cart_none_selected = 'Bitte wählen Sie vorher mindestens einen Artikel aus.';
  error.api_version_expired_template = 'Sie können diese Aktion nicht ausführen, da Ihre App nicht auf einem aktuellen Stand ist. Bitte updaten Sie diese App.';
  error.api_version_expired_title = 'App nicht aktuell';
  error.freitext_position_no_article_description = 'Bitte geben Sie eine Artikelbeschreibung ein.';
  
  error.checkcart_could_not_check = 'Warenkorbprüfung fehlgeschlagen';
  error.checkcart_invalid_position = 'Die Warenkorbposition mit der Nummer <em>{{number}}</em> enthält ungültige Daten.';
  error.commen_error_template = 'Es ist ein unbekannter Fehler aufgetreten. Bitte starten Sie die App neu und melden sich erneut an. Sollte der Fehler danach immer noch auftreten, wenden Sie sich bitte an den Support.';
  error.common_error_title = 'Unbekannter Fehler';
  
  error.dussmann_popup_title = 'Ungültiger Warenkorb';
  error.dussmann_status_no_article = 'Für eine Position wurde kein Artikel angegeben. Bitte entfernen Sie diese Position.';
  error.dussmann_status_no_assignment = 'Für dieses Org.-Element wurde keine Kontierung gepflegt (Y/H).';
  error.dussmann_status_no_plant = 'Für dieses Org.-Element wurde kein Werk gepflegt.';
  error.dussmann_status_no_price = 'Für den Artikel {{number}} wurde kein Preis gepflegt. Bitte entfernen Sie diesen Artikel.';
  error.dussmann_status_no_psp = 'Für dieses Org.-Element wurde kein PSP-Element gepflegt.';
  error.dussmann_status_no_tradinggroup = 'Für den Artikel {{number}} wurde keine Warengruppe gepflegt.';

  error.enter_integer_value = 'Bitte geben Sie einen ganzzahligen Wert größer 0 ein.';
  
  error.filter_not_available = 'Der Suchfilter ist im Moment nicht verfügbar.';
  error.forbidden_template = 'Sie sind nicht berechtigt diese Aktion auszuführen. Bitte melden Sie sich erneut an, um Ihre Berechtigung zu aktualisiern.';
  error.forbidden_title = 'Keine Berechtigung';
  error.freigebe_invalid_template = 'Die von Ihnen aufgerufene Freigabe ist nicht mehr gültig. Sie wurde bereits bearbeitet.';
  error.freigebe_invalid_title = 'Freigabe nicht mehr gültig';
  error.freigebe_not_found_template = 'Sie haben versucht Daten von einer Freigabe aufzurufen, die nicht vorhanden ist.';
  error.freigebe_not_found_title = 'Freigabe nicht vorhanden';
  
  error.http_timeout_template = 'Es konnte keine Verbindung zum Server hergestellt werden. Bitte stellen Sie Sicher, dass eine Verbindung mit dem Internet besteht. Sollten Sie eine Verbindung haben, dann probieren es bitte zu einem späteren Zeitpunkt';
  error.http_timeout_title = 'Server nicht erreichbar';
  
  error.illegal_state_template = 'Die App befindet sich in einem ungültigen Zustand. Bitte starten sie die App neu und melden sich erneut an.';
  error.illegal_state_title = 'Ungültiger Zustand';
  error.invalid_amount = 'Ungültige Menge';
  error.invalid_cart_template = 'Ihr Warenkorb ist ungültig. Bitte gehen Sie in den Warenkorb und prüfen diesen erneut.';
  error.invalid_cart_title = 'Ungültiger Warenkorb';
  error.invalid_cartposition_template = 'Ihr Warenkorb enthält ungültige Warenkorbpositionen. Bitte gehen Sie in den Warenkorb und korrigieren Sie diesen.';
  error.invalid_cartposition_title = 'Ungültige Warenkorbposition';
  error.invalid_delivery_address_template = 'Sie haben eine ungültige Lieferadresse eingegeben. Bitte geben Sie eine gültige ein.';
  error.invalid_delivery_address_title = 'Ungültige Lieferadresse';
  error.invalid_delivery_date_template = 'Sie haben ein ungültiges Lieferdatum eingegeben. Bitte beachten Sie, dass das Lieferdatum in der Zukunft liegen muss.';
  error.invalid_delivery_date_title = 'Ungültiges Lieferdatum';
  error.invalid_login_data = 'Die von Ihnen eingegebenen Anmeldedaten sind nicht korrekt. Bitte korrigieren Sie Ihre Eingabe und versuchen Sie es erneut.';
  error.invalid_position_template = 'Es existieren ungültige Artikeldaten. Bitte laden Sie die Daten neu und versuchen es erneut.';
  error.invalid_position_title = 'Ungültige Artikeldaten';
  error.invalid_org_element_template = 'Sie haben ein Org.-Element ausgewählt, dem Sie nicht zugeordnet sind. Bitte wählen Sie ein anderes Org.-Element aus.'; 
  error.invalid_org_element_title = 'Ungültiges Org.-Element';
  error.invalid_order_template = 'Ihr Bestellung ist nicht gültig. Bitte gehen Sie zum Warenkorb und führen den Bestellprozess erneut durch.';
  error.invalid_order_title = 'Ungültige Bestellung';
  error.invalid_password = 'Das eingegebene Passwort ist nicht korrekt. Bitte versuchen Sie es erneut.';
  error.invalid_password_title = 'Passwort falsch';
  
  error.login_error_title = 'Anmeldung fehlgeschlagen';
  error.login_failed = 'Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.';
  
  error.migration_failed = 'Beim Aktualisieren Ihrer Daten auf die neue Version ist ein Fehler aufgetreten. Bitte löschen Sie die App und installieren Sie sie erneut. Dabei gehen alle Ihre gespeicherten Daten (Warenkörbe o. ä.) verloren.';
  error.migration_failed_title = 'Fehler beim Aktualisieren Ihrer Daten';
    
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
  error.update_please_select = 'Bitte wählen Sie mindestens ein Element zum Aktualisieren aus.';
  error.update_please_select_title = 'Nichts ausgewählt';
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
  
  info.update_wlan_recommended = 'Wir empfehlen die Daten mit <strong>WLAN-Verbindung</strong> zu aktualisieren, da große Datenmengen übertragen werden!';
  
  
  // text
  text.add_to_cart_success_title = 'Hinzugefügt';
  text.add_to_cart_success = 'Der Artikel wurde Ihrem Warenkorb hinzugefügt';
  text.add_to_cart_success_plural = 'Die {{numberOfPositions}} ausgewählten Artikel wurden Ihrem Warenkorb hinzugefügt';
  text.add_freedeliveryaddress = 'Freie Lieferadresse hinzufügen';
  text.add_freetextitem = 'Freitextposition hinzufügen';
  text.all_to_cart = 'Alle in den Warenkorb';
  text.approve_order_title = 'Diese Bestellung genehmigen?';
  text.approved_on = 'Genehmigt am';
  text.article_detail_article_not_found = 'Der Artikel konnte nicht gefunden werden.';
  text.article_detail_no_connection = 'Sie müssen online sein, um Artikeldetails ansehen zu können.';
  text.article_detail_ambiguous = 'Zu dieser {{articleNumberType}} wurden mehrere Artikel gefunden. Bitte benutzen Sie die Suche und wählen den passenden Artikel aus.';
  
  text.backto_orgelement = 'Zurück zu {{parentOrgElement.label}}';
  text.back_from_search = 'Zurück zu {{selectedOrgElement.label}}';
  text.barcode_error = 'Beim Scannen ist ein Fehler aufgetreten. Bitte überprüfen Sie, ob Sie der App die nötigen Berechtigungen für die Kamera erteilt haben.';
  text.budget_bookatthis = 'Auf dieses Budget buchen';
  text.budget_bookonconsequence = 'Auf Folgebudget buchen';
  text.budget_exceeded_not_orderable = 'Budget überschritten, Bestellung nicht möglich';
  text.budget_exceeded_orderable = 'Budget überschritten, Bestellung möglich';
  text.budget_neutralorder = 'Budgetneutral bestellen';
  text.budget_orderable = 'Budget nicht überschritten';
  
  text.cancel_selection = 'Auswahl beenden';
  text.cartposition_status_merged = 'Warenkorbpositionen zusammengeführt, die Mengen wurden addiert.';
  text.cartposition_status_not_found = 'Zu dieser {{articleNumberType}} wurde kein Artikel gefunden.';
  text.cartposition_status_ambiguous = 'Zu dieser {{articleNumberType}} wurden mehrere Artikel gefunden. Bitte benutzen Sie die Suche und wählen den passenden Artikel aus.';
  text.cartposition_status_permission_denied = 'Sie dürfen diesen Artikel nicht bestellen.';
  text.cartposition_status_not_available = 'Dieser Artikel ist bei diesem Org.-Element für Sie nicht verfügbar.';
  text.change_quantity = 'Menge ändern';
  text.check_cart = 'Warenkorb prüfen';
  text.continue_delivery_data = 'Weiter zu Lieferdaten';
  text.continue_order_preview = 'Weiter zur Bestellvorschau';
  text.confirm_cartposition_deletion = 'Möchten Sie den Artikel <em>{{articleName}}</em> aus Ihrem Warenkorb löschen?';
  text.confirm_sessiontoken_expiration_template = 'Zu Ihrer Sicherheit läuft in weniger als <strong>{{expirationDays}}</strong> Tag(en) Ihre Sitzung ab. Bitte melden Sie sich ab und erneut an.';
  text.confirm_sessiontoken_expiration_title = 'Bitte neu Anmelden';
  text.create_manualposition = 'Artikel hinzufügen';
  text.currently_relevant_occasion = 'Aktuell relevanter Anlass';
  
  text.dilverydate_type_next_tour = 'Nächste Tour';
  text.dilverydate_type_delivery_until = 'Lieferung bis';
  text.dilverydate_type_fixed_date = 'Fixtermin';
  text.dilverydate_type_pickup = 'Abholung';
  
  text.empty_cart = 'Ihr Warenkorb ist leer';
  text.enter_one_number = 'Bitte geben Sie eine Nummer ein';
  text.enter_comment_here = 'Hier können Sie Ihren Kommentar eingeben.';
  text.enter_quantity = 'Menge eingeben';
  
  text.filled_carts = 'Gefüllte Warenkörbe';
  text.forgot_password = 'Passwort vergessen';
  text.freigabe_approved_forwarded = 'Die Bestellung mit der Vorgangsnummer <strong>{{vorgangsnummer}}</strong> wurde genehmigt und zum nächsten Genehmiger weitergeleitet.';
  text.freigabe_approved_order_created = 'Die Bestellung mit der Vorgangsnummer <strong>{{vorgangsnummer}}</strong> wurde vollständig genehmigt und hat die Auftragsnummer <strong>{{auftragsnummer}}</strong>.';
  text.freigabe_rejected = 'Die Bestellung mit der Vorgangsnummer <strong>{{vorgangsnummer}}</strong> wurde abgelehnt';
  text.freigaben_no_connection = 'Sie müssen online sein, um Freigaben tätigen zu können.';
  
  text.go_to_top_orgelement = 'Zu obersten Org.-Element';
  text.gtc_intro = '<h1>Allgemeine Geschäftsbedingungen</h1>';
  text.gtc_group_1_title = '1. Geltungsbereich';
  text.gtc_group_1_text = '<p>1.1 Die nachfolgenden Vertragsbedingungen gelten für sämtliche Lieferungen, Leistungen und Angebote der GVS e.G. Heidenheim und dem Mitgliedsunternehmen als Verkäufer mit Unternehmern.</p><p>1.2 Entgegenstehende oder von diesen Geschäftsbedingungen abweichende Bedingungen werden seitens der GVS oder dem Mitgliedsunternehmen nicht anerkannt, es sei denn, dies wurde ausdrücklich schriftlich bestätigt. Eingegangene Übersendungen per Telefax oder unterzeichnetem Brief sind rechtswirksam, nicht jedoch Zusendungen per E-Mail.</p>';
  text.gtc_group_2_title = '2. Vertragsabschluss';
  text.gtc_group_2_text = '<p>2.1 Angebote des Verkäufers sind freibleibend und unverbindlich.</p><p>2.2 Die Angaben in den Katalogen und im Onlineshop sind abschließend. Die bei Vertragsabschluss festgelegten Bezeichnungen und Spezifikationen stellen den Stand zu diesem Zeitpunkt dar. Die Zusicherung von Eigenschaften erfolgt ausschließlich schriftlich.</p><p>2.3 Unwesentliche Änderungen im Rahmen dieses Vertrages behält sich die GVS oder das Mitgliedsunternehmen ausdrücklich vor, dies gilt insbesondere für geringfügige Änderung der Verpackung oder Verpackungseinheiten. Bei Änderungen grundlegender Art oder wo der vertragsgemäße Zweck der Lieferung erheblich eingeschränkt wird, gilt die vorhergehende Bestimmung nicht.</p><p>2.4 Der Käufer kann telefonisch, per Fax, Ordermanager bzw. Onlineshop bei der GVS oder dem Mitgliedsunternehmen bestellen. Dies ist ein verbindlicher Antrag.</p><p>2.5 Ein Vertrag kommt erst mit der schriftlichen Auftragsbestätigung, spätestens jedoch mit der Lieferung der Ware zustande.</p>';
  text.gtc_group_3_title = '3. Lieferung';
  text.gtc_group_3_text = '<p>3.1 Die von der GVS oder dem Mitgliedsunternehmen genannten Liefertermine sind unverbindliche Angaben, sofern nicht ausdrücklich ein Fixtermin von diesen bezeichnet wurde.</p><p>3.2 Unvorhergesehene Ereignisse, wie höhere Gewalt entbinden die GVS oder das Mitgliedsunternehmen, auch wenn sie bei dessen Lieferanten auftreten, von jeder Lieferungspflicht. Sie berechtigen die GVS oder das Mitgliedsunternehmen, die Lieferung um die Dauer der Behinderung zuzüglich einer angemessenen Anlaufzeit hinauszuschieben oder wegen des noch nicht erfüllten Teils ganz oder teilweise vom Vertrag zurückzutreten.</p><p>3.3 Die GVS oder das Mitgliedsunternehmen ist zu Teillieferungen oder Teilleistungen und zur Abrechnung der Teillieferungen jederzeit berechtigt. Wird nur zu wenig Ware geliefert, berechtigt dies nicht vom Rücktritt vom Kaufvertrag.</p>';
  text.gtc_group_4_title = '4. Preise, Zahlung und Verzug';
  text.gtc_group_4_text = '<p>4.1 Es gilt grundsätzlich der bei der Auftragsbestätigung genannte Preis, ansonsten, soweit nicht anderes vereinbart ist, der am Tag der Annahme der Bestellung in der Verkäuferpreisliste genannte Preis.</p><p>4.2 Die Preise verstehen sich netto, zuzüglich gesetzlicher Mehrwertsteuer; eventuell Kosten für Paketversand. Angegebene Lieferkosten beinhalten nur Abladung an der Bordsteinkante / auf dem Hofplatz des Käufers.</p><p>4.3 Aufträge werden grundsätzlich nur ab einer Mindestbestellmenge von 100,- Euro (netto) angenommen, es sei denn, ein Kleinauftrag wurde seitens des Verkäufers schriftlich bestätigt. Ist dies der Fall, wird eine Bearbeitungspauschale von 15,- Euro je Kleinauftrag berechnet.</p><p>4.4 Rechnungen der GVS oder des Mitgliedsunternehmens sind zahlbar innerhalb von 30 Tagen ohne Abzug.</p><p>4.5 Die Ablehnung von Schecks oder Wechseln behalten sich die GVS und die Mitgliedsunternehmen ausdrücklich vor. Die Annahme erfolgt stets erfüllungshalber. Diskont- und Wechselspesen gehen zu Lasten des Käufers und sind sofort fällig.</p><p>4.6 30 Tage nach Rechnungsstellung kommt der Käufer, ohne dass es bei Kaufleuten gemäß HGB einer Mahnung bedarf, in Verzug. Er hat dann als Unternehmer Zinsen in Höhe von 8 Prozentpunkten über dem jeweiligen Basiszinssatz der Deutschen Bundesbank ab dem 31. Tag nach Rechnungsstellung zu zahlen.</p><p>4.7 Anfallende Mahnkosten gehen zu Lasten des Käufers. Sofern die GVS oder das Mitgliedsunternehmen Mahnungen versendet, fällt zumindest eine Aufwandspauschale von 5,- Euro pro Mahnschreiben an.</p><p>4.8 Die Geltendmachung weiterer Verzugsschäden behält sich die GVS oder das Mitglieds-unternehmen vor. Erhält der Käufer keine Rechnung mit der Lieferung oder spätestens eine Woche nach Lieferung, ist er verpflichtet, die GVS oder das Mitgliedsunternehmen per Fax oder Email zu informieren, um einen Zahlungsverzug zu vermeiden.</p><p>4.9 Zur Aufrechnung von Gegenforderungen ist der Käufer nur berechtigt, wenn diese unbestritten oder rechtskräftig festgestellt sind. Die Aufrechnung ist bei Lieferungen durch die GVS nur gegenüber dem jeweiligen Vertragspartner zulässig, nicht gegenüber einem anderen Mitgliedsunternehmen der GVS oder bei Lieferung durch ein Mitgliedsunternehmen gegenüber GVS selbst.</p>';
  text.gtc_group_5_title = '5. Gefahrübergang';
  text.gtc_group_5_text = '<p>5.1 Bei Lieferungen durch die GVS oder ein Mitgliedsunternehmen an den Käufer geht die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung mit Beladung der Ware in das eigene Transportmittel oder der Übergabe an den Lieferdienst auf den Käufer über. Die GVS bzw. das Mitgliedsunternehmen schließen eine geschäftsübliche Transportversicherung nach dem Wert der Kaufsache ab. Die Abwicklung eines Schadensfalls mit der Versicherung ist Sache des Käufers. Schäden sind unverzüglich geltend zu machen. Die Versicherungsdaten erhält der Käufer auf Anfrage bei der GVS oder dem Mitgliedsunternehmen. Eine Neulieferung erfolgt gegen neue Rechnungsstellung. Eine Verrechnung mit anstehenden Leistungen der Transportversicherung ist erfolgt nicht.</p><p>5.2 Der Übergabe steht gleich, wenn der Käufer im Verzug der Annahme ist.</p>';
  text.gtc_group_6_title = '6. Eigentumsvorbehalt';
  text.gtc_group_6_text = '<p>6.1 Die gelieferte Ware bleibt bis zur vollständigen Bezahlung sämtlicher, auch künftig entstehender Forderungen Eigentum des Verkäufers. Als Bezahlung gilt erst der Eingang des Geldes bei uns, bei Zahlung mit Scheck oder Wechsel sowie im Lastschriftverfahren die vorbehaltlose Gutschrift.</p><p>6.2 Bis zum Eigentumsübergang ist der Kunde verpflichtet, die Ware pfleglich zu behandeln; insbesondere besteht die Verpflichtung, diese auf Kosten des Kunden gegen Feuer-, Wasser- und Diebstahlschäden ausreichend zu versichern.</p><p>6.3 Der Käufer ist berechtigt, die gelieferte Ware im ordentlichen Geschäftsgang weiter zu verkaufen. Er tritt der GVS oder dem Mitgliedsunternehmen jedoch bereits jetzt alle Forderungen in Höhe des Faktura-Endbetrages (einschließlich Umsatzsteuer) ab, die ihm aus der Weiterveräußerung gegen seine Abnehmer oder Dritte erwachsen, und zwar unabhängig davon, ob die Kaufsache ohne oder nach Verarbeitung weiter verkauft worden ist. Zur Einziehung dieser Forderung bleibt der Käufer auch nach der Abtretung ermächtigt. Die Befugnis der GVS oder des Mitgliedsunternehmens, die Forderung selbst einzuziehen, bleibt hiervon unberührt.</p><p>6.4 Die GVS oder das Mitgliedsunternehmen verpflichten sich jedoch, die Forderung nicht selbst einzuziehen, solange der Käufer seinen Zahlungsverpflichtungen aus den vereinnahmten Erlösen nachkommt, nicht in Zahlungsverzug gerät und insbesondere kein Antrag auf Eröffnung eines Insolvenzverfahrens gestellt ist oder Zahlungseinstellung vorliegt. Ist dies der Fall, so kann die GVS oder das Mitgliedsunternehmen verlangen, dass der Käufer die abgetretenen Forderungen und deren Schuldner bekannt gibt, alle zum Einzug erforderlichen Angaben macht, die dazugehörigen Unterlagen aushändigt und den Schuldnern (Dritten) die Abtretung mitteilt.</p><p>6.5 Die GVS oder das Mitgliedsunternehmen verpflichtet sich, die Forderungen auf Verlangen des Käufers insoweit freizugeben, als der realisierbare Wert der Sicherheiten die zu sichernden Forderungen um mehr als 10 % übersteigt; die Auswahl der freizugebenden Sicherheiten obliegt der GVS oder dem Mitgliedsunternehmen.</p>';
  text.gtc_group_7_title = '7. Rücksendungen';
  text.gtc_group_7_text = '<p>7.1 Von der GVS oder dem Mitgliedsunternehmen unveranlasste Warenrücksendungen ohne Vorliegen von Mängeln oder ungenehmigter Überbelieferung befreien nur dann von der Kaufpreiszahlung, wenn die GVS oder das Mitgliedsunternehmen der Rückabwicklung ausdrücklich zugestimmt hat. Rücksendungen werden nur unter Vorbehalt des Verkäufers zur Prüfung angenommen.</p><p>7.2 Rücksendungen können, sofern nichts Abweichendes vereinbart ist, nur dann vom Verkäufer bearbeitet werden, wenn der Rücksendung zumindest eine Kopie des Lieferscheins/ Rechnung beiliegt, auf dem Kundennummer angegeben ist. Der Käufer trägt das Risiko des zufälligen Untergangs bei Rücksendungen.</p><p>7.3 Die GVS oder das Mitgliedsunternehmen sind auch ohne gesonderte Mitteilung im Rücknahmefall berechtigt, dem Käufer pauschale Rücknahmekosten in Höhe von 10 % des Netto-Warenwertes, mindestens jedoch 12,50 EUR zu berechnen.</p>';
  text.gtc_group_8_title = '8. Gewährleistung';
  text.gtc_group_8_text = '<p>8.1 Der Käufer ist verpflichtet, die Ware unverzüglich nach Erhalt zu untersuchen. Offensichtliche Mängel und Transportschäden müssen der GVS oder dem Mitgliedsunternehmen bzw. der Transportversicherung unverzüglich schriftlich mitgeteilt werden. Die mangelhaften Kaufgegenstände sind in dem Zustand, in dem sie sich zum Zeitpunkt der Feststellung des Mangels befinden, zur Besichtigung durch die GVS oder das Mitgliedsunternehmen bereitzuhalten. Ein Verstoß gegen die vorstehenden Verpflichtungen schließt Gewährleistungsansprüche gegenüber der GVS oder dem Mitgliedsunternehmen aus.</p><p>8.2 Ist der Liefergegenstand mangelhaft oder fehlen ihm zugesicherte Eigenschaften oder wird er innerhalb der Gewährleistungsfrist durch Fabrikations- oder Materialmängel schadhaft, hat die GVS oder das Mitgliedsunternehmen im Rahmen der Nacherfüllung die Wahl, unter Ausschluss sonstiger Gewährleistungsansprüche des Käufers – insbesondere unter Ausschluss des Ausgleichs von Folgeschäden des Käufers -, zwischen Mängelbeseitigung oder Ersatzlieferung. Mehrfache Nachbesserungen sind zulässig.</p><p>8.3 Schlägt die Nachbesserung oder Ersatzlieferung nach angemessener Frist fehl, so ist der Käufer nach seiner Wahl berechtigt, Minderung oder Rücktritt zu verlangen.</p><p>8.4 Der Verkäufer übernimmt keine Garantie.</p><p>8.5 Gewährleistungsansprüche verjähren in 12 Monaten, gerechnet ab Gefahrübergang.</p>';
  text.gtc_group_9_title = '9. Haftung';
  text.gtc_group_9_text = '<p>9.1 Schadensersatzansprüche aus Unmöglichkeit der Leistung, wegen verspäteter oder nicht erfolgten Lieferung, aus positiver Forderungsverletzung, aus Verschulden bei Vertragsabschluss und aus unerlaubter Handlung sind sowohl gegenüber der GVS bzw. dem Mitgliedsunternehmen als auch gegenüber deren Erfüllungs- bzw. Verrichtungsgehilfen ausgeschlossen, soweit der Schaden nicht vorsätzlich oder grob fahrlässig verursacht wurde.</p><p>9.2 Vorstehende Haftungsbeschränkung gilt nicht für Schadenersatzansprüche wegen schuldhafter Verletzung des Lebens, des Körpers oder der Gesundheit.</p>';
  text.gtc_group_10_title = '10. Datenschutz';
  text.gtc_group_10_text = '<p>Durch Bestellung stimmt der Kunde der Erhebung, Verarbeitung und Nutzung personen-bezogener Daten zu, soweit dies für die Zweckbestimmung des Parteienverhältnisses notwendig ist.</p>';
  text.gtc_group_11_title = '11. Schlussbestimmungen';
  text.gtc_group_11_text = '<p>11.1 Die allgemeinen Geschäftsbedingungen können jederzeit unter www.gvs-eg.de oder auf der Homepage der jeweiligen Mitgliedsunternehmen eingesehen werden. Diese sind auch auf der Rückseite der Rechnungen enthalten.</p><p>11.2 Erfüllungsort ist der Sitz des jeweiligen Verkäufers, unabhängig von einem evtl. abweichenden Lieferweg. Ist der Käufer Kaufmann, so ist für alle Streitigkeiten aus den Verträgen und damit zusammenhängende Rechtsbeziehungen der Gerichtsstand der Sitz des Verkäufers. Dies gilt auch für Ansprüche aus Schecks, Wechseln und Lastschrift-verfahren.</p><p>11.3 Es gilt ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss der Bestimmungen der UN-Kaufrechtskonvention vom 11. April 1980.</p><p>11.4 Änderungen dieser Bestimmungen oder Nebenabreden bedürfen der Schriftform. Die Änderung dieser Schriftformklausel bedarf ebenfalls der Schriftform.</p>';
  text.gvs_merchant = 'GVS-Händler';
  text.gvs_delivery_partner = 'GVS-Lieferpartner';
  
  text.in_approval = 'In Genehmigung';
  text.info_and_settings = 'Info & Einstellungen';
  text.imprint = '<h1>Impressum</h1><p>GVS Großverbraucherspezialisten eG<br/>In den Seewiesen 26 / Gebäude 18<br/>89520 Heidenheim</p><p>Tel. (07321) 355095-50<br/>Fax (07321) 355095-79<br/>E-Mail: zentrale@gvsgroup.eu</p><p>Vorstand: Klaus Agsteiner, Joachim Homberger<br/>Aufsichtsratvorsitzender: Tilmann Klein</p><p>Registergericht: Amtsgericht Ulm<br/>Registernummer: GnR 660062<br/>USt.-IdNr. DE145565971</p><p>Zuständige Aufsichtsbehörde: Baden Württembergischer Genossenschaftsverband<br/>Inhaltlich Verantwortlicher gemäß § 6 MDStV: Matthias Ikas</p>';  
  
  text.last_orders = 'Letzte {{lastOrderCount}} Bestellungen';
  
  text.manual_created_article = 'Manuell erfasster Artikel';
  text.manual_entry = 'Manuelle Eingabe';
  
  text.new_app_version_available_title = 'App-Update möglich';
  text.new_app_version_available_text_general = 'Es ist eine neue Version von GVS Ordermanager verfügbar.';
  text.new_app_version_available_text_ios = 'Bitte gehen Sie in den App Store und updaten Sie die App.';
  text.new_app_version_available_text_android = 'Bitte gehen Sie in den Google Play Store und updaten Sie die App.';
  text.new_free_delivery_address = 'Neue freie Lieferadresse';
  text.new_ordertempalte_from = 'Neue Bestellvorlage von';
  text.news_no_connection = 'Sie müssen online sein, um News ansehen zu können.';
  text.news_no_news_found = 'Es konnten keine News gefunden werden.';
  text.no_approvals_found = 'Es konnten keine Freigaben gefunden werden.';
  text.no_filled_carts_found = 'Es wurden keine gefüllten Warenkörbe gefunden.';
  text.no_order_templates_found = 'Für dieses Org.-Element konnten keine Bestellvorlagen gefunden werden.';
  text.no_orders_found = 'Es wurden keine Bestellungen gefunden.';
  text.note_to_dealer = 'Bemerkung für den Händler';
  
  text.on_request = 'auf Anfrage';
  text.orderconfirmation_order_accepted = 'Vielen Dank für Ihre Bestellung. Ihre Auftragsnummer lautet <strong>{{auftragsNummer}}</strong>.';
  text.orderconfirmation_order_in_authorization = 'Vielen Dank für Ihre Bestellung. Ihre Bestellung mit der Ordermanager-internen Vorgangsnummer <strong>{{vorgangsNummer}}</strong> wurde zur Genehmigung weitergegeben!';
  text.orderconfirmation_order_rejected = 'Ihre Bestellung wurde leider abgelehnt, da Sie nicht berechtigt sind, das Budget zu überschreiten. Die Ordermanager-interne Vorgangsnummer ist <strong>{{vorgangsNummer}}</strong>.';
  text.ordernumber_customer = 'Bestellnummer (Kunde)';
  text.orgelement_search_noresult = 'Ihre Suche ergab keinen Treffer.';
  
  text.partially_charged = 'Teilweise berechnet';
  text.partially_shipped = 'Teilweise versendet';
  text.password_necessary_greeting = 'Hallo, {{userName}}!';
  text.password_necessary_information = 'Bitte geben Sie aus Sicherheitsgründen Ihr Passwort ein.';
  text.password_necessary_title = 'Passwort erforderlich';
  text.please_login = 'Bitte melden Sie sich an';
  text.please_confirm = 'Bitte bestätigen';
  text.plus_vat = 'zzgl. MwSt.';
  text.please_enter_logindata = 'Bitte geben Sie Ihre Anmeldedaten ein.';
  text.privacy_policy_intro = '<h1>Hinweise zum Datenschutz  und Einwilligung zur Datennutzung</h1><p>Für die GVS Großverbraucherspezialisten eG (folgend GVS eG) hat der Schutz personenbezogener Daten höchste Priorität. Wir möchten Sie deshalb darüber informieren, wie wir Ihre Privatsphäre schützen – auch beim Besuch der GVS-Ordermanager-App (folgend App).<br>Mit den folgenden Hinweisen verpflichten wir uns zum verantwortungsvollen Umgang mit Ihren personenbezogenen Daten. Es ist uns wichtig, dass Sie sich beim Besuch unserer Internet-Seiten zu jeder Zeit sicher fühlen.<br>Als gesetzliche Grundlagen dienen insbesondere das Bundesdatenschutzgesetz (BDSG), sowie das Telemediengesetz (TMG).</p>';
  text.privacy_policy_group_1_title = 'Funktionsweise der App';
  text.privacy_policy_group_1_text = '<p>Wenn Sie die App benutzen, wird eine Online-Verbindung zum aktuellen GVS-Ordermanager hergestellt, um die von den Ihnen gewünschten Inhalte und Services abzurufen. Ggf. wird deren Darstellung für das von Ihnen verwendete Gerät optimiert. Zusätzlich bietet Ihnen die App weitere Funktionen wie EAN-Scan und Offline-Warenkörbe.</p>';
  text.privacy_policy_group_2_title = 'Personenbezogenen Daten, die wir von Ihnen erheben';
  text.privacy_policy_group_2_text = '<p>Bei den personenbezogenen Daten unterscheiden wir zwischen denen, die Sie uns in der App ausdrücklich und wissentlich zur Verfügung stellen, und denen, die automatisch an uns übertragen werden, wenn Sie die App benutzen (Nutzungsdaten).</p><h3>Ausdrücklich und wissentlich uns von Ihnen zur Verfügung gestellte Daten</h3><p>Wenn Sie Warenkörbe füllen, Bestellvorlagen anlegen, Organisationelemente auswählen, Warenkörbe prüfen, Lieferdaten eingeben, Budgeteinstellungen vornehmen, Warenkörbe bestellen und Organisationselemente, die letzten 10 Bestellungen und Bestellvorlagen aktualisieren, erheben wir alle Daten, die uns von Ihnen mitgeteilt werden. Dies geschieht zum Beispiel durch Ausfüllen von Feldern oder auswählen von Checkboxen. Es handelt sich dabei beispielsweise um folgende Daten:</p><ul><li>Anmeldedaten (Kundenummer und Benutzername)</li><li>das von Ihnen gewählte Passwort (wird selbstverständlich verschlüsselt übertragen und gespeichert)</li><li>das aktuell ausgewählte Organisationselement</li><li>Lieferdaten (Lieferadresse, Lieferzeitpunkt, Lieferhinweise)</li><li>Buchungseinstellungen bzgl. Budgetierung</li><li>Warenkorbpositionen zum Prüfen des Warenkorbs und zum Bestellen</li><li>persönliche Konfigurationseinstellungen der App (z.B. Bilder nur im WLAN herunterladen)</li></ul><p>Dem Grundsatz der Datensparsamkeit folgend, erfragen wir nur die für den jeweiligen Zweck unbedingt erforderlichen Daten (Pflichtangaben sind kenntlich gemacht). Gerne dürfen Sie die optionalen weiteren Datenfelder ausfüllen, um den Bestellprozess zu erleichtern.</p><h3>Nutzungsdaten</h3><p>Wenn Sie unsere App benutzen, werden automatisch technische Daten an uns übertragen. Dabei handelt sich um Daten wie:</p><ul><li>IP-Adresse des Geräts</li><li>temporäre eindeutige, zufällige Benutzeridentifikationsnummern</li><li>Request (Name des angeforderten Prozesses)</li><li>App-Version</li><li>Spracheinstellungen</li><li>Verwendetes System und Version</li></ul><p>Diese Daten und Informationen werden nach dem Nutzungsvorgang anonymisiert in Protokolldateien gespeichert. Weitere Informationen zu den Widerspruchsmöglichkeiten finden Sie unter <em>Recht auf Widerruf</em>.</p>';
  text.privacy_policy_group_3_title = 'Wozu und wie verwenden wir die Daten';
  text.privacy_policy_group_3_text = '<h3>Leistungserbringung</h3><p>Die uns von Ihnen ausdrücklich und wissentlich zur Verfügung gestellten Daten, verwenden wir nur zu dem Zweck, zu dem Sie uns diese Daten angegeben haben, z. B. zur Anmeldung im GVS-Ordermanager, zur Bestellzusammenstellung oder zur Bestellabwicklung inkl. der Freigabe-Mechanismen.</p><h3>Weitergabe personenbezogener Daten an Dritte</h3><p>Eine Weitergabe Ihrer Daten an Dritte findet nicht statt, sofern Sie nicht Ihr ausdrückliches Einverständnis hierfür erteilt haben. Allein wenn die GVS eG gesetzlich oder per Gerichtsbeschluss dazu verpflichtet ist, wird sie Ihre Daten im geforderten Umfang an auskunftsberechtigte Stellen übermitteln.</p>';
  text.privacy_policy_group_4_title = 'Berechtigungen (Android)';
  text.privacy_policy_group_4_text = '<p>Die Android-App fordert folgende Berechtigungen an:</p><h3>Bilder und Videos aufnehmen</h3><p>Über „EAN scannen“ haben Sie die Möglichkeit, mit der Kamera Ihres Gerätes die EAN von Artikeln zu scannen. Die Kamera wird nur genutzt, um die EAN zu erfassen. Eine Speicherung von Bildern erfolgt nicht.</p><p><em>Hinweis:</em> Aufgrund der Programmierung von Android, kann die Berechtigung zum Gebrauch der Kamera nur in Kombination mit der Berechtigung zur Aufnahme von Videos erteilt werden. Die App nutzt die Kamera lediglich zum EAN scannen und macht von der Berechtigung zur Aufnahme von Videos keinen Gebrauch.</p><h3>WLAN-/ Netzwerkverbindungen abrufen</h3><p>Sie haben die Möglichkeit, in der App einzustellen, dass Bilder nur bei einer bestehenden WLAN-Verbindung geladen und angezeigt werden. Unter Android ist diese Berechtigung notwendig, um erkennen zu können, ob eine WLAN-Verbindung existiert. Des Weiteren wird diese Berechtigung benötigt, um Ihnen anzeigen zu können, dass bestimmte Funktionen gerade nicht ausgeführt werden können, wenn Sie nicht mit dem Internet verbunden sind.</p><h3>Zugriff auf alle Netzwerke</h3><p>Die App benötigt diese Berechtigung, damit sie eine Verbindung zu unseren Servern über das Internet aufbauen und die von Ihnen gewünschten Inhalte und Funktionen zur Verfügung stellen kann.</p><h3>Lichtanzeige steuern</h3><p>Um beim Scannen von EANs den Blitz anschalten zu können, benötigt die App diese Berechtigung.</p>';
  text.privacy_policy_group_5_title = 'Berechtigungen (iOS)';
  text.privacy_policy_group_5_text = '<p>Die iOS-App fordert folgende Berechtigungen an:</p><h3>Kamera</h3><p>Über „EAN scannen“ haben Sie die Möglichkeit, mit der Kamera Ihres Gerätes die EAN von Artikeln zu scannen. Die Kamera wird nur genutzt, um die EAN zu erfassen. Eine Speicherung von Bildern erfolgt nicht.</p>';
  text.privacy_policy_group_6_title = 'Recht auf Widerruf';
  text.privacy_policy_group_6_text = '<p>Wenn Sie die GVS eG auffordern, Ihre personenbezogenen Daten nicht für die weitere Kontaktaufnahme zu verwenden und/oder zu löschen, so wird entsprechend verfahren. Daten, die für eine Auftragsabwicklung bzw. zu kaufmännischen Zwecken zwingend erforderlich sind, sind von einer Kündigung beziehungsweise von einer Löschung nicht berührt.</p>';
  text.privacy_policy_group_7_title = 'Datenschutzbeauftragter';
  text.privacy_policy_group_7_text = '<p>Die GVS eG hat einen externen Datenschutzbeauftragten bestellt. Er besitzt die entsprechende Fachkunde und Erfahrung, um ein sicheres Datenschutz-Management der GVS eG zu gewährleisten.</p><p>arpcon datenschutz | it-sicherheit<br>Harald Armbruster<br>admin@arpcon.de</p>';
  
  text.reject_order_title = 'Diese Bestellung ablehnen?';

  text.save_as_ordertemplate = 'Als Bestellvorlage speichern';
  text.save_as_ordertemplate_impossible_template = 'Sie können nur einen Warenkorb mit gültigen Positionen als Bestellvorlage speichern. Bitte prüfen Sie den Warenkorb und entfernen ggf. ungültige Positionen.';
  text.save_as_ordertemplate_impossible_title = 'Als Bestellvorlage speichern nicht möglich';
  text.scan_ean = 'EAN scannen';
  text.scan_new_article = 'Neuen Artikel scannen';
  text.search_articles = 'Artikel suchen';
  text.search_orgelements = 'Org.-Element suchen';
  text.select_orgelement = 'Org.-Element auswählen';
  text.select_articles = 'Artikel auswählen';
  text.send_order = 'Bestellung absenden';
  text.show_images_only_with_wlan = 'Bilder nur bei WLAN-Verbindung anzeigen.'; 
  
  text.to_cart = 'In den Warenkorb';
  text.to_cart_selection = 'Auswahl in den Warenkorb';
  text.to_search = 'Zur Suche';
  
  text.update_orgelements = 'Org.-Elemente';
  text.update_ordertemplates = 'Bestellvorlagen';
  text.update_latest_orders = 'Letzte Bestellungen';
  text.update_complete = 'Die ausgewählten Daten wurden aktualisiert.';
  text.update_complete_title = 'Aktualisierung abgeschlossen';
  
  

  return {
    dict: dict,
    error: error,
    format: format,
    info: info,
    text: text
  };
})();