function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Options =
/*#__PURE__*/
function () {
  /**
   * The lowest the fps can drop to before the Deltaframe restarts to attempt to fix the
    * problem.
   * 
   * @since 1.0.0
   * 
   * @property {number}
    * 
    * @default 15
   */

  /**
   * The fps that the game loop should aim to  achieve.
   * 
   * @since 1.0.0
   * 
   * @property {number}
    * 
    * @default 60
   */

  /**
   * When the fps goes below the minFps Deltaframe will restart. This indicates how many times it will 
    * restart before stopping permanently.
   * 
   * @since 1.0.0
   * 
   * @property {number}
    * 
    * @default Infinity
   */

  /**
   * Specify the amount of milliseconds that Deltaframe should run for.
   * 
   * @since 1.0.0
   * 
   * @property {number}
    * 
    * @default Infinity
   */

  /**
   * Indicates whether setTimeout should be used even if requestAnimationFrame is supported by the user's browser.
   * 
   * @since 1.0.0
   * 
   * @property {number}
    * 
    * @default false
   */

  /**
    * @param {Object} options The initialization options passed to Deltaframe.
    */
  function Options() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$1(this, Options);

    _defineProperty$1(this, "minFps", 15);

    _defineProperty$1(this, "targetFps", 60);

    _defineProperty$1(this, "maxRestartAttempts", Infinity);

    _defineProperty$1(this, "runTime", Infinity);

    _defineProperty$1(this, "forceSetTimeout", false);

    Object.assign(this, options);
  }
  /**
   * Return the minFps as a decimal representing the amount of time before a frame should occur.
   * 
   * @since 1.0.0
   * 
   * @returns {number}
   */


  _createClass$1(Options, [{
    key: "minFpsCalc",
    get: function get() {
      return Math.floor(1000 / this.minFps);
    }
    /**
     * Return the targetFps as a decimal representing the amount of time before a frame should occur.
     * 
     * @since 1.0.0
     * 
     * @returns {number}
     */

  }, {
    key: "targetFpsCalc",
    get: function get() {
      return Math.floor(1000 / this.targetFps);
    }
  }]);

  return Options;
}();

var RequestAnimationFrame =
/*#__PURE__*/
function () {
  /**
   * A reference to the id returned by requestAnimationFrame or setTimeout so 
   * that we can cancel their operation when needed.
   * 
   * @since 0.1.0
   * 
   * @property {number}
   */

  /**
   * Keeps track of whether the loop is already running or not so it's not accidently 
   * restarted.
   * 
   * @since 0.1.0
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * The function that should be run on every update of the loop.
   * 
   * @since 0.1.0
   * 
   * @property {Function}
   * 
   * @default ()=>{}
   */

  /**
   * Indicates whether setTImeout is being used instead of requestAnimationFrame.
   * 
   * @since 0.1.0
   * 
   * @property {boolean}
   * 
   * @default false
   */
  function RequestAnimationFrame() {
    _classCallCheck$1(this, RequestAnimationFrame);

    _defineProperty$1(this, "id", 0);

    _defineProperty$1(this, "running", false);

    _defineProperty$1(this, "fn", function () {});

    _defineProperty$1(this, "usingSetTimeout", false);

    /**
     * Use the version of requestAnimationFrame that is supported by the user's browser and if none are 
     * supported, use setTimeout instead.
     * 
     * @property {RequestAnimationFrame|setTimeout}
     */
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (f) {
      return setTimeout(f, 1000 / 60);
    };
    /**
     * Use the version of cancelAnimationFrame that is supported by the user's browser and if none are supported, 
     * then setTimeout was used and so we use clearTimeout instead.
     * 
     * @property {cancelAnimationFrame}
     */


    window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function () {
      clearTimeout(this.id);
    };
  }
  /**
   * Start the operation of the requestAnimationFrame or setTimeout loop.
   * 
   * @since 0.1.0
   * 
   * @param {Function} fn The function to run every update of the loop.
   * @param {boolean} forceSetTimeout Indicates whether setTimeout should be used even if the user's browser supports requestAnimationFrame.
   */


  _createClass$1(RequestAnimationFrame, [{
    key: "start",
    value: function start(fn, forceSetTimeout) {
      var _this = this;

      if (this.running) return;
      this.running = true;
      this.fn = fn;

      if (forceSetTimeout) {
        this.usingSetTimeout = true;
        this.updateTimeout();
      } else {
        window.requestAnimationFrame(function (time) {
          return _this.updateRAF(time);
        });
      }
    }
    /**
     * Call requestAnimationFrame recursively so that the loop keeps going and
     * also send the timestamps over to Deltaframe.
     * 
     * @since 0.1.0
     * 
     * @param {number} timestamp The timestamp from the most recent requestAnimationFrame request.
     */

  }, {
    key: "updateRAF",
    value: function updateRAF(timestamp) {
      var _this2 = this;

      this.running = true;
      this.fn(timestamp);
      this.id = window.requestAnimationFrame(function (time) {
        return _this2.updateRAF(time);
      });
    }
    /**
     * Call setTimeout recursively so that the loop keeps going and also send
     * the timestamps over to Deltaframe.
     * 
     * @since 0.1.0
     */

  }, {
    key: "updateTimeout",
    value: function updateTimeout() {
      var _this3 = this;

      var timestamp = window.performance.now();
      this.fn(timestamp);
      this.id = window.setTimeout(function () {
        return _this3.updateTimeout();
      }, 1000 / 60);
    }
    /**
     * Restart the requestAnimation or setTimeout loop.
     * 
     * @since 0.1.0
     */

  }, {
    key: "restart",
    value: function restart() {
      var _this4 = this;

      if (this.usingSetTimeout) window.clearTimeout(this.id);else window.cancelAnimationFrame(this.id);
      this.id = 0;
      this.running = false;
      if (this.usingSetTimeout) this.updateTimeout();else window.requestAnimationFrame(function (time) {
        return _this4.updateRAF(time);
      });
      this.running = true;
    }
    /**
     * Stop the loop by calling cancelAnimationFrame or clearTimeout.
     * 
     * @since 0.1.0
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.usingSetTimeout) window.clearTimeout(this.id);else window.cancelAnimationFrame(this.id);
      this.id = 0;
      this.running = false;

      this.fn = function () {};

      return;
    }
  }]);

  return RequestAnimationFrame;
}();

/**
 * Deltaframe is an animation and game loop manager that makes sure your application
 * is punctual and performant.
 * 
 * @author Robert Corponoi <robertcorponoi@gmail.com>
 * 
 * @version 1.0.2
 */

var Deltaframe =
/*#__PURE__*/
function () {
  /**
   * A reference to the options for this instance of Deltaframe.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {Options}
   */

  /**
   * The amount of times Deltaframe has had to restart due to the average fps
   * dipping below the minimum fps for a series of frames.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {number}
   */

  /**
   * Indicates whether Deltaframe is currently is currently running and not paused
   * or stopped.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {boolean}
   */

  /**
   * Indicates whether Deltaframe is currently paused.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {boolean}
   */

  /**
   * The function that will be called on every Deltaframe update.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {Function}
   */

  /**
   * The current frame that Deltaframe is on.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {number}
   */

  /**
   * The current timestamp as of the latest call to RequestAnimationFrame.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {DOMHighResTimeStamp|number}
   */

  /**
   * The timestamp before the current timestamp.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {DOMHighResTimeStamp|number}
   */

  /**
   * The difference in time between the current time and the last time.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {number}
   */

  /**
   * The average difference in time between frames.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {number}
   */

  /**
   * A set of up to 10 recent previous delta values that are used to get the mean delta.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {Array<number>}
   */

  /**
   * Since we only want to go up to 10 on the deltaHistory, we keep track of what index we're 
   * on so we can reset to 0 once were at 10.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {number}
   */

  /**
   * Initialize the RequestAnimationFrame abstraction module.
   * 
   * @since 0.1.0
   * @private
   * 
   * @property {RequestAnimationFrame}
   */

  /**
   * Use the version of hidden that's supported by the user's browser.
   * 
   * @since 1.0.0
   * @private
   * 
   * @property {document.hidden}
   */

  /**
   * @param {Object} [options] The options to pass to this Deltaframe instance.
   * @param {number} [options.minFps=15] The minimum fps value allowed before Deltaframe will restart to try to correct the issue.
   * @param {number} [options.targetFps=60] The fps that Deltaframe should aim to achieve.
   * @param {number} [options.maxRestartAttempts=Infinity] The number of times Deltaframe will restart due to problems before stopping entirely.
   * @param {number} [options.runTime=Infinity] The length of time that this instance of Deltaframe will run. This can be used to create an animation that lasts a specific amount of time.
   * @param {boolean} [options.forceSetTimeout=false] If set to true, Deltaframe will use setTimeout for the loop instead of requestAnimationFrame.
   */
  function Deltaframe(options) {
    _classCallCheck$1(this, Deltaframe);

    _defineProperty$1(this, "_options", void 0);

    _defineProperty$1(this, "_restartAttempts", void 0);

    _defineProperty$1(this, "_running", void 0);

    _defineProperty$1(this, "_paused", void 0);

    _defineProperty$1(this, "_fn", void 0);

    _defineProperty$1(this, "_frame", void 0);

    _defineProperty$1(this, "_time", void 0);

    _defineProperty$1(this, "_prevTime", void 0);

    _defineProperty$1(this, "_delta", void 0);

    _defineProperty$1(this, "_deltaAverage", void 0);

    _defineProperty$1(this, "_deltaHistory", void 0);

    _defineProperty$1(this, "_deltaIndex", void 0);

    _defineProperty$1(this, "_raf", void 0);

    _defineProperty$1(this, "_hidden", void 0);

    this._options = new Options(options);
    this._restartAttempts = 0;
    this._running = false;
    this._paused = false;

    this._fn = function () {};

    this._frame = 0;
    this._time = 0;
    this._prevTime = 0;
    this._delta = 0;
    this._deltaAverage = 0;
    this._deltaHistory = [];
    this._deltaIndex = 0;
    this._raf = new RequestAnimationFrame();
    this._hidden = document.hidden;

    this._boot();
  }
  /**
   * Return the number of times that Deltafram has restarted.
   * 
   * @since 1.0.0
   * 
   * @returns {number}
   */


  _createClass$1(Deltaframe, [{
    key: "start",

    /**
     * Start the loop.
     * 
     * @since 0.1.0
     * 
     * @param {Function} fn The function to be called every step by the loop.
     */
    value: function start(fn) {
      var _this = this;

      this._fn = fn;
      this._prevTime = 0;
      this._running = true;

      this._raf.start(function (timestamp) {
        return _this._update(timestamp);
      }, this._options.forceSetTimeout);
    }
    /**
     * Pause the loop operation saving the state to be resumed at a later time.
     * 
     * @since 0.1.0
     */

  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;
      this._running = false;
    }
    /**
     * Resume the loop from a paused state.
     * 
     * @since 0.1.0
     */

  }, {
    key: "resume",
    value: function resume() {
      this._paused = false;
      this._prevTime = window.performance.now();
      this._running = true;
    }
    /**
     * Stop the loop and reset all time values of Deltaframe.
     * 
     * @since 0.1.0
     */

  }, {
    key: "stop",
    value: function stop() {
      var _this2 = this;

      this._restartAttempts = 0;
      this._running = false;
      this._paused = false;

      this._fn = function () {};

      this._frame = 0;
      this._time = 0;
      this._prevTime = 0;
      this._delta = 0;
      this._deltaHistory = [];
      this._deltaIndex = 0;
      document.removeEventListener('visibilitychange', function () {
        return _this2._visibilityChange;
      });

      this._raf.stop();

      return;
    }
    /**
     * Initialize the page visibility events which will let us save resources by pausing
     * our updates when the user is not interacting with the page running Deltaframe.
     * 
     * @since 0.1.0
     * @private
     */

  }, {
    key: "_boot",
    value: function _boot() {
      var _this3 = this;

      document.addEventListener("visibilitychange", function () {
        _this3._visibilityChange();
      });
    }
    /**
     * Update is called whenever requestAnimationFrame decides it can process the next step of the loop 
     * or roughly 60 times per second using setTimeout.
     * 
     * @since 0.1.0
     * @private
     * 
     * @param {DOMHighResTimeStamp|number} timestamp The timestamp as returned from requestAnimationFrame.
     */

  }, {
    key: "_update",
    value: function _update(timestamp) {
      if (this._paused) return;

      if (timestamp >= this._options.runTime) {
        this.stop();
        return;
      }

      this._time = timestamp;
      this._delta = timestamp - this._prevTime;
      if (this._deltaIndex === 10) this._deltaIndex = 0;
      this._deltaHistory[this._deltaIndex] = this._delta;
      this._deltaIndex++;
      var mean = 0;

      for (var i = 0; i < this._deltaHistory.length; ++i) {
        mean += this._deltaHistory[i];
      }

      mean /= 10;
      this._deltaAverage = mean;

      if (this._deltaAverage >= this._options.minFpsCalc) {
        if (this._restartAttempts === this._options.maxRestartAttempts) {
          this.stop();
          return;
        }

        this._raf.restart();

        this._restartAttempts++;
      }

      if (this._deltaAverage >= this._options.targetFpsCalc) {
        this._frame++;

        this._fn(timestamp, this._delta, this._deltaAverage);

        this._prevTime = timestamp;
      }
    }
    /**
     * When the the user has switched to a different tab and is not on the same page that
     * Deltaframe is running on, Deltaframe will pause and when the user comes back it will resume.
     * 
     * @since 0.2.0
     * @private
     */

  }, {
    key: "_visibilityChange",
    value: function _visibilityChange() {
      var visibility = document.visibilityState;
      if (this.isPaused && visibility === 'visible') this.resume();else if (this.isRunning && visibility === 'hidden') this.pause();
    }
  }, {
    key: "timesRestarted",
    get: function get() {
      return this._restartAttempts;
    }
    /**
     * Returns if Deltaframe is running or not.
     * 
     * @since 1.0.0
     * 
     * @returns {boolean}
     */

  }, {
    key: "isRunning",
    get: function get() {
      return this._running;
    }
    /**
     * Returns if Deltaframe is paused or not.
     * 
     * @since 0.1.0
     * 
     * @returns {boolean}
     */

  }, {
    key: "isPaused",
    get: function get() {
      return this._paused;
    }
    /**
     * Returns the current frame.
     * 
     * @since 1.0.0
     * 
     * @returns {number}
     */

  }, {
    key: "frame",
    get: function get() {
      return this._frame;
    }
  }]);

  return Deltaframe;
}();

/**
 * Contains the majority of mouse buttons that can be pressed.
 */

var button = {
  MOUSE_1: 1,
  MOUSE_2: 2,
  MOUSE_BOTH: 3,
  MOUSE_MIDDLE: 4,
  MOUSE_BACK: 8,
  MOSUE_FORWARD: 16
};

/**
 * A Mousebind represents a mouse button that can perform an action.
 * 
 * Mousebinds can have an optional callback passed to them that is run during the `check` method either
 * in the default game loop or a custom game loop.
 */
var Mousebind =
/*#__PURE__*/
function () {
  /**
   * The mouse button that is assigned to this mousebind.
   * 
   * @property {MousebindObject}
   * 
   * @private
   */

  /**
   * The callback method to run when this mousebind is used.
   * 
   * @property {Function}
   * 
   * @private
   */

  /**
   * A delay to set between uses of this mousebind in case it shouldn't be able to be spammed.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */

  /**
   * A delay to set before the mousebind can even be used at all.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */

  /**
   * Keeps track of the last time that this mousebind was used.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */

  /**
   * @param {MousebindObject} button The button to bind to this mousebind.
   */
  function Mousebind(button) {
    _classCallCheck(this, Mousebind);

    _defineProperty(this, "_button", void 0);

    _defineProperty(this, "_action", function () {});

    _defineProperty(this, "_delay", 0);

    _defineProperty(this, "_initialDelay", 0);

    _defineProperty(this, "_lastUsed", 0);

    this._button = button;
  }
  /**
   * Gets the button for this mousebind.
   * 
   * @returns {MousebindObject}
   */


  _createClass(Mousebind, [{
    key: "delay",

    /**
     * Sets the delay between mousebind uses.
     * 
     * @param {number} ms The time in milliseconds to delay use.
     * 
     * @returns {Mousebind} Returns this for chaining.
     */
    value: function delay(ms) {
      this._delay = ms;
      this._lastUsed = -this._delay + 1;
      return this;
    }
    /**
     * Sets the initial delay before the mousebind can be used for the first time.
     * 
     * @param {number} ms The time in milliseconds before the mousebind can be used.
     * 
     * @returns {Mousebind} Retursn this for chaining.
     */

  }, {
    key: "initialDelay",
    value: function initialDelay(ms) {
      this._initialDelay = ms;
      return this;
    }
    /**
     * Sets the callback method sthat will be run when this mousebind is active.
     * 
     * @param {Function} fn The callback method to use.
     * 
     * @returns {Mousebind} Returns this for chaining.
     */

  }, {
    key: "action",
    value: function action(fn) {
      this._action = fn;
      return this;
    }
    /**
     * Run the action associated with this mousebind.
     * 
     * @param {number} time The time that the mousebind was used.
     */

  }, {
    key: "run",
    value: function run(time) {
      this._action();

      this._lastUsed = time;
    }
  }, {
    key: "button",
    get: function get() {
      return this._button;
    }
    /**
     * Gets the last time that this mousebind was used.
     * 
     * @returns {number}
     */

  }, {
    key: "lastUsed",
    get: function get() {
      return this._lastUsed;
    }
  }]);

  return Mousebind;
}();

/**
 * TODO
 */
var Mousehawk =
/*#__PURE__*/
function () {
  /**
   * A reference to the options for this instance of Mousehawk.
   * 
   * @property {Options}
   */

  /**
   * A list of mouse buttons that can be used to create mousebinds.
   * 
   * @property {MOUSE}
   * 
   * @private
   */

  /**
   * A list of the created mousebinds.
   * 
   * @property {Array<Mousebind>}
   * 
   * @private
   * 
   * @default []
   */

  /**
   * Keeps track of what mouse buttons have been pressed.
   * 
   * @property {Object}
   * 
   * @private
   */

  /**
   * Indicates whether using mousebinds are currently disabled or not.
   * 
   * @property {boolean}
   * 
   * @private
   * 
   * @default false
   */

  /**
   * The amount of time that mousebinds are disabled for if any.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */

  /**
   * A reference to the Deltaframe game loop.
   * 
   * @property {Deltaframe}
   * 
   * @private
   */
  function Mousehawk() {
    _classCallCheck(this, Mousehawk);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_BUTTON", button);

    _defineProperty(this, "_mousebinds", []);

    _defineProperty(this, "_pressed", {});

    _defineProperty(this, "_disabled", false);

    _defineProperty(this, "_disabledTime", 0);

    _defineProperty(this, "_loop", new Deltaframe());

    this._boot();
  }
  /**
   * Gets the mouse buttons that can be used to create mousebinds.
   * 
   * @returns {*}
   */


  _createClass(Mousehawk, [{
    key: "_boot",

    /**
     * Setup the mousedown and mouseup event listeners and also initialize Deltaframe if its being used.
     * 
     * @private
     */
    value: function _boot() {
      var _this = this;

      window.addEventListener('mousedown', function (ev) {
        return _this._onmousedown(ev);
      });
      window.addEventListener('mouseup', function (ev) {
        return _this._onmouseup(ev);
      });

      this._loop.start(function (time) {
        return _this.check(time);
      });
    }
    /**
     * When a mouse button is pressed, add it to the `pressed` object if it doesn't already exist and set it to `true`.
     * 
     * @private
     * 
     * @param {MouseEvent} ev The MouseEvent generated by the mouse button press.
     */

  }, {
    key: "_onmousedown",
    value: function _onmousedown(ev) {
      this._pressed[ev.buttons] = true;
      ev.preventDefault();
    }
    /**
     * When a mouse button is released, set its property in the `pressed` object to `false`.
     * 
     * @private
     * 
     * @param {MouseEvent} ev The MouseEvent generated by the mouse button press.
     */

  }, {
    key: "_onmouseup",
    value: function _onmouseup(ev) {
      this._pressed[ev.buttons] = false;
      ev.preventDefault();
    }
    /**
     * Creates a new mousebind for the specified mouse button.
     * 
     * @param {MousebindObject} mouseButton One or more mouse buttons from the `BUTTONS` property to attach to this mousebind.
     * 
     * @returns {Mousebind} Returns the newly created mousebind.
     */

  }, {
    key: "mousebind",
    value: function mousebind(mouseButton) {
      if (!mouseButton) {
        console.warn('A mouse button must be provided to create a mousebind');
        return;
      }
      var mousebind = new Mousebind(mouseButton);

      this._mousebinds.push(mousebind);

      return mousebind;
    }
    /**
     * Checks to see which mouse button conditions are currently being met and runs the mousebinds's attached callback method.
      * 
      * @param {number} time The current timestamp which is used to check for delays and is passed to the mousebinds's callback method.
     */

  }, {
    key: "check",
    value: function check(time) {
      var _this2 = this;

      this._mousebinds.map(function (bind) {
        var button = bind.button.toString();
        var isActive = _this2._pressed[button];
        var isPastInitialDelay = time > bind._initialDelay;
        var isTime = time - bind.lastUsed > bind._delay;

        if (_this2._disabled) {
          if (time < time + _this2._disabledTime) return;else _this2.enable();
        }

        if (isActive && isPastInitialDelay && isTime && bind.action) bind.run(time);
      });
    }
    /**
     * Disables the use of all mousebinds until enable is called or until the wait time has expired if it is provided.
     * 
     * @param {number} [lengthOfTime=Infinity] An optional amount of time to wait until mousebinds are automatically enabled again. 
     */

  }, {
    key: "disable",
    value: function disable() {
      var lengthOfTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;
      this._disabled = true;
      this._disabledTime = lengthOfTime;
    }
    /**
     * If no end time is passed when calling the `disable` method, this method has to be called to enable the use of
     * mousebind again.
     */

  }, {
    key: "enable",
    value: function enable() {
      this._disabled = false;
      this._disabledTime = 0;
    }
  }, {
    key: "BUTTON",
    get: function get() {
      return this._BUTTON;
    }
  }]);

  return Mousehawk;
}();

export default Mousehawk;
