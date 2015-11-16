Text Plugin
===========

	Version: 1.0.0
	Type: Game Object
	Author: Benjamin D. Richards for Kiwi.js Team
	Website: www.kiwijs.org
	Kiwi.js Version Last Tested: 1.4.0

# Description

The Text object displays text. It supports multiple lines, unlike the TextField object in KiwiJS. It also has a robust set of default parameters, making it faster and easier to create text on the fly.

# Versions

## 1.0.0

Initial release

# Files and Folders

	build/			Plugin files, expanded and minified for your convenience
	docs/			Documentation of plugin API
	examples/		Example usage of plugin
	src/			Source files of plugin
	.gitignore		Git ignore prevents upload of working files
	gruntfile.js	Grunt tasks used to build plugin
	package.json	Package data for Grunt
	readme.md		This file

# Usage

To load the Text plugin, simply include the plugin in your KiwiJS game. See below for details.

To use the plugin, create a `Kiwi.Plugins.Text` object.

Consult the `examples/` folder for a functional example.

## Including the Plugin

Add the plugin from the `build/` folder to your html file. Ensure you load it after the KiwiJS library:

```html
<script src="js/libs/kiwi.js"></script>
<script src="../build/text-1.0.0.js"></script>
```

Include the plugin in your game options:

```js
var gameOptions = {
		plugins: [ "Text" ]
	};

var game = new Kiwi.Game( null, "game", null, gameOptions );
```

## Using Text

In your game state, create a `Text` object:

```js
var text = new Kiwi.Plugins.Text( {
	state: this
});
```

That's it! You now have a text object. It is **automatically** added to the state. By default, it displays "text".

You may specify additional parameters, in any order, to customise the text. You may also set these parameters after creation (except for `state`). The default values are as follows:

```js
var text = new Kiwi.Plugins.Text( {
	state: this,
	text: "text",
	x: 0,
	y: 0,
	color: "#000000",
	fontFamily: "sans-serif",
	fontSize: 32,
	size: 32,
	weight: "normal",
	alignment: "left",
	maxHeight: Infinity,
	maxLines: Infinity,
	maxWidth: Infinity,
	lineHeight: "1em",
	lineHeightNormalized: 1,
	addToState: true,
	alpha: 1,
	anchorPointX: 0,
	anchorPointY: 0,
	anchorNormalX: 0,
	anchorNormalY: 0,
	rotation: 0,
	scale: 1,
	scaleX: 1,
	scaleY: 1
});
```

Pay particular attention to the `maxWidth` and `maxLines` properties. The `maxWidth` property allows you to specify a maximum width for a block of text, after which the text will split onto subsequent lines. The `maxLines` property allows you to specify the maximum number of lines that will be rendered. Note that the Text object cannot be larger than 2048*2048 pixels; however, text will still behave as though it had access to infinite space.

You may specify the distance between lines via `lineHeight`. This is a string, measured in pixels or ems, e.g. "100px" or "1.3em". An em is a unit roughly equivalent to a single character, so it relates directly to font size; 1em is standard separation. You may also specify this distance in ems as a number via `lineHeightNormalized`.

You may set a normalized anchor point using `anchorNormalX` and `anchorNormalY`. This is an alternate way to set the anchor point. The anchor normal is measured as a proportion of the current width and height, so at [ 0, 0 ] the anchor point is in the top left corner of the text, and at [ 1, 1 ] it is in the bottom right corner.

Note that text alignment will chance where the text appears. By default, text is aligned "left". It appears to the right of the [ x, y ] coordinates of the object. If you set `alignment = "right"`, the text will instead appear to the left of the object coordinates, and `"center"` will position it on top of the coordinates. This allows you to precisely align text to left, right, and middle of areas without knowing the exact width of the text. However, be aware that the position and anchor point does not change. While an anchor normal of [ 0.5, 0.5 ] is central to text aligned left, the center of text aligned right is at [ -0.5, 0.5 ].

# Thank You

We hope you enjoy the Text Plugin. If you have any questions or issues, we welcome your input on the [KiwiJS website](http://www.kiwijs.org).
