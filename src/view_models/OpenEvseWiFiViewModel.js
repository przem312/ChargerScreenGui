/* global $, ko, ConfigViewModel, StatusViewModel, RapiViewModel, WiFiScanViewModel, WiFiConfigViewModel, OpenEvseViewModel, PasswordViewModel, ZonesViewModel, ConfigGroupViewModel, ScheduleViewModel, SchedulePlanViewModel, VehicleViewModel, EventLogViewModel, RFIDViewModel */
/* exported OpenEvseWiFiViewModel */

function OpenEvseWiFiViewModel(baseHost, basePort, baseProtocol)
{
  "use strict";
  var self = this;

  self.baseHost = ko.observable("" !== baseHost ? baseHost : "chargescreen.local");
  self.basePort = ko.observable(basePort);
  self.baseProtocol = ko.observable(baseProtocol);

  self.baseEndpoint = ko.pureComputed(function () {
    var endpoint = "//" + self.baseHost();
    if(80 !== self.basePort()) {
      endpoint += ":"+self.basePort();
    }
    return endpoint;
  });

  self.config = new ConfigViewModel(self.baseEndpoint);
  self.status = new StatusViewModel(self.baseEndpoint);
  self.scan = new WiFiScanViewModel(self.baseEndpoint);
  self.wifi = new WiFiConfigViewModel(self.baseEndpoint, self.config, self.status, self.scan);
  self.openevse = new OpenEvseViewModel(self.baseEndpoint, self.config, self.status);
  self.zones = new ZonesViewModel(self.baseEndpoint);
  self.schedule = new ScheduleViewModel(self.baseEndpoint, self.config);
  self.schedule_plan = new SchedulePlanViewModel(self.baseEndpoint);
  // self.vehicle = new VehicleViewModel(self.baseEndpoint, self.config, self.status);
  self.logs = new EventLogViewModel(self.baseEndpoint);

  self.initialised = ko.observable(false);
  self.updating = ko.observable(false);
  self.scanUpdating = ko.observable(false);

  self.wifi.selectedNet.subscribe((net) => {
    if(false !== net) {
      self.config.ssid(net.ssid());
    }
  });

  self.config.ssid.subscribe((ssid) => {
    self.wifi.setSsid(ssid);
  });

  // Info text display state
  self.showSafety = ko.observable(false);
  self.showVehiclePauseStatus = ko.observable(false);


  self.toggle = function (flag) {
    flag(!flag());
  };

  self.status.state.subscribe(() => {
    self.logs.addLog(self.status);
  });
  self.status.flags.subscribe(() => {
    self.logs.addLog(self.status);
  });

  // Advanced mode
  self.advancedMode = ko.observable(false);
  self.advancedMode.subscribe(function (val) {
    self.setCookie("advancedMode", val.toString());
  });

  // Developer mode
  self.developerMode = ko.observable(false);
  self.developerMode.subscribe(function (val) {
    self.setCookie("developerMode", val.toString());
    if(val) {
      self.advancedMode(true); // Enabling dev mode implicitly enables advanced mode
    }
  });


  var updateTimer = null;
  var updateTime = 5 * 1000;

  var scanTimer = null;
  var scanTime = 3 * 1000;

  // Get time update events
  self.status.time.subscribe((time) => {
    self.openevse.time.timeUpdate(new Date(time));
  });

  // Time source
  self.timeSource = ko.computed({
    read: function() {
      return self.config.sntp_enabled() ? "ntp" : (
        self.openevse.time.automaticTime() ? "browser" : "manual"
      );
    },
    write: function(val) {
      switch(val)
      {
        case "ntp":
          self.config.sntp_enabled(true);
          self.openevse.time.automaticTime(true);
          break;
        case "browser":
          self.config.sntp_enabled(false);
          self.openevse.time.automaticTime(true);
          break;
        case "manual":
          self.config.sntp_enabled(false);
          self.openevse.time.automaticTime(false);
          break;
      }
    }
  });

  self.time_zone = ko.computed({
    read: () => {
      return self.config.time_zone();
    },
    write: (val) => {
      if(undefined !== val && false === self.zones.fetching()) {
        self.config.time_zone(val);
      }
    }
  });

  // Tabs
  var tab = "status";
  if("" !== window.location.hash) {
    tab = window.location.hash.substr(1);
  }
  self.tab = ko.observable(tab);
  self.tab.subscribe(function (val) {
    window.location.hash = "#" + val;
  });
  self.isSystem = ko.pureComputed(function() { return "system" === self.tab(); });
  self.isServices = ko.pureComputed(function() { return "services" === self.tab(); });
  self.isStatus = ko.pureComputed(function() { return "status" === self.tab(); });
  self.isRapi = ko.pureComputed(function() { return "rapi" === self.tab(); });
  self.isVehicle = ko.pureComputed(function() { return "vehicle" === self.tab(); });

  // Upgrade URL
  self.upgradeUrl = ko.observable("about:blank");

  // Show/hide password state
  self.wifiPassword = new PasswordViewModel(self.config.pass);
  self.mqttPassword = new PasswordViewModel(self.config.mqtt_pass);
  self.wwwPassword = new PasswordViewModel(self.config.www_password);


  // -----------------------------------------------------------------------
  // Initialise the app
  // -----------------------------------------------------------------------
  self.loadedCount = ko.observable(0);
  self.itemsLoaded = ko.pureComputed(function () {
    return self.loadedCount() + self.openevse.updateCount();
  });
  self.itemsTotal = ko.observable(5 + self.openevse.updateTotal());
  self.start = function () {
    self.updating(true);
    self.status.update(function () {
      self.loadedCount(self.loadedCount() + 1);
      self.config.update(function () {
        self.loadedCount(self.loadedCount() + 1);
        self.schedule.update(function () {
          self.loadedCount(self.loadedCount() + 1);
          self.schedule_plan.update(function () {
            self.loadedCount(self.loadedCount() + 1);
            self.logs.update(() => {
              self.loadedCount(self.loadedCount() + 1);
              if(self.status.rapi_connected()) {
                self.openevse.update(self.finishedStarting);
              } else {
                self.finishedStarting();
                self.status.rapi_connected.subscribe((val) => {
                  if(val) {
                    self.config.update(() => {
                      self.openevse.update(() => {
                      });
                    });
                  }
                });
              }
            });
          });
        });
      });
      self.status.connect();
    });

    // Set the advanced and developer modes from Cookies
    self.advancedMode(self.getCookie("advancedMode", "false") === "true");
    self.developerMode(self.getCookie("developerMode", "false") === "true");
  };

  self.finishedStarting = function () {
    self.initialised(true);
    updateTimer = setTimeout(self.update, updateTime);

    // Load the upgrade frame
    self.upgradeUrl(self.baseEndpoint() + "/update");

    // Load the images
    var imgDefer = document.getElementsByTagName("img");
    for (var i=0; i<imgDefer.length; i++) {
      if(imgDefer[i].getAttribute("data-src")) {
        imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
      }
    }

    // Load the Time Zone information
    if(false !== self.config.time_zone()) {
      self.zones.initialValue(self.config.time_zone());
      self.zones.update(() => {
        self.config.time_zone.valueHasMutated();
      });
    }

    // Subscribe to config changes
    self.status.config_version.subscribe(() => {
      self.config.update(() => {
        self.status.update();
      });
    });
    self.status.schedule_version.subscribe(() => {
      self.schedule.update();
    });
    self.status.schedule_plan_version.subscribe(() => {
      self.schedule_plan.update();
    });

    self.updating(false);
  };

  // -----------------------------------------------------------------------
  // Get the updated state from the ESP
  // -----------------------------------------------------------------------
  self.update = function () {
    if (self.updating()) {
      return;
    }
    self.updating(true);
    if (null !== updateTimer) {
      clearTimeout(updateTimer);
      updateTimer = null;
    }
    self.status.update(function () {
      updateTimer = setTimeout(self.update, updateTime);
      self.updating(false);
    });
  };

  // -----------------------------------------------------------------------
  // WiFi scan update
  // -----------------------------------------------------------------------
  var scanEnabled = false;
  self.startScan = function () {
    if (self.scanUpdating()) {
      return;
    }
    scanEnabled = true;
    self.scanUpdating(true);
    if (null !== scanTimer) {
      clearTimeout(scanTimer);
      scanTimer = null;
    }
    self.scan.update(function () {
      if(scanEnabled) {
        scanTimer = setTimeout(self.startScan, scanTime);
      }
      self.scanUpdating(false);
    });
  };

  self.stopScan = function() {
    scanEnabled = false;
    if (self.scanUpdating()) {
      return;
    }

    if (null !== scanTimer) {
      clearTimeout(scanTimer);
      scanTimer = null;
    }
  };

  self.wifiConnecting = ko.observable(false);
  self.status.mode.subscribe(function (newValue) {
    if(newValue === "STA+AP" || newValue === "STA") {
      self.wifiConnecting(false);
    }
    if(newValue === "STA+AP" || newValue === "AP") {
      self.startScan();
    } else {
      self.stopScan();
    }
  });

  // -----------------------------------------------------------------------
  // Event: WiFi Connect
  // -----------------------------------------------------------------------
  self.saveNetworkFetching = ko.observable(false);
  self.saveNetworkSuccess = ko.observable(false);
  self.saveNetwork = function () {
    if (self.config.ssid() === "") {
      alert("Please select network");
    } else {
      self.saveNetworkFetching(true);
      self.saveNetworkSuccess(false);
      $.post(self.baseEndpoint() + "/savenetwork", { ssid: self.config.ssid(), pass: self.config.pass() }, function () {
        self.saveNetworkSuccess(true);
        self.wifiConnecting(true);
      }).fail(function () {
        alert("Failed to save WiFi config");
      }).always(function () {
        self.saveNetworkFetching(false);
      });
    }
  };
  // -----------------------------------------------------------------------
  // Event: Language save
  // -----------------------------------------------------------------------
  self.saveLangFetching = ko.observable(false);
  self.saveLangSuccess = ko.observable(false);
  self.saveLang = function () {
    self.saveLangFetching(true);
    self.saveLangSuccess(false);
    $.post(self.baseEndpoint() + "/config", JSON.stringify({ lang: self.config.lang() }), function () {
      self.saveLangSuccess(true);
    }).fail(function () {
      alert("Failed to save Lang config");
    }).always(function () {
      self.saveLangFetching(false);
    });
  };
  // -----------------------------------------------------------------------
  // Event: Admin save
  // -----------------------------------------------------------------------
  self.saveAdminFetching = ko.observable(false);
  self.saveAdminSuccess = ko.observable(false);
  self.saveAdmin = function () {
    self.saveAdminFetching(true);
    self.saveAdminSuccess(false);
    $.post(self.baseEndpoint() + "/saveadmin", { user: self.config.www_username(), pass: self.config.www_password() }, function () {
      self.saveAdminSuccess(true);
    }).fail(function () {
      alert("Failed to save Admin config");
    }).always(function () {
      self.saveAdminFetching(false);
    });
  };

  // -----------------------------------------------------------------------
  // Event: Advanced save
  // -----------------------------------------------------------------------
  self.advancedGroup = new ConfigGroupViewModel(self.baseEndpoint, () => {
    return {
      hostname: self.config.hostname(),
      sntp_hostname: self.config.sntp_hostname()
    };
  }).done(() => {
    if (confirm("These changes require a reboot to take effect. Reboot now?")) {
      $.post(self.baseEndpoint() + "/restart", { }, function () {
        setTimeout(() => {
          var newLocation = "http://" + self.config.hostname() + ".local";
          if(80 != self.basePort()) {
            newLocation += ":" + self.basePort();
          }
          newLocation += "/";
          window.location.replace(newLocation);
        }, 5*1000);
      }).fail(function () {
        alert("Failed to restart");
      });
    }
  });

  // -----------------------------------------------------------------------
  // Event: Display settings save
  // -----------------------------------------------------------------------
  self.displayGroup = new ConfigGroupViewModel(self.baseEndpoint, () => {
    return {
      led_brightness: self.config.led_brightness()
    };
  });
  self.config.led_brightness.subscribe(() => {
    self.displayGroup.save();
  });

 
  // -----------------------------------------------------------------------
  // Event: Set the time
  // -----------------------------------------------------------------------
  self.setTimeFetching = ko.observable(false);
  self.setTimeSuccess = ko.observable(false);
  self.setTime = function () {
    self.setTimeFetching(true);
    self.setTimeSuccess(false);

    var newTime = self.openevse.time.automaticTime() ? new Date() : self.openevse.time.evseTimedate();
    if(false == self.status.time())
    {
      self.openevse.openevse.time((date,valid=true) => {
        self.setTimeFetching(false);
        self.setTimeSuccess(valid);

        self.openevse.time.timeUpdate(date, valid);
      }, newTime);
    } else {
      var sntp = self.config.sntp_enabled();

      var params = {
        ntp: sntp,
        tz: self.time_zone()
      };
      if(false === sntp) {
        params.time = newTime.toISOString();
      }

      $.post(self.baseEndpoint() + "/settime", params, () => {
        self.setTimeFetching(false);
        self.setTimeSuccess(true);
      }).fail(() => {
        alert("Failed to set time");
        self.setTimeFetching(false);
      });
    }
  };

  // -----------------------------------------------------------------------
  // Event: Turn off Access Point
  // -----------------------------------------------------------------------
  self.turnOffAccessPointFetching = ko.observable(false);
  self.turnOffAccessPointSuccess = ko.observable(false);
  self.turnOffAccessPoint = function () {
    self.turnOffAccessPointFetching(true);
    self.turnOffAccessPointSuccess(false);
    $.post(self.baseEndpoint() + "/apoff", {
    }, function (data) {
      console.log(data);
      if (self.status.ipaddress() !== "") {
        setTimeout(function () {
          window.location = "http://" + self.status.ipaddress();
          self.turnOffAccessPointSuccess(true);
        }, 3000);
      } else {
        self.turnOffAccessPointSuccess(true);
      }
    }).fail(function () {
      alert("Failed to turn off Access Point");
    }).always(function () {
      self.turnOffAccessPointFetching(false);
    });
  };

  // -----------------------------------------------------------------------
  // Event: Reset config and reboot
  // -----------------------------------------------------------------------
  self.factoryResetFetching = ko.observable(false);
  self.factoryResetSuccess = ko.observable(false);
  self.factoryReset = function() {
    if (confirm("CAUTION: Do you really want to Factory Reset? All setting and config will be lost.")) {
      self.factoryResetFetching(true);
      self.factoryResetSuccess(false);
      $.post(self.baseEndpoint() + "/reset", { }, function () {
        self.factoryResetSuccess(true);
      }).fail(function () {
        alert("Failed to Factory Reset");
      }).always(function () {
        self.factoryResetFetching(false);
      });
    }
  };


  // -----------------------------------------------------------------------
  // Event: Restart
  // -----------------------------------------------------------------------
  self.restartFetching = ko.observable(false);
  self.restartSuccess = ko.observable(false);
  self.restart = function() {
    if (confirm("Restart OpenEVSE WiFi? Current config will be saved, takes approximately 10s.")) {
      self.restartFetching(true);
      self.restartSuccess(false);
      $.post(self.baseEndpoint() + "/restart", { }, function () {
        self.restartSuccess(true);
      }).fail(function () {
        alert("Failed to restart");
      }).always(function () {
        self.restartFetching(false);
      });
    }
  };

  // -----------------------------------------------------------------------
  // Event: Manual Override
  // -----------------------------------------------------------------------
  self.setOverrideFetching = ko.observable(false);
  self.setOverrideSuccess = ko.observable(false);
  self.setOverride = () =>
  {
    self.setOverrideFetching(true);
    self.setOverrideSuccess(false);

    let props = {
      state: self.status.isPaused() ? "active" : "disabled",
    };

    $.ajax({
      method: "POST",
      url: self.baseEndpoint() + "/override",
      data: JSON.stringify(props),
      contentType: "application/json"
    }).done(() => {
      self.setOverrideSuccess(true);
    }).fail(() => {
      alert("Failed to set manual override");
    }).always(() => {
      self.setOverrideFetching(false);
    });
  };

  self.clearOverrideFetching = ko.observable(false);
  self.clearOverrideSuccess = ko.observable(false);
  self.clearOverride = () =>
  {
    self.clearOverrideFetching(true);
    self.clearOverrideSuccess(false);
    $.ajax({
      method: "DELETE",
      url: self.baseEndpoint() + "/override"
    }).done(() => {
      self.clearOverrideSuccess(true);
    }).fail(() => {
      alert("Failed to clear manual override");
    }).always(() => {
      self.clearOverrideFetching(false);
    });
  };

  // -----------------------------------------------------------------------
  // Event: Save Modbus Settings
  // -----------------------------------------------------------------------
  self.saveModbusFetching = ko.observable(false);
  self.saveModbusSuccess = ko.observable(false);
  self.saveModbus = function () {
    self.saveModbusFetching(true);
    self.saveModbusSuccess(false);
    $.post(self.baseEndpoint() + "/config", JSON.stringify({
      modbus_enabled: self.config.modbus_enabled(),
      modbus_hostname: self.config.modbus_hostname(),
      modbus_port: self.config.modbus_port(),
    }), function () {
      self.saveModbusSuccess(true);
    }).fail(function () {
      alert("Failed to save MID config");
    }).always(function () {
      self.saveModbusFetching(false);
    });
  };
  // -----------------------------------------------------------------------
  // Event: Save Modbus Settings
  // -----------------------------------------------------------------------
  self.saveTestFetching = ko.observable(false);
  self.saveTestSuccess = ko.observable(false);
  self.saveTest = function () {
    self.saveTestFetching(true);
    self.saveTestSuccess(false);
    $.post(self.baseEndpoint() + "/config", JSON.stringify({
      test_enabled: self.config.test_enabled(),
      test_vehicle_state: self.config.test_vehicle_state(),
      test_current_power: self.config.test_current_power(),
    }), function () {
      self.saveTestSuccess(true);
    }).fail(function () {
      alert("Failed to save MID config");
    }).always(function () {
      self.saveTestFetching(false);
    });
  };

  // -----------------------------------------------------------------------
  // Event: Update
  // -----------------------------------------------------------------------

  // Support for OTA update of the OpenEVSE
  self.updateFetching = ko.observable(false);
  self.updateComplete = ko.observable(false);
  self.updateError = ko.observable("");
  self.updateFilename = ko.observable("");
  self.updateLoaded = ko.observable(0);
  self.updateTotal = ko.observable(1);
  self.updateProgress = ko.pureComputed(function () {
    return (self.updateLoaded() / self.updateTotal()) * 100;
  });

  self.otaUpdate = function() {
    if("" === self.updateFilename()) {
      self.updateError("Filename not set");
      return;
    }

    self.updateFetching(true);
    self.updateError("");

    var form = $("#upload_form")[0];
    var data = new FormData(form);

    $.ajax({
      url: "/update",
      type: "POST",
      data: data,
      contentType: false,
      processData:false,
      xhr: function() {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener("progress", function(evt) {
          if (evt.lengthComputable) {
            self.updateLoaded(evt.loaded);
            self.updateTotal(evt.total);
          }
        }, false);
        return xhr;
      }
    }).done(function(msg) {
      console.log(msg);
      if("OK" == msg) {
        self.updateComplete(true);
        setTimeout(() => {
          location.reload();
        }, 2500);
      } else {
        self.updateError(msg);
      }
    }).fail(function () {
      self.updateError("HTTP Update failed");
    }).always(function () {
      self.updateFetching(false);
    });
  };

  // Cookie management, based on https://www.w3schools.com/js/js_cookies.asp
  self.setCookie = function (cname, cvalue, exdays = false) {
    var expires = "";
    if(false !== exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      expires = ";expires="+d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + expires + ";path=/";
  };

  self.getCookie = function (cname, def = "") {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return def;
  };

  self.config.lang = ko.observable('en');
  self.config.lang.subscribe(function (value) {
    i18nextko.setLanguage(value);
  })
  self.languages = ['en','fr','pl'];
}
