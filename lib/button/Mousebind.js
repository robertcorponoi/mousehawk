'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = Mousebind;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idXR0b24vTW91c2ViaW5kLnRzIl0sIm5hbWVzIjpbIk1vdXNlYmluZCIsImJ1dHRvbiIsIl9idXR0b24iLCJtcyIsIl9kZWxheSIsIl9sYXN0VXNlZCIsIl9pbml0aWFsRGVsYXkiLCJmbiIsIl9hY3Rpb24iLCJ0aW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7Ozs7OztJQU1xQkEsUzs7O0FBRW5COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVdBOzs7QUFHQSxxQkFBWUMsTUFBWixFQUFxQztBQUFBOztBQUFBOztBQUFBLHFDQXRDUixZQUFNLENBQUcsQ0FzQ0Q7O0FBQUEsb0NBM0JwQixDQTJCb0I7O0FBQUEsMkNBaEJiLENBZ0JhOztBQUFBLHVDQUxULENBS1M7O0FBRW5DLFNBQUtDLE9BQUwsR0FBZUQsTUFBZjtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7MEJBT01FLEUsRUFBdUI7QUFFM0IsV0FBS0MsTUFBTCxHQUFjRCxFQUFkO0FBRUEsV0FBS0UsU0FBTCxHQUFpQixDQUFDLEtBQUtELE1BQU4sR0FBZSxDQUFoQztBQUVBLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7Ozs7aUNBT2FELEUsRUFBdUI7QUFFbEMsV0FBS0csYUFBTCxHQUFxQkgsRUFBckI7QUFFQSxhQUFPLElBQVA7QUFFRDtBQUVEOzs7Ozs7Ozs7OzJCQU9PSSxFLEVBQXlCO0FBRTlCLFdBQUtDLE9BQUwsR0FBZUQsRUFBZjtBQUVBLGFBQU8sSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7O3dCQUtJRSxJLEVBQWM7QUFFaEIsV0FBS0QsT0FBTDs7QUFFQSxXQUFLSCxTQUFMLEdBQWlCSSxJQUFqQjtBQUVEOzs7d0JBM0U2QjtBQUU1QixhQUFPLEtBQUtQLE9BQVo7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFLdUI7QUFFckIsYUFBTyxLQUFLRyxTQUFaO0FBRUQ7Ozs7Ozs7QUE4REYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBNb3VzZWJpbmRPYmplY3QgZnJvbSAnLi4vaW50ZXJmYWNlcy9Nb3VzZWJpbmRPYmplY3QnO1xyXG5cclxuLyoqXHJcbiAqIEEgTW91c2ViaW5kIHJlcHJlc2VudHMgYSBtb3VzZSBidXR0b24gdGhhdCBjYW4gcGVyZm9ybSBhbiBhY3Rpb24uXHJcbiAqIFxyXG4gKiBNb3VzZWJpbmRzIGNhbiBoYXZlIGFuIG9wdGlvbmFsIGNhbGxiYWNrIHBhc3NlZCB0byB0aGVtIHRoYXQgaXMgcnVuIGR1cmluZyB0aGUgYGNoZWNrYCBtZXRob2QgZWl0aGVyXHJcbiAqIGluIHRoZSBkZWZhdWx0IGdhbWUgbG9vcCBvciBhIGN1c3RvbSBnYW1lIGxvb3AuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZWJpbmQge1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbW91c2UgYnV0dG9uIHRoYXQgaXMgYXNzaWduZWQgdG8gdGhpcyBtb3VzZWJpbmQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtNb3VzZWJpbmRPYmplY3R9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9idXR0b246IE1vdXNlYmluZE9iamVjdDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNhbGxiYWNrIG1ldGhvZCB0byBydW4gd2hlbiB0aGlzIG1vdXNlYmluZCBpcyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9hY3Rpb24/OiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBkZWxheSB0byBzZXQgYmV0d2VlbiB1c2VzIG9mIHRoaXMgbW91c2ViaW5kIGluIGNhc2UgaXQgc2hvdWxkbid0IGJlIGFibGUgdG8gYmUgc3BhbW1lZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKi9cclxuICBfZGVsYXk6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZGVsYXkgdG8gc2V0IGJlZm9yZSB0aGUgbW91c2ViaW5kIGNhbiBldmVuIGJlIHVzZWQgYXQgYWxsLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQGRlZmF1bHQgMFxyXG4gICAqL1xyXG4gIF9pbml0aWFsRGVsYXk6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IHRpbWUgdGhhdCB0aGlzIG1vdXNlYmluZCB3YXMgdXNlZC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IDBcclxuICAgKi9cclxuICBwcml2YXRlIF9sYXN0VXNlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtNb3VzZWJpbmRPYmplY3R9IGJ1dHRvbiBUaGUgYnV0dG9uIHRvIGJpbmQgdG8gdGhpcyBtb3VzZWJpbmQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoYnV0dG9uOiBNb3VzZWJpbmRPYmplY3QpIHtcclxuXHJcbiAgICB0aGlzLl9idXR0b24gPSBidXR0b247XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgYnV0dG9uIGZvciB0aGlzIG1vdXNlYmluZC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7TW91c2ViaW5kT2JqZWN0fVxyXG4gICAqL1xyXG4gIGdldCBidXR0b24oKTogTW91c2ViaW5kT2JqZWN0IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fYnV0dG9uO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGxhc3QgdGltZSB0aGF0IHRoaXMgbW91c2ViaW5kIHdhcyB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IGxhc3RVc2VkKCk6IG51bWJlciB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2xhc3RVc2VkO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGRlbGF5IGJldHdlZW4gbW91c2ViaW5kIHVzZXMuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1zIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBkZWxheSB1c2UuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge01vdXNlYmluZH0gUmV0dXJucyB0aGlzIGZvciBjaGFpbmluZy5cclxuICAgKi9cclxuICBkZWxheShtczogbnVtYmVyKTogTW91c2ViaW5kIHtcclxuXHJcbiAgICB0aGlzLl9kZWxheSA9IG1zO1xyXG5cclxuICAgIHRoaXMuX2xhc3RVc2VkID0gLXRoaXMuX2RlbGF5ICsgMTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBpbml0aWFsIGRlbGF5IGJlZm9yZSB0aGUgbW91c2ViaW5kIGNhbiBiZSB1c2VkIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbXMgVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSB0aGUgbW91c2ViaW5kIGNhbiBiZSB1c2VkLlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtNb3VzZWJpbmR9IFJldHVyc24gdGhpcyBmb3IgY2hhaW5pbmcuXHJcbiAgICovXHJcbiAgaW5pdGlhbERlbGF5KG1zOiBudW1iZXIpOiBNb3VzZWJpbmQge1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxEZWxheSA9IG1zO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGNhbGxiYWNrIG1ldGhvZCBzdGhhdCB3aWxsIGJlIHJ1biB3aGVuIHRoaXMgbW91c2ViaW5kIGlzIGFjdGl2ZS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgbWV0aG9kIHRvIHVzZS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7TW91c2ViaW5kfSBSZXR1cm5zIHRoaXMgZm9yIGNoYWluaW5nLlxyXG4gICAqL1xyXG4gIGFjdGlvbihmbjogRnVuY3Rpb24pOiBNb3VzZWJpbmQge1xyXG5cclxuICAgIHRoaXMuX2FjdGlvbiA9IGZuO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biB0aGUgYWN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG1vdXNlYmluZC5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBUaGUgdGltZSB0aGF0IHRoZSBtb3VzZWJpbmQgd2FzIHVzZWQuXHJcbiAgICovXHJcbiAgcnVuKHRpbWU6IG51bWJlcikge1xyXG5cclxuICAgIHRoaXMuX2FjdGlvbiEoKTtcclxuXHJcbiAgICB0aGlzLl9sYXN0VXNlZCA9IHRpbWU7XHJcblxyXG4gIH1cclxuXHJcbn07Il19