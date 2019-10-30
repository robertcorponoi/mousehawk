'use strict'

import Mousehawk from '../mousehawk.js';

let mousehawk;

describe('Creating mousebinds', () => {

  beforeEach(() => mousehawk = new Mousehawk());

  afterEach(() => mousehawk = null);

  it('should create a mousebind for the mouse 1 button', () => {

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1);

    chai.expect(leftClick.button).to.equal(1);

  });

  it('should create a mousebind for both mouse buttons pressed together', () => {

    const bothClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_BOTH);

    chai.expect(bothClick.button).to.equal(3);

  });

  it('should create a mousebind with a 5 second delay', () => {

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1).delay(5000);

    chai.expect(leftClick._delay).to.equal(5000) && chai.expect(leftClick._lastUsed).to.equal(-4999);

  });

  it('should create a mousebind with a callback action', () => {

    const hello = () => { return 'Hello World!' };

    const leftClick = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1).action(hello);

    chai.expect(leftClick._action.toString()).to.deep.equal(hello.toString());

  });

});