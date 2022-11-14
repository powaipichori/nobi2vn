//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc Thêm một số thứ vào Menu của game.
 * @author Nozaki Yuu
 *
 * @help This plugin does not provide any plugin commands.
 *
 */

(function() {
	var _make_command_list = Window_TitleCommand.prototype.makeCommandList;
	Window_TitleCommand.prototype.makeCommandList = function() {
		_make_command_list.call(this);
		this.addCommand('WEBSITES',   'websites');
		this.addCommand('OPTIONS',   'options');
	};
	
	Scene_Title.prototype.createCommandWindow = function() {
		this._commandWindow = new Window_TitleCommand();
		this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
		this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
		this._commandWindow.setHandler('websites',  this.commandWeb.bind(this));
		this._commandWindow.setHandler('options',  this.commandOptions.bind(this));
		this._commandWindow.setHandler('login',  this.commandLogin.bind(this));
		this.addWindow(this._commandWindow);
	};
	
	Scene_Title.prototype.commandWeb = function() {
		if (Utils.isNwjs()) require('nw.gui').Shell.openExternal("https://www.facebook.com/groups/nobihazavietnam");
		else window.open("https://www.facebook.com/groups/nobihazavietnam");
		SceneManager.goto(Scene_Title);
	}
	
})();

