'use strict'

import Mousehawk from '../mousehawk.js';

let mousehawk;

describe('Using mousebinds', () => {

  beforeEach(() => mousehawk = new Mousehawk());

  afterEach(() => mousehawk = null);

  it('should run the mousebind when the mouse button is pressed', done => {

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1);

    simMouse(1);

    setTimeout(() => {

      chai.expect(leftClick.lastUsed).to.be.greaterThan(0);

      done();

    }, 1000);

  });

  it('should run the callback function associated with the mousebind when the button is pressed', done => {

    const hello = () => { return 'Hello World!' };

    const spy = sinon.spy(hello);

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1).action(spy);

    simMouse(1);

    setTimeout(() => {

      chai.expect(spy.called).to.be.true;

      done();

    }, 1000);

  });

});

/**
 * Simulate the user pressing a mouse button.
 * 
 * @param {number} button The mouse button to simlulate being pressed.
 * @param {string} [type=mousedown] The event to simulate.
 */
function simMouse(button, type = 'mousedown') {

  const event = document.createEvent('HTMLEvents');

  event.initEvent(type, true, false);

  event.buttons = button;

  document.dispatchEvent(event);

}