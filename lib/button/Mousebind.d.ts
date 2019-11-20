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
    private _button;
    /**
     * The callback method to run when this mousebind is used.
     *
     * @property {Function}
     *
     * @private
     */
    private _action?;
    /**
     * A delay to set between uses of this mousebind in case it shouldn't be able to be spammed.
     *
     * @property {number}
     *
     * @private
     *
     * @default 0
     */
    _delay: number;
    /**
     * A delay to set before the mousebind can even be used at all.
     *
     * @property {number}
     *
     * @private
     *
     * @default 0
     */
    _initialDelay: number;
    /**
     * Keeps track of the last time that this mousebind was used.
     *
     * @property {number}
     *
     * @private
     *
     * @default 0
     */
    private _lastUsed;
    /**
     * @param {MousebindObject} button The button to bind to this mousebind.
     */
    constructor(button: MousebindObject);
    /**
     * Gets the button for this mousebind.
     *
     * @returns {MousebindObject}
     */
    get button(): MousebindObject;
    /**
     * Gets the last time that this mousebind was used.
     *
     * @returns {number}
     */
    get lastUsed(): number;
    /**
     * Sets the delay between mousebind uses.
     *
     * @param {number} ms The time in milliseconds to delay use.
     *
     * @returns {Mousebind} Returns this for chaining.
     */
    delay(ms: number): Mousebind;
    /**
     * Sets the initial delay before the mousebind can be used for the first time.
     *
     * @param {number} ms The time in milliseconds before the mousebind can be used.
     *
     * @returns {Mousebind} Retursn this for chaining.
     */
    initialDelay(ms: number): Mousebind;
    /**
     * Sets the callback method sthat will be run when this mousebind is active.
     *
     * @param {Function} fn The callback method to use.
     *
     * @returns {Mousebind} Returns this for chaining.
     */
    action(fn: Function): Mousebind;
    /**
     * Run the action associated with this mousebind.
     *
     * @param {number} time The time that the mousebind was used.
     */
    run(time: number): void;
}
