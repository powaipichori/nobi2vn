//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc rpg_objectsを変更。
 * @author S.K
 *
 * @help
 * キャラクターの足踏み頻度を調整できます。
 *
 * プラグインコマンドはありません。
 * 
 * @param 足踏み頻度
 * @type number
 * @min 0
 * @max 100
 * @decimals 1
 * @default 1.5
 * @desc キャラクターの足踏み頻度です。(MVのデフォルトで1.5)
 */

var parameters = PluginManager.parameters('のびハザ_足踏み速度設定');
var 足踏み頻度 = Number(parameters['足踏み頻度']);

(function() {

Game_CharacterBase.prototype.updateAnimationCount = function() {
    if (this.isMoving() && this.hasWalkAnime()) {
        this._animationCount += 足踏み頻度;
    } else if (this.hasStepAnime() || !this.isOriginalPattern()) {
        this._animationCount++;
    }
};


})();

