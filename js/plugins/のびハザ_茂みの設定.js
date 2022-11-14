//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc rpg_objectsを変更。
 * @author S.K
 *
 * @help
 * 茂みの深さの変更、及びオブジェクトキャラクターでなくとも反応するよう変更。
 * 
 * プラグインコマンドはありません。
 */

(function() {

Game_CharacterBase.prototype.refreshBushDepth = function() {
    if (this.isNormalPriority() && this.isOnBush() && !this.isJumping()) {
        if (!this.isMoving()) {
            this._bushDepth = 24;
        }
    } else {
        this._bushDepth = 0;
    }
};

})();