<div align="center">

# Mousehawk

Mousehawk is the mouse counterpart to Keyhawk and is used to create and manage mouse button bindings for your JavaScript game.

</div>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/mousehawk.svg?style=flat)](https://www.npmjs.com/package/mousehawk)
[![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/mousehawk/badge.svg)](https://snyk.io/test/github/robertcorponoi/mousehawk)
[![NPM downloads](https://img.shields.io/npm/dm/mousehawk.svg?style=flat)](https://www.npmjs.com/package/mousehawk)
<a href="https://badge.fury.io/js/mousehawk"><img src="https://img.shields.io/github/issues/robertcorponoi/mousehawk.svg" alt="issues" height="18"></a>
<a href="https://badge.fury.io/js/mousehawk"><img src="https://img.shields.io/github/license/robertcorponoi/mousehawk.svg" alt="license" height="18"></a>
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

Mousehawk lets you easily and quickly create mouse button binds for your JavaScript games. Mouse button binds, or "mousebinds" are creating by assigning a mouse button to be bound and then passing a method that should be run when the mousebind is active (the button for it is pressed) and an optional delay that can be used to limit how often the mousebind can be used.

Mousehawk also gives you the option of using the default game loop module that is used to check for which buttons are pressed or you can use your own loop and just use the exposed API.

## **Installation**

Mousehawk is an ES6 module that can be used by downloading the package through NPM:

```
$ npm install mousehawk
```

## **Initialization**

Mousehawk upon initialization can be passed an options object and for now there is just one option that can be specified.

| param           | type    | description                                                                                                            | default |
|-----------------|---------|------------------------------------------------------------------------------------------------------------------------|---------|
| options         | Object  |                                                                                                                        | {}      |
| options.useLoop | boolean | Indicates whether Mousehawk should use the default game loop module for checking if a mousebind is actively being used | true    |


## **Basic Example**

To begin using Mousehawk, simply import the default module from wherever its located and specify as an option of whether you would like to use the built in game loop or not.

```js
import Mousehawk from './path/to/Mousehawk.js';


const mousehawk = new Mousehawk();
```

## **Creating mousebinds**

To create a new mousebind, you start out by using the `mousebind` method which takes a single argument of the mouse button to listen for.

The buttons that can be assigned to a mousebinds should be derived from the `Mousehawk.BUTTON` Object as these have been normalized and ensured to work.

An example of creating a mousebinds can be done as shown:

```js
mousehawk.mousebind(mousehawk.BUTTON.MOUSE_2);
```

Just this mousebind on its own doesn't do much as there's no action associated with it. To add a function to run when the mousebind is active, you can specify an action:

```js
function hello() {

    console.log('Hello!');

}

mousehawk.mousebind(mousehawk.BUTTON.MOUSE_2).action(hello);
```

This will run the `hello` method everytime the mousebind is active.

Notice how `action` can be chained, this is because `mousebind` returns an instance of the mousebind and so it could be written as:

```js
function hello() {

  console.log('Hello!');

}

const sayHello = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_2);

sayHello.action(hello);
```

Lastly, you can add a delay to the mousebind so that a certain amount of time has to pass between uses. This does not apply to the very first press though which means that if you set a delay of 5000ms you don't have to wait 5000ms to use it for the first time it will be available immediately but after that it will rest for 5000ms.

```js
function hello() {

  console.log('Hello!');

}

const sayHello = mousehawk.mousebind(mousehawk.BUTTON.MOUSE_1).action(hello).delay(5000);
```

### **initialDelay**

Sets the initial delay before the mousebind can be used for the first time

| param 	| type   	| description                                               	| default 	|
|-------	|--------	|-----------------------------------------------------------	|---------	|
| ms    	| number 	| The time in milliseconds before the mousebind can be used. 	|         	|

```js
mousehawk.initialDelay(5000);
```

### **Disable/Enable**

To diable the use of any and all mousebinds you can call the disable method.

```js
mousehawk.disable();
```

This method also takes an optional parameter which specifies how long you want mousebinds to be disabled for. So for instance if you used `mousehawk.disable(10000)` all mousebinds are going to be disabled for 10 seconds and they will be enabled again. If no time is provided then it is set to Infinity and you will have to call 

```js
mousehawk.enable();
```
to re-enable the use of mousebinds.

## **Using Your Own Game Loop**

If you are already using a game loop for another purpose then you should set the `useLoop` option to `false` so that the Mousehawk game loop and your game loop aren't both running at the same time. Mousehawk exposes the `update` method which is what checks for active mousebinds and you can call that within your project inside of your game loop.

```js
const mousehawk = new Mousehawk({ useLoop: false });

// Set up your mousebinds here...

// And inside of your game loop, call the following method providing the current time from your loop:
mousehawk.check(time);
```

## **Tests**

To run the tests available for Mousehawk, use:

```bash
$ npm run test
```

and then in your browser navigate to `http://localhost:8888/test/index.html`.

## **License**

MIT