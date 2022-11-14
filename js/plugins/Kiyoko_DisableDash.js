/*:
 *
 * @plugindesc Fvck the dashing feature, you ruined my game
 * @author Serena1432
 *
 * @help This plugin does not provide plugin commands.
 *
 *
 */
 
 (function() {
	Window_Options.prototype.addGeneralOptions = function() {
		this.addCommand(TextManager.commandRemember, 'commandRemember');
	};
	Game_Map.prototype.isDashDisabled = function() {
		return true;
	};
 })();