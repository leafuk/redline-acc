function myViewModel() {
    
    var self = this;
    self.settings = new settingsModel();
    self.defaults = new defaultsModel();

    var eventSessions = [
        {
            "hourOfDay": 10,
            "dayOfWeekend": 1,
            "sessionType": "P",
            "sessionDurationMinutes": 120,
            "timeMultiplier": 4
        },
        {
            "hourOfDay": 12,
            "dayOfWeekend": 2,
            "sessionType": "Q",
            "sessionDurationMinutes": 15,
            "timeMultiplier": 4
        },
        {
            "hourOfDay": 14,
            "dayOfWeekend": 3,
            "sessionType": "R",
            "sessionDurationMinutes": 60,
            "timeMultiplier": 4
        }
    ];

    self.event = new eventModel(eventSessions);
    self.eventRules = new eventRulesModel();

    self.loadModel = function(data) {
        //var test = document.getElementById('t_test');
        //var data = JSON.parse(test.innerHTML);

        console.log('login', data);

    
         ko.mapping.fromJS(data.presetObject, {}, self);
         /* var viewModel = {};
            viewModel.model = ko.mapping.fromJS(data, {}, self);
                        self.updateFromModel(self, viewModel.model);*/
     };


    // this.toJsonModel = ko.computed(function() {
    //     return ko.toJS(this);
    // }, this);

    // this.circuits = ko.computed(function() {
    //     return ['France', 'Germany', 'Spain'];
    // }, this);
};

function defaultsModel() {
    var self = this;

    self.presets = ko.observableArray([]);

    self.hasPresets = ko.computed(function() {
        return self.presets.count > 0;
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

    // self.loadModel = function(preset) {
    //     $root.loadModel(preset.presetObject);
    // }
}

function settingsModel() {
    this.serverName = ko.observable('');
    this.password = ko.observable('');
    this.adminPassword = ko.observable('');
    this.randomizeTrackWhenEmpty = ko.observable(0);
    this.trackMedalsRequirement = ko.numericObservable(3);
    this.safetyRatingRequirement = ko.numericObservable(-1);
    this.racecraftRatingRequirement = ko.numericObservable(-1);
    this.allowAutoDQ = ko.observable(-1);
    this.spectatorSlots = ko.numericObservable(0);
    this.spectatorPassword = ko.observable('');
    this.dumpLeaderboards = ko.observable(0);
    this.isCPServer = ko.observable(0);
    this.competitionRatingMin = ko.numericObservable(-1);
    this.competitionRatingMax = ko.numericObservable(-1);
    this.configVersion = ko.observable(1);
    this.isRaceLocked = ko.observable(0);
    this.region = ko.observable('EU');

    this.availabletrackMedalsRequirement = ko.observableArray([0, 1, 2, 3]);
}

function eventModel(sessions) {
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

    self.sessions = ko.mapping.fromJS(sessions);
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

    self.addSession = function() {
        this.sessions.push(new sessionModel());
    }
    
    self.removeSession = function() {
        self.sessions.remove(this);
    }
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
}

function Group(label, children) {
    this.label = ko.observable(label);
    this.children = ko.observableArray(children);
}

function Option(label, value) {
    this.label = ko.observable(label);
    this.value = ko.observable(value);
}

function sessionModel() {
    var self = this;
    
    self.sessionType = ko.observable('Q');
    self.dayOfWeekend = ko.numericObservable(0);
    self.hourOfDay = ko.numericObservable(0);

    self.sessionDurationMinutes = ko.numericObservable(0);
    self.timeMultiplier = ko.numericObservable(0);
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
        serverName: "Redline Sunday Div 1"
    },
    event: {
        sessions: [
            {
                "hourOfDay": 12,
                "dayOfWeekend": 2,
                "sessionType": "Q",
                "sessionDurationMinutes": 5,
                "timeMultiplier": 24
            }
        ],
        track: "spa"
    }
};

var redlineDivTwoDefault = {
    settings: {
        serverName: "Redline Sunday Div 2"
    },
    event: {
        track: "misano_2019"
    }
};

var redlineGT4Default = {
    settings: {
        serverName: "Redline GT4 League"
    },
    event: {
        track: "nurburgring"
    }
};

var redlineEnduranceDefault = {
    settings: {
        serverName: "Redline 2Hr Endurance"
    },
    event: {
        track: "monza"
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

netlifyIdentity.on('logout', () => 
{
    console.log('Logged out');

    viewModel.defaults.clearPresets();
});
