'use strict'

import Mousehawk from '../mousehawk.js';

let mousehawk;

describe('Mousebind events', () => {

  beforeEach(() => mousehawk = new Mousehawk());

  afterEach(() => mousehawk = null);

  it('should set the button of the mousebind to true when pressed', done => {

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1);

    simMouse(1);

    setTimeout(() => {

      chai.expect(mousehawk._pressed).to.deep.equal({ 1: true });

      done();

    }, 1000);

  });

  it('should set the button of the mousebind to false when let go of', done => {

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1);

    simMouse(1);

    simMouse(1, 'mouseup');

    setTimeout(() => {

      chai.expect(mousehawk._pressed).to.deep.equal({ 1: false });

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