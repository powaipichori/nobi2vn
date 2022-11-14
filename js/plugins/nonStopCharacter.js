/*:ja
 * @plugindesc 画面外に出たマップイベントの動きを停止しないようにするプラグインです。
 * @author 村人A
 *
 * @help
 * 画面外に出たマップイベントの動きを停止しないようにするプラグインです。
 *
 */

(function() {
	Game_CharacterBase.prototype.isNearTheScreen = function() {
		return true;
	};
})();