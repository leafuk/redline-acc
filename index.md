<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <!-- <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"> -->
    <!-- <meta name="generator" content="Jekyll v4.1.1"> -->
    <title>ACC Web</title>

    <!-- <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/checkout/"> -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- Favicons -->
    <!-- <link rel="apple-touch-icon" href="/docs/4.5/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
    <link rel="icon" href="/docs/4.5/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/docs/4.5/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
    <link rel="manifest" href="/docs/4.5/assets/img/favicons/manifest.json">
    <link rel="mask-icon" href="/docs/4.5/assets/img/favicons/safari-pinned-tab.svg" color="#563d7c">
    <link rel="icon" href="/docs/4.5/assets/img/favicons/favicon.ico">
    <meta name="msapplication-config" content="/docs/4.5/assets/img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#563d7c"> -->


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .jumbotron {
            /* background-image: url('TCKzsLjuTQmw0ter4S8g9g.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat; */
            color: white;
        }

        .demo_wrap {
            position: relative;
            background: #5C97FF;
            overflow: hidden;
        }
        .demo_wrap h1, .demo_wrap p {
            /* padding: 50px; */
            position: relative;
            z-index: 2;
        }
        /* You could use :after - it doesn't really matter */
        .demo_wrap:before {
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0.6;
            background-image: url('TCKzsLjuTQmw0ter4S8g9g.webp');
            background-size: cover;
            /* background-position: center; */
            background-repeat: no-repeat;
            background-position: center;
            /* background-size: cover; */
        }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }

        .jumbotron {
            padding: 1rem 2rem;
        }
      }
        
    </style>
    <!-- Custom styles for this template -->
    <link href="form-validation.css" rel="stylesheet">
  </head>
  <body class="bg-light">

    <div class="jumbotron demo_wrap">
        <div class="container">
          <h1 class="display-3">Redline Racing League</h1>
          <p>ACC Configuration Wizard</p>
          <!-- <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p> -->
        </div>
      </div>

    <div class="container">
    <!-- <div class="py-5 text-center"> -->
        <!-- <img class="d-block mx-auto mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
        <!-- <h2>Assetto Corsa Competizione</h2>
        <p class="lead">Configuration Wizard</p>
    </div> -->

    <div class="row">
        <div class="col-md-3">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Settings</a>
            <a class="nav-link" id="v-pills-event-tab" data-toggle="pill" href="#v-pills-event" role="tab" aria-controls="v-pills-event" aria-selected="false">Event</a>
            <a class="nav-link" id="v-pills-eventRules-tab" data-toggle="pill" href="#v-pills-eventRules" role="tab" aria-controls="v-pills-eventRules" aria-selected="false">Event Rules</a>
            <!-- <a class="nav-link" id="v-pills-custom-tab" data-toggle="pill" href="#v-pills-custom" role="tab" aria-controls="v-pills-custom" aria-selected="false">Custom</a> -->
          </div>

        <hr class="mb-4">
        <h5 class="mb-3">Presets</h5>
        <button type="button" class="btn btn-primary btn-block" data-bind="click: loadModel.bind($data, redlineDivOneDefault)">Sunday Division 1 GT3</button>
        <button type="button" class="btn btn-secondary btn-block" data-bind="click: loadModel.bind($data, redlineDivTwoDefault)">Sunday Division 2 GT3</button>
        <button type="button" class="btn btn-success btn-block" data-bind="click: loadModel.bind($data, redlineGT4Default)">Wednesday GT4</button>
        <button type="button" class="btn btn-danger btn-block" data-bind="click: loadModel.bind($data, redlineEnduranceDefault)">2Hr Endurance</button>
        <button type="button" class="btn btn-warning btn-block" data-bind="click: loadModel.bind($data, redlinePracticeRaceLobby1Default)">Lobby 1 Practice Race</button>
        <button type="button" class="btn btn-info btn-block" data-bind="click: loadModel.bind($data, redlinePracticeRaceLobby2Default)">Lobby 2 Practice Race</button>
        <!-- <button type="button" class="btn btn-light btn-block">Block level button</button> -->
        <!-- <button type="button" class="btn btn-dark btn-block">Block level button</button> -->
          <!-- <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action btn-primary" data-bind="click: loadModel.bind($data, redlineDivOneDefault)">Sunday Division 1 GT3</button>
            <button type="button" class="list-group-item list-group-item-action" data-bind="click: loadModel.bind($data, redlineDivTwoDefault)">Sunday Division 2 GT3</button>
            <button type="button" class="list-group-item list-group-item-action" data-bind="click: loadModel.bind($data, redlineGT4Default)">Wednesday GT4</button>
            <button type="button" class="list-group-item list-group-item-action" data-bind="click: loadModel.bind($data, redlineEnduranceDefault)">2Hr Endurance</button>
          </div> -->
        </div>
        <div class="col-md-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                
                <!-- <div class="row"> -->
        
                    <!-- <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Product name</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$12</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Second product</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$8</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Third item</h6>
                            <small class="text-muted">Brief description</small>
                        </div>
                        <span class="text-muted">$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">-$5</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                        </li>
                    </ul>
            
                    <form class="card p-2">
                        <div class="input-group">
                        <input type="text" class="form-control" placeholder="Promo code">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary">Redeem</button>
                        </div>
                        </div>
                    </form>
                    </div> -->
            
                    <!-- <div class="col-md-8 order-md-1"> -->
                        <h4 class="mb-3">Settings</h4>
                        
                        <form class="needs-validation" novalidate data-bind="using: settings">
            
                            <div class="mb-3">
                                <label for="serverName">Server name</label>
                                <input type="text" data-bind="textInput: serverName" class="form-control" id="serverName" placeholder="Server Name" required>
                                <small class="text-muted">The server name displayed in the ACC UI pages</small>
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="password">Lobby Password</label>
                                    <input type="text" data-bind="textInput: password" class="form-control" id="password" placeholder="Password" required>
                                    <small class="text-muted">Password required to enter this server. If a password is set, the server is declared “Private Multiplayer”.</small>
                                    <div class="invalid-feedback">
                                        Valid password is required.
                                    </div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="adminPassword">Admin Password</label>
                                    <input type="text" data-bind="textInput: adminPassword" class="form-control" id="adminPassword" placeholder="Admin Password" required>
                                    <small class="text-muted">Password to elevate via “Server admin commands”</small>
                                    <div class="invalid-feedback">
                                        Valid password is required.
                                    </div>
                                </div>
                            </div>
            
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="password">Track Medals Requirement</label>
                                    <select data-bind="value: trackMedalsRequirement, options: availabletrackMedalsRequirement" class="form-control">
                                    </select>
                                    <small class="text-muted">Defines the amount of track medals that a user has to have for the given track</small>
                                </div> 
            
                                <div class="col-md-6 mb-3">
                                    <label for="safetyRatingRequirement">Safety Rating Requirement</label>
                                    <input type="number" data-bind="textInput: safetyRatingRequirement" class="form-control" id="safetyRatingRequirement" placeholder="0" min="-1" max="99" required>
                                    <small class="text-muted">Defines the Safety Rating (SA) that a user must have to join this server. Set value of -1 to disable</small>
                                    <div class="invalid-feedback">
                                        Valid password is required.
                                    </div>
                                </div>
                            </div>
            
                            <div class="d-block my-3">
                                <label for="adminPassword">Randomize Track When Empty</label>
                                    <div class="custom-control custom-radio">
                                    <input id="randomizeTrackWhenEmptyYes" name="randomizeTrackWhenEmpty" type="radio" class="custom-control-input" data-bind = "checked: randomizeTrackWhenEmpty, checkedValue: 1" required>
                                    <label class="custom-control-label" for="randomizeTrackWhenEmptyYes">Yes</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="randomizeTrackWhenEmptyNo" name="randomizeTrackWhenEmpty" type="radio" class="custom-control-input" data-bind = "checked: randomizeTrackWhenEmpty, checkedValue: 0" required>
                                    <label class="custom-control-label" for="randomizeTrackWhenEmptyNo">No</label>
                                </div>  
                                <small class="text-muted">If set to 1, the server will change to a random track when the last drivers leaves ( which causes a reset to FP1 ). The “track” property will only define the default state for the first session.</small>
                            </div>
            
                            <!-- <div class="mb-3">
                                <label for="username">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                    </div>
                                    <input type="text" class="form-control" id="username" placeholder="Username" required>
                                    <div class="invalid-feedback" style="width: 100%;">
                                    Your username is required.
                                    </div>
                                </div>
                            </div> -->
            
                            <!-- <div class="mb-3">
                            <label for="email">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control" id="email" placeholder="you@example.com">
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                            </div> -->
            
                            <!-- <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                            </div> -->
            
                            <!-- <div class="mb-3">
                            <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                            </div> -->
            
                            <!-- <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100" id="country" required>
                                <option value="">Choose...</option>
                                <option>United States</option>
                                </select>
                                <div class="invalid-feedback">
                                Please select a valid country.
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100" id="state" required>
                                <option value="">Choose...</option>
                                <option>California</option>
                                </select>
                                <div class="invalid-feedback">
                                Please provide a valid state.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required>
                                <div class="invalid-feedback">
                                Zip code required.
                                </div>
                            </div>
                            </div> -->
                            <!-- <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="same-address">
                            <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                            </div>
                            <div class="custom-control custom-radio"> -->
                            <!-- <input type="checkbox" class="custom-control-input" id="save-info" data-bind="checked: isCPServer, checkedValue: 1, checked: isCPServer" /> -->
                            <!-- <label class="custom-control-label" for="save-info">Is CP Server</label> -->
                            <!-- </div>
                            <hr class="mb-4"> -->
            
                            <!-- <h4 class="mb-3">Is CP Server?</h4>
            
                            <div class="d-block my-3">
                                <div class="custom-control custom-radio">
                                    <input id="cpServerYes" name="IsCPServer" type="radio" class="custom-control-input" data-bind = "checked: isCPServer, checkedValue: 1" required>
                                    <label class="custom-control-label" for="cpServerYes">Yes</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="cpServerNo" name="IsCPServer" type="radio" class="custom-control-input" data-bind = "checked: isCPServer, checkedValue: 0" required>
                                    <label class="custom-control-label" for="cpServerNo">No</label>
                                </div>  
                            </div> -->
                            <!-- <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                Name on card is required
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="cc-number">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                                <div class="invalid-feedback">
                                Credit card number is required
                                </div>
                            </div>
                            </div> -->
                            <!-- <div class="row">
                            <div class="col-md-3 mb-3">
                                <label for="cc-expiration">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                                <div class="invalid-feedback">
                                Expiration date required
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="cc-cvv">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                                <div class="invalid-feedback">
                                Security code required
                                </div>
                            </div>
                            </div> -->
                            <!-- <hr class="mb-4">
                            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button> -->
                        </form>

                        <hr class="mb-4">
            
                        <pre class="text-muted" data-bind="text: JSON.stringify(ko.mapping.toJS($root.settings, mapping), null, 2);"></pre>
                        

                    <!-- </div> -->
                <!-- </div> -->

            </div>

            <div class="tab-pane fade" id="v-pills-event" role="tabpanel" aria-labelledby="v-pills-event-tab">
                <h4 class="mb-3">Event</h4>
            
                <form class="needs-validation" novalidate data-bind="using: event">

                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <label for="track">Track</label>
                            <select data-bind="foreach: availableTracks, value:track" class="form-control dropdown">
                                <optgroup data-bind="attr: {label: label}, foreach: children">
                                    <option data-bind="text: label, value: value"></option>
                                </optgroup>
                            </select>
                            <small class="text-muted">The track we run, see “Track name list”. Setting a wrong value
                                will also print out the available track keys in the log. With the
                                1.1 update containing the 2019 season content, each track has a
                                _2019 variant. Using this track will set the BoP and track grip
                                correspondingly</small>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="carGroup">Car Group</label>
                            <select data-bind="value: carGroup, options: availableCarGroup,
                                optionsText: 'name',
                                optionsValue: 'id'"
                            class="form-control dropdown">
                            </select>
                            <small class="text-muted">
                                Defines the car group for this server. Possible values are
                                <ul>
                                    <li>FreeForAll = where “FreeForAll” will allow any driver to join with any car ( that he defined as Primary Car ).</li>
                                    <li>GT3 = Limit this server to GT3 Vehicles</li>
                                    <li>GT4 = Limit this server to GT4 Vehicles</li>
                                    <li>Cup = Limit this server to Porsche 991 II GT3 Cup</li>
                                    <li>ST = Limit this server to Lamborghini Supertrofeo</li>
                                </ul>
                            </small>
                        </div>

                    </div>

                    <div class="row" >
                        <div class="col-md-6 mb-3">
                            <label for="preRaceWaitingTimeSeconds">Pre-Race Waiting Time Seconds</label>
                            <input type="number" data-bind="textInput: preRaceWaitingTimeSeconds" class="form-control" id="preRaceWaitingTimeSeconds" placeholder="120" min="30" required>
                            <small class="text-muted">Preparation time before a race. Cannot be less than 30s.</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="sessionOverTimeSeconds">Session Over Time Seconds</label>
                            <input type="number" data-bind="textInput: sessionOverTimeSeconds" class="form-control" id="sessionOverTimeSeconds" placeholder="120" min="30" required>
                            <small class="text-muted">Time after that a session is forcibly closing after the timer
                                reached 0:00. Something like 107% of the expected laptime is
                                recommended (careful: default 2 minutes does not properly
                                cover tracks like Spa or Silverstone).</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                    <div class="row" >
                        <div class="col-md-6 mb-3">
                            <label for="postQualySeconds">Post Qualy Seconds</label>
                            <input type="number" data-bind="textInput: postQualySeconds" class="form-control" id="postQualySeconds" placeholder="20" min="1" required>
                            <small class="text-muted">The time after the last driver is finished (or the
                                sessionOverTimeSeconds passed) in Q sessions and the race start.
                                Should not be set to 0, otherwise grid spawning is not secure.</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="postRaceSeconds">Post Race Seconds</label>
                            <input type="number" data-bind="textInput: postRaceSeconds" class="form-control" id="postRaceSeconds" placeholder="120" min="0" required>
                            <small class="text-muted">Additional time after the race ended for everyone, before the
                                next race weekend starts.</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                    <hr class="mb-3">
                    <h5 class="mb-3">Weather</h5>

                    <div class="row" >
                        <div class="col-md-6 mb-3">
                            <label for="ambientTemp">Ambient Temp</label>
                            <input type="number" data-bind="textInput: ambientTemp" class="form-control" id="ambientTemp" placeholder="26" min="12" max="40" required>
                            <small class="text-muted">Sets the baseline ambient temperature in °C.
                                <a href="https://www.acc-wiki.info/wiki/Multiplayer_Overview#Race_weekend" target=”_blank”>Race Weekend Simulation</a>
                                cloudLevel
                                rain
                                weatherRandomness</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="postRaceSeconds">Track Temp</label>
                            <input type="number" data-bind="textInput: trackTemp" class="form-control" id="trackTemp" placeholder="30" min="12" max="40" required>
                            <small class="text-muted">Obsolete: Track temperatures are always simulated based on
                                ambient temperature, sun angle, clouds and other aspects.</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                    <div class="row" >
                        <div class="col-md-6 mb-3">
                            <label for="cloudLevel">Cloud Level</label>
                            <input type="number" data-bind="textInput: cloudLevel" class="form-control" id="cloudLevel" placeholder="0.3" min="0" max="1" step="0.1" required>
                            <small class="text-muted">Sets the baseline cloud level
                                <a href="https://www.acc-wiki.info/wiki/Multiplayer_Overview#Race_weekend" target=”_blank”>Race Weekend Simulation</a>
                                Values 0.0, 0.1, .... 1.0</small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="rain">Rain</label>
                            <input type="number" data-bind="textInput: rain" class="form-control" id="rain" placeholder="0" min="0" max="1" step="0.1" required>
                            <small class="text-muted">
                                If weather randomness is off, defines the static rain level. With dynamic weather, it increases the rain chance.
                                Values greater than 0.1 can override the value of Cloud Level.
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="weatherRandomness">weatherRandomness</label>
                        <select data-bind="value: weatherRandomness, options: availableWeatherRandomness,
                            optionsText: 'name',
                            optionsValue: 'id'"
                        class="form-control dropdown">
                        </select>
                        <small class="text-muted">Sets the dynamic weather level, see “<a href="https://www.acc-wiki.info/wiki/Multiplayer_Overview#Race_weekend" target=”_blank”>Race Weekend Simulation</a>”.
                            0 = static weather; 1-4 fairly realistic weather; 5-7 more
                            sensational (but less chaotic compared to versions before
                            1.0.7)</small>
                    </div>

                    <hr class="mb-3">
                    <h5 class="mb-3">Sessions</h5>

                    <div data-bind="foreach: sessions">
                        <div class="card shadow mb-5 bg-white rounded">
                            <div class="card-header">
                                Session <span data-bind="text: ($index() + 1)"> </span> 
                                <button type="button" class="close" aria-label="Close">
                                    <span data-bind="click: $parent.removeSession"  aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="sessionType">Session Type</label>
                                    <select data-bind="value: sessionType, options: $parent.availableSessionTypes,
                                        optionsText: 'name',
                                        optionsValue: 'id'"
                                     class="form-control dropdown">
                                    </select>
                                    <small class="text-muted">Race session type: P, Q, R for (P)ractice, (Q)ualy, (R)ace</small>
                                </div>

                                <div class="row" >

                                    <div class="col-md-6 mb-3">
                                        <label for="dayOfWeekend">Day of weekend</label>
                                        <select data-bind="value: dayOfWeekend, options: $parent.availableDayOfWeekend,
                                            optionsText: 'name',
                                            optionsValue: 'id'"
                                        class="form-control dropdown">
                                        </select>
                                        <small class="text-muted">Race day (1 = Friday, 2 = Saturday, 3 = Sunday) – relevant to the
                                            grip and weather simulation.</small>
                                    </div>

                                    <div class="col-md-6 mb-3">
                                        <label for="hourOfDay">Hour of Day</label>
                                        <select data-bind="value: hourOfDay, options: $parent.availableHoursOfDay" class="form-control dropdown"></select>
                                        <small class="text-muted">Session starting hour of the day (values 0 - 23)</small>
                                    </div>
                                </div>

                                <div class="row" >

                                    <div class="col-md-6 mb-3">
                                        <label for="sessionDurationMinutes">Session Duration</label>
                                        <input type="number" data-bind="textInput: sessionDurationMinutes" class="form-control" id="sessionDurationMinutes" placeholder="0" min="0" max="1440" required>
                                        <small class="text-muted">Session duration in minutes</small>
                                    </div>  

                                    <div class="col-md-6 mb-3">
                                        <label for="hourOfDay">Time Multiplier</label>
                                        <select data-bind="value: timeMultiplier, options: $parent.availableTimeMultipliers" class="form-control dropdown"></select>
                                        <small class="text-muted">Rate at which the session time advances in realtime.
                                            Values 0, 1, … 24</small>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>

                    <button class="btn btn-primary" data-bind="click: addSession">Add new session</button>

                </form>

                <hr class="mb-4">

                <pre class="text-muted" data-bind="text: JSON.stringify(ko.mapping.toJS($root.event, mapping), null, 2);"></pre>

            </div>

            <div class="tab-pane fade" id="v-pills-eventRules" role="tabpanel" aria-labelledby="v-pills-eventRules-tab">
                <h4 class="mb-3">Event Rules</h4>
            
                <form class="needs-validation" novalidate data-bind="using: eventRules">

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="pitWindowLengthSec">Pit Window Length Seconds</label>
                            <input type="number" data-bind="textInput: pitWindowLengthSec" class="form-control" id="pitWindowLengthSec" placeholder="-1" min="-1" required>
                            <small class="text-muted">
                                Defines a pit window at the middle of the race. Obviously covers the Sprint series format.
                                <ul>
                                    <li>-1 = will disable the pit window</li>
                                    <li>600 = Insert the length of the pit stop window here in seconds. ( 10 minutes = 600 seconds ) - Only use with ↓mandatoryPitstopCount with a value of 1 or higher.</li>
                                </ul>        
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <label for="mandatoryPitstopCount">Mandatory Pitstop Count</label>
                            <input type="number" data-bind="textInput: mandatoryPitstopCount" class="form-control" id="mandatoryPitstopCount" placeholder="0" min="0" required>
                            <small class="text-muted">
                                Defines the basic mandatory pit stops. If the value is greater zero, any car that did not execute the mandatory pitstops will be disqualified at the end of the race. 
                                The necessary actions can be further configured using the “isMandatoryPitstopXYRequired” properties. 
                                A value of zero disables the feature
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="isRefuellingAllowedInRace" data-bind="checked: isRefuellingAllowedInRace">
                                <label class="custom-control-label" for="isRefuellingAllowedInRace">Is Refuelling Allowed In Race</label>
                            </div>
                            <small class="text-muted">
                                Defines if refuelling is allowed during the race pitstops.
                                <ul>
                                    <li>true = refueling possible during the race</li>
                                    <li>false = No refueling possible during the race</li>
                                </ul> 
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="isRefuellingTimeFixed" data-bind="checked: isRefuellingTimeFixed">
                                <label class="custom-control-label" for="isRefuellingTimeFixed">Is Refuelling Time Fixed</label>
                            </div>
                            <small class="text-muted">
                                If set to true, any refuelling will take the same amount of time. 
                                If turned off, refuelling will consume time linear to the amount refuelled. 
                                Very useful setting to balance fuel efficient cars, especially if combined with other features.
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="isMandatoryPitstopRefuellingRequired" data-bind="checked: isMandatoryPitstopRefuellingRequired">
                                <label class="custom-control-label" for="isMandatoryPitstopRefuellingRequired">Is Mandatory Pitstop Refuelling Required</label>
                            </div>
                            <small class="text-muted">
                                Defines if a mandatory pitstop requires refuelling.
                                <ul>
                                    <li>true = every driver must refuel at least 1 liter</li>
                                    <li>false = refuel as needed</li>
                                </ul>
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="isMandatoryPitstopTyreChangeRequired" data-bind="checked: isMandatoryPitstopTyreChangeRequired">
                                <label class="custom-control-label" for="isMandatoryPitstopTyreChangeRequired">Is Mandatory Pitstop Tyre Change Required</label>
                            </div>
                            <small class="text-muted">
                                Defines if a mandatory pitstop requires changing tyres.
                                <ul>
                                    <li>true = every driver must tyre change</li>
                                    <li>false = tyre change as needed</li>
                                </ul>
                            </small>
                            <div class="invalid-feedback">
                                Valid password is required.
                            </div>
                        </div>
                    </div>

                </form>
                
                <hr class="mb-4">

                <pre class="text-muted" data-bind="text: JSON.stringify(ko.mapping.toJS($root.eventRules, mapping), null, 2);"></pre>

            </div>

            <!-- <div class="tab-pane fade" id="v-pills-custom" role="tabpanel" aria-labelledby="v-pills-custom-tab">

            </div> -->

          </div>
        </div>
      </div>

    

    <hr class="mb-4">

    <!-- <div class="row">

        <div class="col-md-4 order-md-2 mb-4">
        </div>
            
        <div class="col-md-8 order-md-1">
            
        </div>
    </div> -->
</div>

    <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">&copy; 2020 Lea Foreman</p>
        <!-- <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
        </ul> -->
    </footer>
    </div>
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> -->
    <!-- <script>window.jQuery || document.write('<script src="/docs/4.5/assets/js/vendor/jquery.slim.min.js"><\/script>')</script><script src="/docs/4.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script> -->
    
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.0/knockout-min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.debug.min.js" integrity="sha512-+9kgaOpvAGdLyaCeMWkYXt4R8m/fRgbGud4wzsJQ1cwhNYrQj+a8E3pstfc6E9zuHhbyzSiC+AHxeZ5SFVyDmQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.4.1/knockout.mapping.min.js" integrity="sha512-1LyBPWtezbX0LO4X4QzhfZd9jSetVu5W0IFpMV9ecq4lJUQBR6hx8uiNfUI2Aoe7LCF4rK1NV3rY+uil4VJ3QQ==" crossorigin="anonymous"></script>
    
    <script src="script.js"></script>
</body>
</html>
