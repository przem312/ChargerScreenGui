/* global i18nextko, ko */

i18nextko.init({
  "en": {
    "translation": {
      "openevse": "OpenEVSE",
      "loading": "Loading, please wait... ",
      "language": "Language",
      "system": "System",
      "services": "Services",
      "vehicle": "Vehicle",
      "saving" : "Saving",
      "saved": "Saved",
      "save": "Save",
      "wifisetup": "Network Setup",
      "mode": "Mode:",
      "ip": "IP Address",
      "sfpackets": "Successfull packets:",
      "rapipackets": "RAPI packets:",
      "network": "Network",
      "rssi": "RSSI dBm",
      "changewifi": "Change WiFi network",
      "of": " of ",
      "connect2net": "Connect to network:",
      "poffaccesspoint": "Turn off Access Point",
      "scanning": "Scanning...",
      "ssid": "SSID:",
      "passkey": "Passkey",
      "showpass": "Show password",
      "connect": "Connect",
      "connecting": "Connecting to WIFI Network...",
      "administration": "Administration",
      "username": "Username:",
      "15max": "15 characters max",
      "31max": "31 characters max",
      "password": "Password:",
      "showpassword": "Show password",
      "httpauth": "Web interface HTTP authentication.",
      "wififirmware": "WiFi Firmware",
      "version": "Version: ",
      "update": "Update",
      "updating": "Updating...",
      "error": "Error",
      "complete": "Firmware update completed ok",
      "restart": "Restart",
      "restarting": "Restarting...",
      "reset": "Factory Reset",
      "resetting": "Resetting...",
      "advsettings": "Advanced Settings",
      "hostname": "Hostname:",
      "ntpserver": "NTP Server:",
      "rfid": "RFID",
      "enabled": "Enabled:",
      "rfidnotfound": "Reader not found",
      "rfidregistered": "Registered tags",
      "remove": "Remove",
      "rfidclear": "Clear Tags",
      "rfidmanage": "Manage scanned tags",
      "rfidscan": "Scan",
      "rfidplace": "Place your RFID tag on the scanner... ",
      "waiting": "Waiting",
      "rfidscanned": "Tag scanned successfully!",
      "rfiduid": "UID",
      "rfidalregistered": "The tag is already registered",
      "rfidnotregistered": "The tag is not registered",
      "rfidregister": "Register tag",
      "rfidremove": "Remove tag",
      "devmode": "Developer Mode",
      "serialconsoles": "Serial Consoles",
      "debug": "Debug",
      "emoncms": "Energy Monitoring",
      "emoncmsenable": "Enable Emoncms",
      "emoncmsserver": "Emoncms Server*:",
      "emoncmsnode": "Emoncms Node*:",
      "emoncmsapi": "Emoncms write-apikey*:",
      "emoncmsssltitle": "Emoncms SSL SHA-1 Fingerprint (optional):",
      "emoncmshttps": "HTTPS will be enabled if present e.g:",
      "connected": "Connected:",
      "yes": "yes",
      "no": "no",
      "emoncmssuccess": "Successful posts:",
      "mqtt": "MQTT",
      "mqttenable": "Enable MQTT",
      "mqttstatuspub": "Status published to:",
      "mqttstatusval": "{base-topic}/{status} value",
      "mqttrapi": "RAPI over MQTT is deprecated. Use /claim or /override API",
      "host": "Host*:",
      "port": "Port*:",
      "rejectcert": "Reject self-signed certificates:",
      "warning": "Warning!!",
      "mqttcerts": "Certificate validation is disabled, although the connection to MQTT server will be encrypted the connection is still vulnerable to man-in-the-middle attacks.",
      "blank": " blank - no authentication",
      "basetopic": "Base-topic*:",
      "retain": "Retain published data",
      "voltagetop": "Voltage topic:",
      "voltagedesc": "Voltage MQTT topic to improve power calculations",
      "shaper": "Current Shaper",
      "shaperenable": "Enable Current Shaper",
      "shaperdesc": "Throttle charge current following your house loads to prevent exceeding what your energy plan can deliver.<br>",
      "shapermaxpow": "Max power allowed (in W):",
      "shaperlivepow": "Live power load MQTT Topic (in W):",
      "ohm": "OhmConnect",
      "ohmenable": "Enable OhmConnect",
      "ohmclick": "Click Here to Join",
      "ohmdesc": "OhmConnect monitors real-time conditions on the electricity grid. When dirty and unsustainable power plants turn on, our users receive a notification to save energy.",
      "ohmhour": "Ohm Hour:",
      "ohmkey": "Ohm Key:",
      "ohmusa": "USA - California only",
      "ohmkeydesc": "Ohm Key can be obtained by logging in to OhmConnect, enter Settings and locate the link in \"Open Source Projects\".<br/>Example: https://login.ohmconnect.com/verify-ohm-hour/OpnEoVse",
      "key": "Key:",
      "divert": "Solar PV divert",
      "divertenable": "enable Solar PV Divert",
      "nomqtt": "MQTT not enabled.",
      "nomqttdesc": "You need to enable MQTT on the <a href=\"#services\">Services</a> tab.",
      "divertnomqttdesc": "Solar PV Divert requires an SolarPV-gen or Grid (+I/-E) feed to be delivered via MQTT.",
      "divertdesc1": "Dynamically adjust charge rate based on solar PV generation or excess power (grid export).",
      "divertdesc2": "If only solar PV feed available: charge rate is modulated based on <b>solar PV generation.</b>",
      "divertdesc3": "If grid +I/-E (positive Import / negative Export) feed is available: charge rate will be modulated by available  <b>excess power.</b>",
      "divertdesc4": "If EVSE is sleeping: charging will begin when solar PV / excess power > min charge rate.",
      "divertdesc5": "Charging will pause if the excess power drops below the min charge rate for a period of time.",
      "divertnote": "Note: It's assumed that EVSE power is included in the grid feed",
      "divertsolar": "Solar:",
      "divertgrid": "Grid Import/Export:",
      "chargerate": "Charge rate:",
      "divertfeed": "Feed*:",
      "divertsolar2": "SolarPV-gen",
      "divertgrid2": "Grid (+I/-E)",
      "divertsolar2desc": "Solar PV MQTT topic to modulate charge rate based on solar",
      "divertgrid2desc": "Grid (+I/-E) MQTT topic to modulate charge rate based on <b>excess power</b>",
      "divertpvpratio": "Required PV power ratio:",
      "divertpvpratiodesc": "The fraction of PV current that suffices to start charging or increment current",
      "divertsmoothatt": "Divert smoothing attack:",
      "divertsmoothattdesc": "The amount of the new feed value to add to the divert available power rolling average",
      "divertsmoothdec": "Divert smoothing decay:",
      "divertsmoothdecdesc": "The amount of the new feed value to remove to the divert available power rolling average ",
      "divertmintime": "Minimum charge time:",
      "divertmintimedesc": "The minimum amount of time (seconds) to charge the car once enabled via the Solar PV divert. This can help minimise wear and tear on the EVSE.",
      "divertwait": "Waiting for solar",
      "divertcharge": "Charging from solar",
      "ocpp": "OCPP 1.6",
      "ocppenable": "Enable OCPP",
      "ocppserver": "Central System URL*:",
      "ocppid": "Charge box ID*:",
      "ocppspoint": "Transaction start point:",
      "ocppacccont": "Access control:",
      "ocppsuspend": "OCPP can suspend EVSE",
      "ocppenergize": "OCPP can energize plug",
      "evseerror": "EVSE Error",
      "evseerrordesc1": "OpenEVSE not responding or not connected",
      "status": "Status",
      "current": "Current",
      "temp": "Temp",
      "energy": "Energy",
      "elapsed": "Elapsed",
      "evnocon": "EV not connected",
      "evcon": "EV connected",
      "active": "Active:",
      "voltage": "Voltage:",
      "avcur": "Available Current:",
      "smcur": "Smoothed Current:",
      "mintimerem": "Min time remaining:",
      "curevent": "Current Event:",
      "nxtevent": "Next Event:",
      "modenml": "Normal (fast)",
      "modeeco": "Eco (PV divert)",
      "chargeopt": "Charge Options",
      "manoverride": "Manual Override",
      "start": "Start",
      "pause": "Pause",
      "stop": "Stop",
      "clear": "Clear",
      "timelimit": "Time Limit:",
      "energylimit": "Energy limit:",
      "timer": "Timer:",
      "delaydesc1": "A random delay of up to +/-",
      "delaydesc2": "minutes will be applied to the start time to help prevent sudden load increases on the grid.",
      "delayadj": "Random start adjust:",
      "seconds": "seconds",
      "set": "Set",
      "cancel": "Cancel",
      "starting": "Starting",
      "session" : "This session:",
      "total": "Total:",
      "sensorval": "Sensor Values",
      "sensor": "Sensor",
      "value": "Value",
      "pilot": "Pilot",
      "curnow": "Current Now:",
      "setup": "Setup",
      "rtc": "Time: No RTC detected",
      "time": "Time",
      "timezone": "Time zone:",
      "settimefrom": "Set time from",
      "manual": "Manual",
      "browser": "Browser",
      "ntp": "NTP",
      "servicelev": "Service Level:",
      "maxcur": "Max Current:",
      "name": "Name",
      "level": "Level",
      "min": "Minimum:",
      "max": "Maximum:",
      "ssrscale": "Sensor Scale:",
      "ssroff": "Sensor Offset:",
      "safety": "Safety",
      "safetydesc": "Hardware safety checks. Enable dev mode (System > Developer Mode) to enable/disable or use the physical LCD + menu button.",
      "safetywarn": "Not all the safety tests are enabled, please take extra care before charging your vehicle.",
      "test": "Test",
      "gfcitest": ">GFCI Self Test:",
      "gndmon": "Ground Monitoring:",
      "stckctdet": "Stuck Contact Detection",
      "tempmon": "Temperature Monitoring:",
      "diodechk": "Diode Check:",
      "ventrq": "Vent Required:",
      "count": "Count",
      "gfci": "GFCI:",
      "nognd": "No Ground:",
      "stkct": "Stuck Contact",
      "hardware": "Hardware",
      "firmware": "Firmware:",
      "openevsewifi": "OpenEVSE WiFi",
      "fwconf": "Firmware config:",
      "fwver": "Firmware version:",
      "espinfo": "ESP info:",
      "flashsz": "Flash Size:",
      "freeram": "Free RAM:",
      "evsettings": "Vehicle Settings",
      "evpause": "Pause status",
      "evpausedesc": "Some vehicles will shutdown if left in sleep mode (pilot signal enable) and then can not be woken up by timers/PV divert. Changing the pause state to disable should resolve this issue, however this removes the ability for the charger to detect if a vehicle is connected when paused.",
      "sleep": "Sleep",
      "display": "Display",
      "simple": "Simple",
      "advanced": "Advanced",
      "brightness": "LED Brightness:",
      "history": "History",
      "type": "Type",
      "loadmore": "Load more",
      "none": "None",
      "tesla": "Tesla",
      "selectevcon": "Select the vehicle connection type",
      "accesstoken": "Access Token",
      "reftoken": "Refresh token",
      "teslalogindesc1": "The Tesla login may break from time-to-time as Tesla change their login API, hopefully OpenEVSE will be able to resolve the issue on ",
      "teslalogindesc2": "our server",
      "teslalogindesc3": "but should the login fail you can use a 3rd Party app to generate the appropriate tokens.",
      "teslalogindesc4": "These can be entered in the `Advanced` section as an alternative method of logging in.",
      "apple": "Apple",
      "android": "Android",
      "evfetching": "Fetching vehicle info ...",
      "ovms": "Open Vehicle Monitoring System",
      "soctopic": "State of Charge topic:",
      "socdesc": "The battery level of charge as a percentage",
      "rangetopic": "Range topic:",
      "km": "km",
      "miles": "miles",
      "rangedesc": "The range (on electric) of the vehicle based on the current battery level",
      "timetopic": "Time to charge topic:",
      "timedesc": "The time until the battery is fully charged in seconds",
      "login": "Login",
      "logout": "Logout",
      "battlvl": "Battery Level:",
      "battrng": "Battery Range:",
      "timefchg": "Time to full charge:",
      "http": "HTTP",
      "httppush": "HTTP Push (Always Active)",
      "httppushinfo": "To update manually vehicule data, send HTTP POST request to:",
      "httppushinfo2": "containing json data in body:"

    }
  },
  "pl": {
    "translation": {
      "openevse": "OpenEVSE",
      "loading": "??adowanie, prosz?? czeka??.... ",
      "language": "J??zyk",
      "system": "System",
      "services": "Serwisy",
      "vehicle": "Pojazd",
      "saving" : "Zapisuj??...",
      "saved": "Zapisane",
      "save": "Zapisz",
      "wifisetup": "Ustawienia Sieci",
      "mode": "Tryb:",
      "ip": "Adres IP",
      "sfpackets": "Poprawne pakiety:",
      "rapipackets": "Pakiety RAPI:",
      "network": "Sie??",
      "rssi": "RSSI dBm",
      "changewifi": "Zmie?? WiFI",
      "of": " z ",
      "connect2net": "Zmie?? sie??:",
      "poffaccesspoint": "Wy????cz AP",
      "scanning": "Skanuje...",
      "ssid": "SSID:",
      "passkey": "Has??o",
      "showpass": "Poka?? has??o",
      "connect": "Po????cz",
      "connecting": "????czenie z WiFi...",
      "administration": "Administracja",
      "username": "U??ytkownik:",
      "15max": "maks 15 znak??w",
      "31max": "maks 31 znak??w",
      "password": "Has??o:",
      "showpassword": "Poka?? has??o",
      "httpauth": "Autentykacja do serwisu.",
      "wififirmware": "WiFi Firmware",
      "version": "Wersja: ",
      "update": "Aktualizacja",
      "updating": "Aktualizuje...",
      "error": "B????d",
      "complete": "Aktualizacja si?? powiod??a",
      "restart": "Restart",
      "restarting": "Restatruje...",
      "reset": "Ustawienia fabryczne",
      "resetting": "Przywracam...",
      "advsettings": "Ustawienia zaawansowane",
      "hostname": "Nazwa Hosta:",
      "ntpserver": "Serwer NTP:",
      "rfid": "RFID",
      "enabled": "W????czone:",
      "rfidnotfound": "Czytnik nie odnaleziony",
      "rfidregistered": "Zarejestrowane karty",
      "remove": "Usu??",
      "rfidclear": "Wyczy???? zapisane karty",
      "rfidmanage": "Zarz??dzaj kartami",
      "rfidscan": "Skanuj",
      "rfidplace": "Przy?????? kart?? do czytnika",
      "waiting": "Oczekuje",
      "rfidscanned": "Karta odczytana poprawnie!",
      "rfiduid": "UID",
      "rfidalregistered": "Karta ju?? istnieje",
      "rfidnotregistered": "Karta nie istnieje",
      "rfidregister": "Zarejestruj kart??",
      "rfidremove": "Usu?? kart??",
      "devmode": "Developer Mode",
      "serialconsoles": "Serial Consoles",
      "debug": "Debug",
      "emoncms": "Monitorowanie energii",
      "emoncmsenable": "Uruchom Emoncms",
      "emoncmsserver": "Emoncms Server*:",
      "emoncmsnode": "Emoncms Node*:",
      "emoncmsapi": "Emoncms write-apikey*:",
      "emoncmsssltitle": "Emoncms SSL SHA-1 Fingerprint (optional):",
      "emoncmshttps": "HTTPS will be enabled if present e.g:",
      "connected": "Pod????czono:",
      "yes": "tak",
      "no": "nie",
      "emoncmssuccess": "Successful posts:",
      "mqtt": "MQTT",
      "mqttenable": "Enable MQTT",
      "mqttstatuspub": "Status published to:",
      "mqttstatusval": "{base-topic}/{status} value",
      "mqttrapi": "RAPI over MQTT is deprecated. Use /claim or /override API",
      "host": "Host*:",
      "port": "Port*:",
      "rejectcert": "Reject self-signed certificates:",
      "warning": "Warning!!",
      "mqttcerts": "Certificate validation is disabled, although the connection to MQTT server will be encrypted the connection is still vulnerable to man-in-the-middle attacks.",
      "blank": " blank - no authentication",
      "basetopic": "Base-topic*:",
      "retain": "Retain published data",
      "voltagetop": "Voltage topic:",
      "voltagedesc": "Voltage MQTT topic to improve power calculations",
      "shaper": "Ograniczenie wydawanej mocy",
      "shaperenable": "W????cz ograniczenie mocy",
      "shaperdesc": "Ogranicz moc wydawan?? przez ??adowark?? poni??ej poziomu mocy przy????czeniowej.<br>",
      "shapermaxpow": "Maksymalna moc (in W):",
      "shaperlivepow": "Live power load MQTT Topic (in W):",
      "modbus": "Zdalny odczyt po Modbus",
      "midenable": "W????cz odczyt Modbus",
      "modbusdesc": "Ustaw parametry servera modbus",
      "modbus_hostname": "Adres Modbus",
      "modbus_port": "Port serwera (Domy??lny): 502",
      "screenTest": "Parametry testowe wy??wietlacza",
      "TestEnable": "Uruchom testy wy??wietlacza",
      "Testdesc": "Zadaj parametry testowe na wy??wietlacz",
      "test_vehicle_state": "Indeks stanu (1-6)",
      "test_current_power": "Moc (W)",
      "test_current_energy": "En (Wh)",

      "test_current_time": "Czas ??adowania (s)",

      "ohm": "OhmConnect",
      "ohmenable": "Enable OhmConnect",
      "ohmclick": "Click Here to Join",
      "ohmdesc": "OhmConnect monitors real-time conditions on the electricity grid. When dirty and unsustainable power plants turn on, our users receive a notification to save energy.",
      "ohmhour": "Ohm Hour:",
      "ohmkey": "Ohm Key:",
      "ohmusa": "USA - California only",
      "ohmkeydesc": "Ohm Key can be obtained by logging in to OhmConnect, enter Settings and locate the link in \"Open Source Projects\".<br/>Example: https://login.ohmconnect.com/verify-ohm-hour/OpnEoVse",
      "key": "Key:",
      "divert": "Solar PV divert",
      "divertenable": "enable Solar PV Divert",
      "nomqtt": "MQTT not enabled.",
      "nomqttdesc": "You need to enable MQTT on the <a href=\"#services\">Services</a> tab.",
      "divertnomqttdesc": "Solar PV Divert requires an SolarPV-gen or Grid (+I/-E) feed to be delivered via MQTT.",
      "divertdesc1": "Dynamically adjust charge rate based on solar PV generation or excess power (grid export).",
      "divertdesc2": "If only solar PV feed available: charge rate is modulated based on <b>solar PV generation.</b>",
      "divertdesc3": "If grid +I/-E (positive Import / negative Export) feed is available: charge rate will be modulated by available  <b>excess power.</b>",
      "divertdesc4": "If EVSE is sleeping: charging will begin when solar PV / excess power > min charge rate.",
      "divertdesc5": "Charging will pause if the excess power drops below the min charge rate for a period of time.",
      "divertnote": "Note: It's assumed that EVSE power is included in the grid feed",
      "divertsolar": "Solar:",
      "divertgrid": "Grid Import/Export:",
      "chargerate": "Charge rate:",
      "divertfeed": "Feed*:",
      "divertsolar2": "SolarPV-gen",
      "divertgrid2": "Grid (+I/-E)",
      "divertsolar2desc": "Solar PV MQTT topic to modulate charge rate based on solar",
      "divertgrid2desc": "Grid (+I/-E) MQTT topic to modulate charge rate based on <b>excess power</b>",
      "divertpvpratio": "Required PV power ratio:",
      "divertpvpratiodesc": "The fraction of PV current that suffices to start charging or increment current",
      "divertsmoothatt": "Divert smoothing attack:",
      "divertsmoothattdesc": "The amount of the new feed value to add to the divert available power rolling average",
      "divertsmoothdec": "Divert smoothing decay:",
      "divertsmoothdecdesc": "The amount of the new feed value to remove to the divert available power rolling average ",
      "divertmintime": "Minimum charge time:",
      "divertmintimedesc": "The minimum amount of time (seconds) to charge the car once enabled via the Solar PV divert. This can help minimise wear and tear on the EVSE.",
      "divertwait": "Waiting for solar",
      "divertcharge": "Charging from solar",
      "ocpp": "OCPP 1.6",
      "ocppenable": "Enable OCPP",
      "ocppserver": "Central System URL*:",
      "ocppid": "Charge box ID*:",
      "ocppidtag": "ID Tag*",
      "ocppspoint": "Transaction start point:",
      "ocppacccont": "Access control:",
      "ocppsuspend": "OCPP can suspend EVSE",
      "ocppenergize": "OCPP can energize plug",
      "evseerror": "EVSE Error",
      "evseerrordesc1": "OpenEVSE not responding or not connected",
      "status": "Status",
      "current": "Current",
      "temp": "Temp",
      "energy": "Energy",
      "elapsed": "Elapsed",
      "evnocon": "EV not connected",
      "evcon": "EV connected",
      "active": "Active:",
      "voltage": "Voltage:",
      "avcur": "Available Current:",
      "smcur": "Smoothed Current:",
      "mintimerem": "Min time remaining:",
      "curevent": "Current Event:",
      "nxtevent": "Next Event:",
      "modenml": "Normal (fast)",
      "modeeco": "Eco (PV divert)",
      "chargeopt": "Charge Options",
      "manoverride": "Manual Override",
      "start": "Start",
      "pause": "Pause",
      "stop": "Stop",
      "clear": "Clear",
      "timelimit": "Time Limit:",
      "energylimit": "Energy limit:",
      "timer": "Timer:",
      "delaydesc1": "A random delay of up to +/-",
      "delaydesc2": "minutes will be applied to the start time to help prevent sudden load increases on the grid.",
      "delayadj": "Random start adjust:",
      "seconds": "seconds",
      "set": "Set",
      "cancel": "Cancel",
      "starting": "Starting",
      "session" : "This session:",
      "total": "Total:",
      "sensorval": "Sensor Values",
      "sensor": "Sensor",
      "value": "Value",
      "pilot": "Pilot",
      "curnow": "Current Now:",
      "setup": "Setup",
      "rtc": "Time: No RTC detected",
      "time": "Time",
      "timezone": "Time zone:",
      "settimefrom": "Set time from",
      "manual": "Manual",
      "browser": "Browser",
      "ntp": "NTP",
      "servicelev": "Service Level:",
      "maxcur": "Max Current:",
      "name": "Name",
      "level": "Level",
      "min": "Minimum:",
      "max": "Maximum:",
      "ssrscale": "Sensor Scale:",
      "ssroff": "Sensor Offset:",
      "safety": "Safety",
      "safetydesc": "Hardware safety checks. Enable dev mode (System > Developer Mode) to enable/disable or use the physical LCD + menu button.",
      "safetywarn": "Not all the safety tests are enabled, please take extra care before charging your vehicle.",
      "test": "Test",
      "gfcitest": ">GFCI Self Test:",
      "gndmon": "Ground Monitoring:",
      "stckctdet": "Stuck Contact Detection",
      "tempmon": "Temperature Monitoring:",
      "diodechk": "Diode Check:",
      "ventrq": "Vent Required:",
      "count": "Count",
      "gfci": "GFCI:",
      "nognd": "No Ground:",
      "stkct": "Stuck Contact",
      "hardware": "Hardware",
      "firmware": "Firmware:",
      "openevsewifi": "OpenEVSE WiFi",
      "fwconf": "Firmware config:",
      "fwver": "Firmware version:",
      "espinfo": "ESP info:",
      "flashsz": "Flash Size:",
      "freeram": "Free RAM:",
      "evsettings": "Vehicle Settings",
      "evpause": "Pause status",
      "evpausedesc": "Some vehicles will shutdown if left in sleep mode (pilot signal enable) and then can not be woken up by timers/PV divert. Changing the pause state to disable should resolve this issue, however this removes the ability for the charger to detect if a vehicle is connected when paused.",
      "sleep": "Sleep",
      "display": "Display",
      "simple": "Simple",
      "advanced": "Advanced",
      "brightness": "LED Brightness:",
      "history": "History",
      "type": "Type",
      "loadmore": "Load more",
      "none": "None",
      "tesla": "Tesla",
      "selectevcon": "Select the vehicle connection type",
      "accesstoken": "Access Token",
      "reftoken": "Refresh token",
      "teslalogindesc1": "The Tesla login may break from time-to-time as Tesla change their login API, hopefully OpenEVSE will be able to resolve the issue on ",
      "teslalogindesc2": "our server",
      "teslalogindesc3": "but should the login fail you can use a 3rd Party app to generate the appropriate tokens.",
      "teslalogindesc4": "These can be entered in the `Advanced` section as an alternative method of logging in.",
      "apple": "Apple",
      "android": "Android",
      "evfetching": "Fetching vehicle info ...",
      "ovms": "Open Vehicle Monitoring System",
      "soctopic": "State of Charge topic:",
      "socdesc": "The battery level of charge as a percentage",
      "rangetopic": "Range topic:",
      "km": "km",
      "miles": "miles",
      "rangedesc": "The range (on electric) of the vehicle based on the current battery level",
      "timetopic": "Time to charge topic:",
      "timedesc": "The time until the battery is fully charged in seconds",
      "login": "Login",
      "logout": "Logout",
      "battlvl": "Battery Level:",
      "battrng": "Battery Range:",
      "timefchg": "Time to full charge:",
      "http": "HTTP",
      "httppush": "HTTP Push (Always Active)",
      "httppushinfo": "To update manually vehicule data, send HTTP POST request to:",
      "httppushinfo2": "containing json data in body:"

    }
  },
  "fr": {
    "translation": {
      "openevse": "OpenEVSE",
      "loading": "Chargement, veuillez patienter...",
      "language": "Langue",
      "system": "Syst??me",
      "services": "Services",
      "vehicle": "VE",
      "saving": "Sauvegarde",
      "saved": "Sauvegard??",
      "save": "Sauvegarder",
      "wifisetup": "Configuration Wifi",
      "mode": "Mode:",
      "ip": "Addresse IP",
      "sfpackets": "Trames transmises:",
      "rapipackets": "Trames RAPI:",
      "network": "R??seau",
      "rssi": "RSSI dBm",
      "changewifi": "Changer de r??seau WiFi",
      "of": " sur ",
      "connect2net": "Se connecter au r??seau:",
      "poffaccesspoint": "Fermer le point d'acc??s",
      "scanning": "Scan en cours...",
      "ssid": "SSID:",
      "passkey": "Clef Wifi",
      "showpass": "Voir le mot de passe",
      "connect": "Connecter",
      "connecting": "Connection au r??seau WIFI...",
      "administration": "Administration",
      "username": "Utilisateur:",
      "15max": "15 charact??res max",
      "31max": "31 charact??res max",
      "password": "Mot de passe:",
      "showpassword": "Voir le mot de passe",
      "httpauth": "Authentication HTTP de l'interface web.",
      "wififirmware": "Firmware module WiFi",
      "version": "Version: ",
      "update": "Mettre ?? jour",
      "updating": "Mise ?? jour...",
      "error": "Erreur",
      "complete": "Mise ?? jour du firmware OK",
      "restart": "Red??marrer",
      "restarting": "Red??marrage...",
      "reset": "R??initialiser",
      "resetting": "R??initialisation",
      "advsettings": "Configuration avanc??e",
      "hostname": "Nom d'h??te:",
      "ntpserver": "Serveur NTP:",
      "rfid": "RFID",
      "enabled": "Activ??:",
      "rfidnotfound": "Lecteur RFID non trouv??",
      "rfidregistered": "Badges enregistr??s",
      "remove": "Retirer",
      "rfidclear": "Supprimer tout",
      "rfidmanage": "G??rer les badges scann??s",
      "rfidscan": "Scanner",
      "rfidplace": "Placer votre badge RFID sur le lecteur... ",
      "waiting": "En attente",
      "rfidscanned": "Basge scann?? avec succ??s!",
      "rfiduid": "UID",
      "rfidalregistered": "Ce badge est d??j?? enregistr??",
      "rfidnotregistered": "Ce badge n'est pas enregistr??",
      "rfidregister": "Enregistrer le badge",
      "rfidremove": "Retirer le badge",
      "devmode": "Mode D??veloppeur",
      "serialconsoles": "Consoles",
      "debug": "Debug",
      "emoncms": "Supervision Energ??tique",
      "emoncmsenable": "Activer Emoncms",
      "emoncmsserver": "Serveur Emoncms*:",
      "emoncmsnode": "Noeud Emoncms*:",
      "emoncmsapi": "clef api (??criture) Emoncms*:",
      "emoncmsssltitle": "Emoncms SSL SHA-1 Fingerprint (optionnel):",
      "emoncmshttps": "HTTPS sera activ?? si pr??sent:",
      "connected": "Connect??:",
      "yes": "oui",
      "no": "non",
      "emoncmssuccess": "Publications r??ussies:",
      "mqtt": "MQTT",
      "mqttenable": "Activer MQTT",
      "mqttstatuspub": "Status publi?? sur:",
      "mqttstatusval": "{topic-base}/{status} valeur",
      "mqttrapi": "RAPI par MQTT est obsol??te. Veuillez utiliser l'API /claim /override",
      "host": "H??te*:",
      "port": "Port*:",
      "rejectcert": "Rejeter les certificats auto-sign??s:",
      "warning": "Attention!!",
      "mqttcerts": "La validation des certificats esst d??sactiv??e. Bien que la connection au serveur MQTT soit encrypt??e, elle est vuln??rable ?? une attaque MITM.",
      "blank": " vide - pas d'authentication",
      "basetopic": "Sujet principal*:",
      "retain": "Conserver les donn??es publi??es (retain)",
      "voltagetop": "Sujet Tension",
      "voltagedesc": "Sujet MQTT pour la Tension afin d'am??liorer le calcul de la puissance.",
      "shaper": "Gestion Dynamique du Courant",
      "shaperenable": "Activer la gestion dynamique du courant",
      "shaperdesc": "Module le courant de charge en fonction des capacit??s de votre abonnement et de la puissance disponible.<br>",
      "shapermaxpow": "Puissance Max authoris??e (en W):",
      "shaperlivepow": "Sujet MQTT Puissance instantan??e compteur (en W):",
      "ohm": "OhmConnect",
      "ohmenable": "Activer OhmConnect",
      "ohmclick": "Inscription",
      "ohmdesc": "OhmConnect supervise en temps r??el les conditions sur le r??seau ??lectrique. Quand les centrales les plus polluantes ou que la charge est trop elev??e, nos utilisateurs re??oivent une notification afin de sauvegarder l'energie.",
      "ohmhour": "Status Ohm:",
      "ohmkey": "Clef Ohm:",
      "ohmusa": "USA - Californie seulement",
      "ohmkeydesc": "La clef Ohm peut ??tre obtenue sur votre compte OhmConnect, aller dans Settings et trouver le lien \"Open Source Projects\"<br/>Example: https://login.ohmconnect.com/verify-ohm-hour/OpnEoVse",
      "key": "Clef:",
      "divert": "Gestion de production Solaire",
      "divertenable": "Activer la gestion de production Solaire",
      "nomqtt": "MQTT n'est pas activ??",
      "nomqttdesc": "Vous devez activer MQTT depuis l'onglet <a href=\"#services\">Services</a>.",
      "divertnomqttdesc": "La gestion de production Solaire n??cessite un sujet MQTT contenant la production solaire (SolarPV-gen) ou d??ficit/exc??dent du r??seau (+I/-E)",
      "divertdesc1": "Ajuste dynamiquement la puissance de charge en fonction de la production solaire ou exc??dent d'??nergie ( export sur le r??seau )",
      "divertdesc2": "Si seul la valeur de production solaire est disponible: le courant de charge est modul?? selon le total de <b>production solaire</b>.",
      "divertdesc3": "Si le d??ficit/exc??dent (+Import/-Export) est disponible, le courant de charge sera modul?? selon l'<b>exc??dent</b>.",
      "divertdesc4": "Si l'EVSE est en pause: la charge d??butera quand la production Solaire ou l'exc??dent de puissance > puissance de charge minimale (min charge rate)",
      "divertdesc5": "La charge se mettra en pause si l'exc??dent de puissance tombe sous la puissance de charge minimale.",
      "divertnote": "Note: La puissance consomm??e par l'EVSE est inclue dans le flux d'exc??dent/d??ficit",
      "divertsolar": "Solaire",
      "divertgrid": "Import/Export r??seau:",
      "chargerate": "Courant de charge:",
      "divertfeed": "Sujet MQTT*",
      "divertsolar2": "Prod Solaire",
      "divertgrid2": "R??seau (+I/-E)",
      "divertsolar2desc": "Sujet MQTT de la production solaire pour moduler la charge en fonction de la production",
      "divertgrid2desc": "Sujet MQTT import / export (+I/-E) r??seau pour moduler la charge en fonction de l'<b>exc??dent de puissance</b>",
      "divertpvpratio": "Ratio de puissance PV requise:",
      "divertpvpratiodesc": "Ratio de courant PV suffisant pour d??marrer la charge ou augmenter le courant.",
      "divertsmoothatt": "Lissage augmentation du d??tournement:",
      "divertsmoothattdesc": "Le montant de la nouvelle valeur re??ue ?? ajouter ?? la moyenne de puissance disponible",
      "divertsmoothdec": "Lissage diminution du d??tournement:",
      "divertsmoothdecdesc": "Le montant de la nouvelle valeur re??ue ?? retirer de la moyenne de puissance disponible",
      "divertmintime": "Temps de charge minimum:",
      "divertmintimedesc": "Le minimum de temps de charge (secondes) une fois activ?? via le d??tournement Solaire. Cela peut aider ?? limiter l'usure du relai",
      "divertwait": "En attente de production solaire",
      "divertcharge": "Charge depuis la production solaire",
      "ocpp": "OCPP 1.6",
      "ocppenable": "Activer OCPP",
      "ocppserver": "URL du Syst??me Central*:",
      "ocppid": "ID du Chargeur*:",
      "ocppidtag": "ID Tag*",
      "ocppspoint": "Point de d??part de la Transaction:",
      "ocppacccont": "Contr??le d'acc??s:",
      "ocppsuspend": "OCPP peut suspendre l'EVSE",
      "ocppenergize": "OCPP peut alimenter la prise",
      "evseerror": "Erreur EVSE",
      "evseerrordesc1": "OpenEVSE ne r??pond pas ou n'est pas connect??",
      "status": "Status:",
      "current": "Courant",
      "temp": "Temp",
      "energy": "Energie",
      "elapsed": "Ecoul??",
      "evnocon": "VE non connect??",
      "evcon": "VE connect??",
      "active": "Actif:",
      "voltage": "Tension:",
      "avcur": "Courant Disponible:",
      "smcur": "Courant Liss??:",
      "mintimerem": "Temps restant min:",
      "curevent": "Ev??nement Courant:",
      "nxtevent": "Ev??nement Suivant:",
      "modenml": "Normal (rapide)",
      "modeeco": "Eco (solaire)",
      "chargeopt": "Options de Charge",
      "manoverride": "Contr??le Manuel",
      "start": "D??marrer",
      "stop": "Arr??ter",
      "clear": "Lib??rer",
      "timelimit": "Limite de Temps:",
      "energylimit": "Limite d'Energie:",
      "timer": "Minuteur:",
      "delaydesc1": "Un d??calage al??atoire de +/-",
      "delaydesc2": "minutes sera appliqu??e au temps de d??part afin d'??viter les pics de charge sur le r??seau.",
      "delayadj": "Ajustement du d??marrage al??atoire:",
      "seconds": "secondes",
      "set": "Ajouter",
      "cancel": "Supprimer",
      "session" : "Session Courante:",
      "total": "Total:",
      "sensorval": "Donn??es Capteurs",
      "sensor": "Capteur",
      "value": "Valeur",
      "pilot": "Consigne",
      "curnow": "Courant Instantan??:",
      "setup": "Param??tres",
      "rtc": "Horloge: Aucun RTC detect??",
      "time": "Date/Heure:",
      "timezone": "Fuseau horaire:",
      "settimefrom": "R??gler l'heure depuis",
      "manual": "Manuel",
      "browser": "Navigateur",
      "ntp": "NTP",
      "servicelev": "Niveau de Service:",
      "maxcur": "Courant max:",
      "name": "Nom",
      "level": "Niveau",
      "min": "Minimum:",
      "max": "Maximum:",
      "ssrscale": "Echelle Capteur:",
      "ssroff": "D??calage Capteur:",
      "safety": "S??curit??",
      "safetydesc": "V??rification de s??curit?? du mat??riel. Activer le mode dev (Syst??me > Mode D??veloppeur) pour activer/d??sactiver ou utiliser le menu LCD/bouton.",
      "safetywarn": "Tous les tests de s??curit?? ne sont pas activ??s, veuillez ??tre vigilant avant de charger votre v??hicule.",
      "test": "Test",
      "gfcitest": "autotest GFCI:",
      "gndmon": "Contr??le de la Terre:",
      "stckctdet": "D??tection Relai Coll??",
      "tempmon": "Contr??le de la T??:",
      "diodechk": "V??rification Diode:",
      "ventrq": "Ventilation requise:",
      "count": "Total",
      "gfci": "GFCI:",
      "nognd": "Probl??me Terre:",
      "stkct": "Relai Coll??",
      "hardware": "Mat??riel",
      "firmware": "Micrologicel:",
      "openevsewifi": "OpenEVSE WiFi",
      "fwconf": "Config Firmware:",
      "fwver": "version Firmware:",
      "espinfo": "info ESP:",
      "flashsz": "Espace Flash:",
      "freeram": "RAM disponible:",
      "evsettings": "Param??tres VE",
      "evpause": "Mode de Pause",
      "evpausedesc": "Certains v??hicules vont s'??teindre si laiss?? en mode Veille (signal pilote activ??) et ne peuvent ensuite ??tre r??veill??s par un minuteur ou production solaire. Changer l'??tat de Pause en Inactif devrait r??soudre ce probl??me. Cependant cela retire la possibilit?? au chargeur de d??tecter si le v??hicule est connect?? pendant la Veille.",
      "sleep": "Veille",
      "display": "Affichage",
      "simple": "Simple",
      "advanced": "Avanc??",
      "brightness": "Luminosit?? LED:",
      "history": "Historique",
      "type": "Type",
      "loadmore": "Charger plus",
      "none": "Aucun",
      "tesla": "Tesla",
      "selectevcon": "Selectionner le type de connection au v??hicule",
      "accesstoken": "Token d'acc??s",
      "reftoken": "Renouveller le Token",
      "teslalogindesc1": "L'identification Tesla peut cesser de fonctionner de temps en temps quand Tesla change son API, heureusement OpenEVSE sera capable de r??soudre le probl??me sur ",
      "teslalogindesc2": "nos serveurs",
      "teslalogindesc3": "mais si elle ??choue, vous pouvez utiliser une application externe pour g??n??rer le token appropri??.",
      "teslalogindesc4": "Celui-ci peut ??tre configur?? dans la section `Avanc??` comme m??thode alternative d'authentification.",
      "apple": "Apple",
      "android": "Android",
      "evfetching": "R??cup??ration des donn??es du v??hicule ...",
      "ovms": "Open Vehicle Monitoring System",
      "soctopic": "Sujet MQTT Etat de Charge (SOC):",
      "socdesc": "Niveau de batterie en %",
      "rangetopic": "Sujet MQTT Autonomie:",
      "km": "km",
      "miles": "miles",
      "rangedesc": "L'autonomie du v??hicule bas??e sur le niveau de charge de la batterie",
      "timetopic": "Sujet MQTT Temps de Charge restant:",
      "timedesc": "Le temps restant jusqu'?? la charge compl??te en secondes",
      "login": "Connecter",
      "logout": "D??connecter",
      "battlvl": "Niveau Batterie:",
      "battrng": "Autonomie Batterie:",
      "timefchg": "Temps de charge compl??te restant:",
      "http": "HTTP",
      "httppush": "Push HTTP (Toujours actif)",
      "httppushinfo": "Pour mettre ?? jours manuellement les donn??es v??hicule, envoyer une requ??te HTTP POST vers:",
      "httppushinfo2": "contenant ce mod??le json dans body:"
    }
  }
}, "en", ko);
