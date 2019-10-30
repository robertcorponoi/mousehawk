'use strict'

import MousebindObject from '../interfaces/MousebindObject';

/**
 * A Mousebind represents a mouse button that can perform an action.
 * 
 * Mousebinds can have an optional callback passed to them that is run during the `check` method either
 * in the default game loop or a custom game loop.
 */
export default class Mousebind {

  /**
   * The mouse button that is assigned to this mousebind.
   * 
   * @property {MousebindObject}
   * 
   * @private
   */
  private _button: MousebindObject;

  /**
   * The callback method to run when this mousebind is used.
   * 
   * @property {Function}
   * 
   * @private
   */
  private _action?: Function = () => { };

  /**
   * A delay to set between uses of this mousebind in case it shouldn't be able to be spammed.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */
  _delay: number = 0;

  /**
   * A delay to set before the mousebind can even be used at all.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */
  _initialDelay: number = 0;

  /**
   * Keeps track of the last time that this mousebind was used.
   * 
   * @property {number}
   * 
   * @private
   * 
   * @default 0
   */
  private _lastUsed: number = 0;

  /**
   * @param {MousebindObject} button The button to bind to this mousebind.
   */
  constructor(button: MousebindObject) {

    this._button = button;

  }

  /**
   * Gets the button for this mousebind.
   * 
   * @returns {MousebindObject}
   */
  get button(): MousebindObject {

    return this._button;

  }

  /**
   * Gets the last time that this mousebind was used.
   * 
   * @returns {number}
   */
  get lastUsed(): number {

    return this._lastUsed;

  }

  /**
   * Sets the delay between mousebind uses.
   * 
   * @param {number} ms The time in milliseconds to delay use.
   * 
   * @returns {Mousebind} Returns this for chaining.
   */
  delay(ms: number): Mousebind {

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
  initialDelay(ms: number): Mousebind {

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
  action(fn: Function): Mousebind {

    this._action = fn;

    return this;

  }

  /**
   * Run the action associated with this mousebind.
   * 
   * @param {number} time The time that the mousebind was used.
   */
  run(time: number) {

    this._action!();

    this._lastUsed = time;

  }

};