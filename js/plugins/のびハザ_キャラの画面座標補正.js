//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc rpg_objects、rpg_scenes、rpg_spritesを変更。
 * @author S.K
 *
 * @help
 * キャラクターの画面座標補正です。
 * 
 * ■スクリプト
 *   this._revisionX = n
 *   (キャラの画面座標をX方向にnずらす)
 *
 *   this._revisionY = n
 *   (キャラの画面座標をY方向にnずらす)
 *
 *   this._anime_revisionX = n
 *   (このキャラに表示するアニメの画面座標をX方向にnずらす)
 *
 *   this._anime_revisionY = n
 *   (このキャラに表示するアニメの画面座標をY方向にnずらす)
 */

(function() {

//変数の定義および初期化

var _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
    _Game_CharacterBase_initMembers.apply(this, arguments);
    //ここから追加分
    this._revisionX = 0;
    this._revisionY = 0;
    this._revisionZ = 0;
    this._anime_revisionX = 0;
    this._anime_revisionY = 0;
   
};
var _Scene_Map_prototype_initialize = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function() {
    _Scene_Map_prototype_initialize.apply(this, arguments);
    //ここから追加分
    $gamePlayer._anime_revisionX = 0;
    $gamePlayer._anime_revisionY = 0;    
};

//キャラの画面X座標
Game_CharacterBase.prototype.screenX = function() {
    var tw = $gameMap.tileWidth();
    return Math.round(this.scrolledX() * tw + tw / 2  + this._revisionX);
};
//キャラの画面Y座標
Game_CharacterBase.prototype.screenY = function() {
    var th = $gameMap.tileHeight();
    return Math.round(this.scrolledY() * th + th - this.shiftY() - this.jumpHeight() + this._revisionY);
};
//キャラに表示するアニメの画面座標
var _Sprite_Animation_prototype_updatePosition = Sprite_Animation.prototype.updatePosition
Sprite_Animation.prototype.updatePosition = function() {
    _Sprite_Animation_prototype_updatePosition.apply(this, arguments);
    //ここから追加分
    this.x += this._target._character._anime_revisionX;
    this.y += this._target._character._anime_revisionY;
};
})();

