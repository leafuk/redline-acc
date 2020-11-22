function myViewModel() {
    var self = this;

    self.defaults = new defaultsModel();
    self.config = new configModel();

    self.loadModel = function(data) {
        self.config.load(data.presetObject);
    };
};

function configModel() {
    var self = this;

    self.settings = new settingsModel();
    self.event = new eventModel();
    self.eventRules = new eventRulesModel();

    self.load = function(data) {
        self.settings.load(data.settings);
        self.event.load(data.event);
        self.eventRules.load(data.eventRules);
    }
}   

function defaultsModel() {
    var self = this;

    self.presets = ko.observableArray([]);

    self.hasPresets = ko.computed(function() {
        return self.presets().length > 0;
    });

    self.addPreset = function(preset) {
        self.presets.push(preset);
    }

    self.clearPresets = function() {
        self.presets.removeAll();
    }
}

function presetModel(label, className, data) {
    var self = this;

    self.label = ko.observable(label);
    self.buttonStyle = ko.observable(className);
    self.presetObject = data;
}

function settingsModel(settingsData) {
    var self = this;

    self.serverName = ko.observable('');
    self.password = ko.observable('');
    self.adminPassword = ko.observable('');
    self.randomizeTrackWhenEmpty = ko.observable(0);
    self.trackMedalsRequirement = ko.numericObservable(3);
    self.safetyRatingRequirement = ko.numericObservable(-1);
    self.racecraftRatingRequirement = ko.numericObservable(-1);
    self.allowAutoDQ = ko.observable(-1);
    self.spectatorSlots = ko.numericObservable(0);
    self.spectatorPassword = ko.observable('');
    self.dumpLeaderboards = ko.observable(0);
    self.isCPServer = ko.observable(0);
    self.competitionRatingMin = ko.numericObservable(-1);
    self.competitionRatingMax = ko.numericObservable(-1);
    self.configVersion = ko.observable(1);
    self.isRaceLocked = ko.observable(0);
    self.region = ko.observable('EU');

    self.availabletrackMedalsRequirement = ko.observableArray([0, 1, 2, 3]);

    self.load = function(settingsData) {
        self.serverName(settingsData.serverName);
        self.password(settingsData.password);
        self.randomizeTrackWhenEmpty(settingsData.randomizeTrackWhenEmpty);
        self.trackMedalsRequirement(settingsData.trackMedalsRequirement);
        self.safetyRatingRequirement(settingsData.safetyRatingRequirement);
        self.racecraftRatingRequirement(settingsData.racecraftRatingRequirement);
        self.allowAutoDQ(settingsData.allowAutoDQ);
        self.spectatorSlots(settingsData.spectatorSlots);
        self.spectatorPassword(settingsData.spectatorPassword);
        self.dumpLeaderboards(settingsData.dumpLeaderboards);
        self.isCPServer(settingsData.isCPServer);
        self.competitionRatingMin(settingsData.competitionRatingMin);
        self.competitionRatingMax(settingsData.competitionRatingMax);
        self.configVersion(settingsData.configVersion);
        self.isRaceLocked(settingsData.isRaceLocked);
        self.region(settingsData.region);
    };
}

function eventModel(data) {
    var self = this;

    self.track = ko.observable('silverstone');
    self.carGroup = ko.observable('FreeForAll');

    self.preRaceWaitingTimeSeconds = ko.numericObservable(30);
    self.sessionOverTimeSeconds = ko.numericObservable(150);

    self.postQualySeconds = ko.numericObservable(30);
    self.postRaceSeconds = ko.numericObservable(30);

    self.ambientTemp = ko.numericObservable(26);
    self.trackTemp = ko.numericObservable(30);

    self.cloudLevel = ko.numericObservable(0.3);
    self.rain = ko.numericObservable(0);

    self.weatherRandomness = ko.numericObservable(2);

    self.sessions = ko.observableArray(); //ko.mapping.fromJS(sessions);

    self.configVersion = ko.numericObservable(1);

    self.availableTracks = ko.observableArray([
        new Group("2018", [
            new Option("Monza 2018", "monza"),
            new Option("Zolder 2018", "zolder"),
            new Option("Brands Hatch 2018", "brands_hatch"),
            new Option("Silverstone 2018", "silverstone"),
            new Option("Paul Ricard 2018", "paul_ricard"),
            new Option("Misano 2018", "misano"),
            new Option("Spa 2018", "spa"),
            new Option("Nurburgring 2018", "nurburgring"),
            new Option("Barcelona 2018", "barcelona"),
            new Option("Hungaroring 2018", "hungaroring"),
            new Option("Zandvoort 2018", "zandvoort")
        ]),
        new Group("2019", [
            new Option("Monza 2019", "monza_2019"),
            new Option("Zolder 2019", "zolder_2019"),
            new Option("Brands Hatch 2019", "brands_hatch_2019"),
            new Option("Silverstone 2019", "silverstone_2019"),
            new Option("Paul Ricard 2019", "paul_ricard_2019"),
            new Option("Misano 2019", "misano_2019"),
            new Option("Spa 2019", "spa_2019"),
            new Option("Nurburgring 2019", "nurburgring_2019"),
            new Option("Barcelona 2019", "barcelona_2019"),
            new Option("Hungaroring 2019", "hungaroring_2019"),
            new Option("Zandvoort 2019", "zandvoort_2019")
        ]),
        new Group("DLC", [
            new Option("Kyalami", "kyalami_2019"),
            new Option("Mount Panorama", "mount_panorama_2019"),
            new Option("Suzuka", "suzuka_2019"),
            new Option("Laguna Seca", "laguna_seca_2019"),
        ])
    ]),

    self.availableCarGroup = ko.observableArray([
        { name: 'Any', id: 'FreeForAll' },
        { name: 'GT3', id: 'GT3' },
        { name: 'GT4', id: 'GT4' },
        { name: 'Porsche 991 II GT3 Cup', id: 'Cup' },
        { name: 'Lamborghini Supertrofeo', id: 'ST' }
    ]);

    self.availableHoursOfDay = ko.observableArray(Array.from(Array(24).keys()));
    self.availableTimeMultipliers = ko.observableArray(Array.from(Array(25).keys()));

    self.availableSessionTypes = ko.observableArray([
        { name: 'Practice', id: 'P' },
        { name: 'Qualifying', id: 'Q' },
        { name: 'Race', id: 'R' }
    ]);

    self.availableDayOfWeekend = ko.observableArray([
        { name: 'Friday', id: 1 },
        { name: 'Saturday', id: 2 },
        { name: 'Sunday', id: 3 },
    ]);

    self.availableWeatherRandomness = ko.observableArray([
        { name: 'Static Weather - 0', id: 0 },
        { name: 'Fairly Realistic Weather - 1', id: 1 },
        { name: 'Fairly Realistic Weather - 2', id: 2 },
        { name: 'Fairly Realistic Weather - 3', id: 3 },
        { name: 'Fairly Realistic Weather - 4', id: 4 },
        { name: 'More Sensational - 5', id: 5 },
        { name: 'More Sensational - 6', id: 6 },
        { name: 'More Sensational - 7', id: 7 },
    ]);

    self.addSession = function(sessionData) {
        this.sessions.push(new sessionModel(sessionData));
    }

    self.newSession = function() {
        this.sessions.push(new sessionModel(null));
    }
    
    self.removeSession = function() {
        self.sessions.remove(this);
    }

    self.load = function(eventData) {
        self.track(eventData.track);
        self.carGroup(eventData.carGroup);
        self.preRaceWaitingTimeSeconds(eventData.preRaceWaitingTimeSeconds);
        self.sessionOverTimeSeconds(eventData.sessionOverTimeSeconds);
        self.postQualySeconds(eventData.postQualySeconds);
        self.postRaceSeconds(eventData.postRaceSeconds);
        self.ambientTemp(eventData.ambientTemp);
        self.trackTemp(eventData.trackTemp);
        self.cloudLevel(eventData.cloudLevel);
        self.rain(eventData.rain);
        self.weatherRandomness(eventData.weatherRandomness);
        self.configVersion(eventData.configVersion);

        self.sessions([]);
        eventData.sessions.forEach(session => {
            self.addSession(session);
        });
    };
}

function sessionModel(data) {
    var self = this;
    
    self.sessionType = ko.observable(data ? data.sessionType : 'P');
    self.dayOfWeekend = ko.numericObservable(data ? data.dayOfWeekend : 1);
    self.hourOfDay = ko.numericObservable(data ? data.hourOfDay : 12);

    self.sessionDurationMinutes = ko.numericObservable(data ? data.sessionDurationMinutes : 20);
    self.timeMultiplier = ko.numericObservable(data ? data.timeMultiplier : 2);
}

function eventRulesModel() {
    var self = this;

    self.qualifyStandingType = ko.numericObservable(1);
    self.superpoleMaxCar = ko.numericObservable(-1);

    self.pitWindowLengthSec = ko.numericObservable(-1);
    self.mandatoryPitstopCount = ko.numericObservable(0);

    self.maxTotalDrivingTime = ko.numericObservable(-1);
    self.driverStintTimeSec = ko.numericObservable(-1);
    self.maxDriversCount = ko.numericObservable(1);

    self.isRefuellingAllowedInRace = ko.observable(true);
    self.isRefuellingTimeFixed = ko.observable(false);
    
    self.isMandatoryPitstopRefuellingRequired = ko.observable(false);
    self.isMandatoryPitstopTyreChangeRequired = ko.observable(false);
    
    self.isMandatoryPitstopSwapDriverRequired = ko.observable(false);

    self.tyreSetCount = ko.numericObservable(50);

    self.load = function(eventRulesData) {
        self.qualifyStandingType(eventRulesData.qualifyStandingType);
        self.superpoleMaxCar(eventRulesData.superpoleMaxCar);
        self.pitWindowLengthSec(eventRulesData.pitWindowLengthSec);
        self.mandatoryPitstopCount(eventRulesData.mandatoryPitstopCount);
        self.maxTotalDrivingTime(eventRulesData.maxTotalDrivingTime);
        self.driverStintTimeSec(eventRulesData.driverStintTimeSec);
        self.maxDriversCount(eventRulesData.maxDriversCount);
        self.isRefuellingAllowedInRace(eventRulesData.isRefuellingAllowedInRace);
        self.isRefuellingTimeFixed(eventRulesData.isRefuellingTimeFixed);
        self.isMandatoryPitstopRefuellingRequired(eventRulesData.isMandatoryPitstopRefuellingRequired);
        self.isMandatoryPitstopTyreChangeRequired(eventRulesData.isMandatoryPitstopTyreChangeRequired);
        self.isMandatoryPitstopSwapDriverRequired(eventRulesData.isMandatoryPitstopSwapDriverRequired);
        self.tyreSetCount(eventRulesData.tyreSetCount);
    };
}

function Group(label, children) {
    this.label = ko.observable(label);
    this.children = ko.observableArray(children);
}

function Option(label, value) {
    this.label = ko.observable(label);
    this.value = ko.observable(value);
}

var mapping = {
    'ignore': [
        "circuits", 
        "availabletrackMedalsRequirement", 
        "availableTracks", 
        "availableHoursOfDay",
        "availableTimeMultipliers",
        "availableSessionTypes",
        "availableDayOfWeekend",
        "availableWeatherRandomness",
        "availableCarGroup",
    ]
}

function rawNumber(val) {
    return Number(val.toString().replace(/[^\d\.\-]/g, ''));
}

ko.numericObservable = function(initialValue) {
    var _actual = ko.observable(initialValue);

    var result = ko.dependentObservable({
        read: function() {
            return _actual();
        },
        write: function(newValue) {
            var parsedValue = parseFloat(newValue);
            _actual(isNaN(parsedValue) ? newValue : parsedValue);
        }
    });

    return result;
};

var viewModel = new myViewModel();

ko.applyBindings(viewModel);

var redlineDivOneDefault = {
    settings: {
        serverName: "Redline Racing League - Sunday Div 1 GT3",
        password: "rrl",
        adminPassword: "steward",
        randomizeTrackWhenEmpty: 0,
        trackMedalsRequirement: -1,
        safetyRatingRequirement: -1,
        racecraftRatingRequirement: -1,
        allowAutoDQ: -1,
        spectatorSlots: 20,
        spectatorPassword: "view",
        dumpLeaderboards: 0,
        isCPServer: 0,
        competitionRatingMin: -1,
        competitionRatingMax: -1,
        configVersion: 1,
        isRaceLocked: 0,
        region: "EU",
        maxCarSlots: 20
      },
    event: {
        track: "suzuka_2019",
        carGroup: "GT3",
        preRaceWaitingTimeSeconds: 180,
        sessionOverTimeSeconds: 180,
        postQualySeconds: 180,
        postRaceSeconds: 180,
        ambientTemp: 22,
        trackTemp: 26,
        cloudLevel: 0.3,
        rain: 0,
        weatherRandomness: 2,
        sessions: [
          {
            hourOfDay: 12,
            dayOfWeekend: 1,
            sessionType: "P",
            sessionDurationMinutes: 120,
            timeMultiplier: 2
          },
          {
            sessionType: "Q",
            dayOfWeekend: 2,
            hourOfDay: 14,
            sessionDurationMinutes: 15,
            timeMultiplier: 2
          },
          {
            sessionType: "R",
            dayOfWeekend: 3,
            hourOfDay: 14,
            sessionDurationMinutes: 60,
            timeMultiplier: 2
          }
        ],
        configVersion: 1
    },
    eventRules: {
        qualifyStandingType: 1,
        superpoleMaxCar: -1,
        pitWindowLengthSec: 2400,
        mandatoryPitstopCount: 1,
        maxTotalDrivingTime: -1,
        driverStintTimeSec: -1,
        maxDriversCount: 1,
        isRefuellingAllowedInRace: true,
        isRefuellingTimeFixed: true,
        isMandatoryPitstopRefuellingRequired: true,
        isMandatoryPitstopTyreChangeRequired: true,
        isMandatoryPitstopSwapDriverRequired: false,
        tyreSetCount: 50
    }
};

var redlineDivTwoDefault = {
    settings: {
        serverName: "Redline Racing League - Sunday Div 2 GT3",
        password: "rrl",
        adminPassword: "steward",
        randomizeTrackWhenEmpty: 0,
        trackMedalsRequirement: -1,
        safetyRatingRequirement: -1,
        racecraftRatingRequirement: -1,
        allowAutoDQ: -1,
        spectatorSlots: 20,
        spectatorPassword: "view",
        dumpLeaderboards: 0,
        isCPServer: 0,
        competitionRatingMin: -1,
        competitionRatingMax: -1,
        configVersion: 1,
        isRaceLocked: 0,
        region: "EU",
        maxCarSlots: 20
      },
    event: {
        track: "misano_2019",
        carGroup: "GT3",
        preRaceWaitingTimeSeconds: 180,
        sessionOverTimeSeconds: 180,
        postQualySeconds: 180,
        postRaceSeconds: 180,
        ambientTemp: 22,
        trackTemp: 26,
        cloudLevel: 0.3,
        rain: 0,
        weatherRandomness: 2,
        sessions: [
            {
                hourOfDay: 12,
                dayOfWeekend: 1,
                sessionType: "P",
                sessionDurationMinutes: 120,
                timeMultiplier: 2
              },
              {
                sessionType: "Q",
                dayOfWeekend: 2,
                hourOfDay: 14,
                sessionDurationMinutes: 15,
                timeMultiplier: 2
              },
              {
                sessionType: "R",
                dayOfWeekend: 3,
                hourOfDay: 14,
                sessionDurationMinutes: 60,
                timeMultiplier: 2
              }
        ],
        configVersion: 1
    },
    eventRules: {
        qualifyStandingType: 1,
        superpoleMaxCar: -1,
        pitWindowLengthSec: 2400,
        mandatoryPitstopCount: 1,
        maxTotalDrivingTime: -1,
        driverStintTimeSec: -1,
        maxDriversCount: 1,
        isRefuellingAllowedInRace: true,
        isRefuellingTimeFixed: true,
        isMandatoryPitstopRefuellingRequired: true,
        isMandatoryPitstopTyreChangeRequired: true,
        isMandatoryPitstopSwapDriverRequired: false,
        tyreSetCount: 50
    }
};

var redlineGT4Default = {
    settings: {
        serverName: "Redline Racing League - Wednesday GT4",
        password: "rrl",
        adminPassword: "steward",
        randomizeTrackWhenEmpty: 0,
        trackMedalsRequirement: -1,
        safetyRatingRequirement: -1,
        racecraftRatingRequirement: -1,
        allowAutoDQ: -1,
        spectatorSlots: 20,
        spectatorPassword: "view",
        dumpLeaderboards: 0,
        isCPServer: 0,
        competitionRatingMin: -1,
        competitionRatingMax: -1,
        configVersion: 1,
        isRaceLocked: 0,
        region: "EU",
        maxCarSlots: 20
      },
    event: {
        track: "hungaroring_2019",
        carGroup: "GT4",
        preRaceWaitingTimeSeconds: 180,
        sessionOverTimeSeconds: 180,
        postQualySeconds: 180,
        postRaceSeconds: 180,
        ambientTemp: 22,
        trackTemp: 26,
        cloudLevel: 0.3,
        rain: 0,
        weatherRandomness: 2,
        sessions: [
          {
            hourOfDay: 12,
            dayOfWeekend: 1,
            sessionType: "P",
            sessionDurationMinutes: 10,
            timeMultiplier: 2
          },
          {
            sessionType: "Q",
            dayOfWeekend: 2,
            hourOfDay: 12,
            sessionDurationMinutes: 4,
            timeMultiplier: 2
          },
          {
            sessionType: "R",
            dayOfWeekend: 2,
            hourOfDay: 14,
            sessionDurationMinutes: 20,
            timeMultiplier: 2
          },
          {
            sessionType: "Q",
            dayOfWeekend: 3,
            hourOfDay: 14,
            sessionDurationMinutes: 4,
            timeMultiplier: 2
          },
          {
            sessionType: "R",
            dayOfWeekend: 3,
            hourOfDay: 16,
            sessionDurationMinutes: 20,
            timeMultiplier: 2
          }
        ],
        configVersion: 1
    },
    eventRules: {
        qualifyStandingType: 1,
        superpoleMaxCar: -1,
        pitWindowLengthSec: -1,
        mandatoryPitstopCount: 0,
        maxTotalDrivingTime: -1,
        driverStintTimeSec: -1,
        maxDriversCount: 1,
        isRefuellingAllowedInRace: true,
        isRefuellingTimeFixed: true,
        isMandatoryPitstopRefuellingRequired: true,
        isMandatoryPitstopTyreChangeRequired: true,
        isMandatoryPitstopSwapDriverRequired: false,
        tyreSetCount: 50
    }
};

var redlineEnduranceDefault = {
    settings: {
        serverName: "Redline Racing League - Friday 2 Hour Endurance",
        password: "rrl",
        adminPassword: "steward",
        randomizeTrackWhenEmpty: 0,
        trackMedalsRequirement: -1,
        safetyRatingRequirement: -1,
        racecraftRatingRequirement: -1,
        allowAutoDQ: -1,
        spectatorSlots: 20,
        spectatorPassword: "view",
        dumpLeaderboards: 0,
        isCPServer: 0,
        competitionRatingMin: -1,
        competitionRatingMax: -1,
        configVersion: 1,
        isRaceLocked: 0,
        region: "EU",
        maxCarSlots: 20
      },
    event: {
        track: "spa_2019",
        carGroup: "FreeForAll",
        preRaceWaitingTimeSeconds: 180,
        sessionOverTimeSeconds: 180,
        postQualySeconds: 180,
        postRaceSeconds: 180,
        ambientTemp: 22,
        trackTemp: 26,
        cloudLevel: 0.3,
        rain: 0,
        weatherRandomness: 2,
        sessions: [
            {
                hourOfDay: 12,
                dayOfWeekend: 1,
                sessionType: "P",
                sessionDurationMinutes: 120,
                timeMultiplier: 2
              },
              {
                sessionType: "Q",
                dayOfWeekend: 2,
                hourOfDay: 14,
                sessionDurationMinutes: 15,
                timeMultiplier: 2
              },
              {
                sessionType: "R",
                dayOfWeekend: 3,
                hourOfDay: 14,
                sessionDurationMinutes: 120,
                timeMultiplier: 2
              }
        ],
        configVersion: 1
    },
    eventRules: {
        qualifyStandingType: 1,
        superpoleMaxCar: -1,
        pitWindowLengthSec: 2400,
        mandatoryPitstopCount: 1,
        maxTotalDrivingTime: -1,
        driverStintTimeSec: -1,
        maxDriversCount: 1,
        isRefuellingAllowedInRace: true,
        isRefuellingTimeFixed: true,
        isMandatoryPitstopRefuellingRequired: true,
        isMandatoryPitstopTyreChangeRequired: true,
        isMandatoryPitstopSwapDriverRequired: false,
        tyreSetCount: 50
    }
};

var redlinePracticeRaceLobby1Default = {
    settings: {
        serverName: "Redline Lobby 1 Practice"
    },
    event: {
        track: "kyalami_2019"
    }
};

var redlinePracticeRaceLobby2Default = {
    settings: {
        serverName: "Redline Lobby 2 Practice"
    },
    event: {
        track: "mount_panorama_2019"
    }
};

netlifyIdentity.on('login', user => 
{
    console.log('login', user)

    if(user != undefined && user != null)
    {
        viewModel.defaults.addPreset(new presetModel('Sunday GT3 Div 1', 'btn-danger', redlineDivOneDefault));
        viewModel.defaults.addPreset(new presetModel('Sunday GT3 Div 2', 'btn-info', redlineDivTwoDefault));
        viewModel.defaults.addPreset(new presetModel('Wednesday GT4 ', 'btn-success', redlineGT4Default));
        viewModel.defaults.addPreset(new presetModel('Friday Endurance', 'btn-warning', redlineEnduranceDefault));
    }
});

// viewModel.defaults.addPreset(new presetModel('Sunday GT3 Div 1', 'btn-danger', redlineDivOneDefault));
// viewModel.defaults.addPreset(new presetModel('Sunday GT3 Div 2', 'btn-info', redlineDivTwoDefault));
// viewModel.defaults.addPreset(new presetModel('Wednesday GT4 ', 'btn-success', redlineGT4Default));
// viewModel.defaults.addPreset(new presetModel('Friday Endurance', 'btn-warning', redlineEnduranceDefault));

netlifyIdentity.on('logout', () => 
{
    console.log('Logged out');

    viewModel.defaults.clearPresets();
});

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
        $('.toast').toast('show');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
};

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        $('.toast').toast('show');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
};

var copySettingsBtn = document.querySelector('.copy-settings-btn'),
    copyEventBtn = document.querySelector('.copy-event-btn'),
    copyEventRulesBtn = document.querySelector('.copy-eventrules-btn');

var settingsJson = document.querySelector('.settings-json'),
    eventJson = document.querySelector('.event-json'),
    eventrulesJson = document.querySelector('.eventrules-json');

copySettingsBtn.addEventListener('click', function(event) {
    copyTextToClipboard(settingsJson.innerHTML);
});

copyEventBtn.addEventListener('click', function(event) {
    copyTextToClipboard(eventJson.innerHTML);
});

copyEventRulesBtn.addEventListener('click', function(event) {
    copyTextToClipboard(eventrulesJson.innerHTML);
});

$('.toast').toast({ delay: 1000 });
