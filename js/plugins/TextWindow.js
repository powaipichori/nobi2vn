/*:
 *
 * @plugindesc v1.0 - Drawing texts freely into the game map. Applicable for making HUD text or anything else related to the game.
 * @author Nozaki Yuu
 *
 * @help Version 1.0 - 2022.07.30
 * Made by Nozaki Yuu - #DuckieHVNisthebest
 *
 * This plugin helps developers to draw texts freely into the game map by using
 * only one command, without creating any windows manually to add a text.
 * This plugin supports up to 100 texts (100 IDs).
 * ------------------------------------------------------------------------------
 * Commands supported
 * ------------------------------------------------------------------------------
 * Create a Script Event Command and use these commands to do things related to
 * drawing texts:
 *
 * drawText(id, text, x, y, width, height, align = "left"):
 * Draw a text into the map. Each text will have its own ID defined by the id
 * variable to make the user free to delete or update it.
 * * Properties:
 * - id (integer): The ID of the text.
 * - text (string): The text content that you want to draw.
 * - x, y (integer): The location of the text.
 * - width, height (integer): The maximum width and height of the text.
 * - align (string): Can be left, center or right.
 * * This function will return a Window class representing the text window.
 *
 * changeTextColor(id, color):
 * Change the text color using its ID.
 * * Properties:
 * - id (integer): The ID of the text.
 * - color (integer): The new color of the text.
 * * This function won't return anything.
 *
 * getTextWindow(id):
 * Get a text window using its ID.
 * * Properties:
 * - id (integer): The ID of the text.
 * * This function will return a Window class representing the text window.
 *
 * deleteText(id):
 * Delete a text using its ID.
 * * Properties:
 * - id (integer): The ID of the text.
 * * This function won't return anything.
 *
 */

(function() {
	
	function TextWindow() {
		this.initialize.apply(this, arguments);
	}

	TextWindow.prototype = Object.create(Window_Base.prototype);
	TextWindow.prototype.constructor = TextWindow;
	
	TextWindow.prototype.standardPadding = function() {
		return 0;
	};
	
	TextWindow.prototype.initialize = function(text, x, y, width, height, align = "left") {
		Window.prototype.initialize.call(this);
		this.loadWindowskin();
		this.move(x, y, width, height);
		this.updatePadding();
		this.updateBackOpacity();
		this.updateTone();
		this.createContents();
		this._opening = false;
		this._closing = false;
		this._dimmerSprite = null;
		this.setBackgroundType(2);
		this._windowText = text;
		this._windowWidth = width;
		this._windowAlign = align;
		this.drawAllItems();
	};
	
	TextWindow.prototype.drawAllItems = function() {
		this.contents.clear();
		this.drawText(this._windowText, 0, 0, this._windowWidth, this._windowAlign);
	};
	
	var _text_window = [];
	
	drawText = function(id, text, x, y, width, height, align = "left") {
		var _textData = _text_window[id];
		if (!_textData) {
			_text_window[id] = new TextWindow(text, x, y, width, height, align);
		}
		else {
			_textData._windowText = text;
			_textData._windowWidth = width;
			_textData._windowAlign = align;
			_textData.move(x, y, width, height);
			_textData.drawAllItems();
		}
		return _text_window[id];
	}
	
	getTextWindow = function(id) {
		return _text_window[id];
	}
	
	changeTextColor = function(id, color) {
		var _textData = _text_window[id];
		if (_textData) {
			_textData.changeTextColor(_textData.textColor(color));
		}
	}
	
	deleteText = function(id) {
		var _textData = _text_window[id];
		if (_textData) {
			_textData.hide();
			_textData.deactivate();
			_text_window[id] = null;
		}
	}
	
	var _map_start = Scene_Map.prototype.createAllWindows;
	Scene_Map.prototype.createAllWindows = function() {
		_map_start.call(this);
		for (var i = 1; i <= 100; i++) {
			var _textData = _text_window[i];
			if (_textData) {
				this.addWindow(_textData);
				_textData.drawAllItems();
			}
		}
	};
	
	var _map_update = Scene_Map.prototype.update;
	Scene_Map.prototype.update = function() {
		_map_update.call(this);
		for (var i = 1; i <= 100; i++) {
			var _textData = _text_window[i];
			if (!_textData) continue;
			if (!_textData._drawn) {
				this.addWindow(_textData);
				_textData._drawn = true;
			}
			_textData.drawAllItems();
		}
	};
	
})();