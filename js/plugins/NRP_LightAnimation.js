//=============================================================================
// NRP_LightAnimation.js
//=============================================================================
/*:
 * @plugindesc v1.00 Lightens animation processing.
 * @author Takeshi Sunagawa (http://newrpg.seesaa.net/)
 *
 * @help The animation processing is reduced
 * by suppressing the creation of unnecessary cells.
 * 
 * <Terms>
 * There are no restrictions.
 * Modification, redistribution freedom, commercial availability,
 * and rights indication are also optional.
 * The author is not responsible,
 * but we will respond to defects as far as possible.
 */

/*:ja
 * @plugindesc v1.00 アニメーション処理を軽量化します。
 * @author 砂川赳（http://newrpg.seesaa.net/）
 *
 * @help 不要なセルの作成を抑制し、アニメーション処理を軽量化します。
 * 
 * ■利用規約
 * 特に制約はありません。
 * 改変、再配布自由、商用可、権利表示も任意です。
 * 作者は責任を負いませんが、不具合については可能な範囲で対応します。
 */
(function() {
"use strict";

/**
 * 【関数上書】セルの作成
 */
Sprite_Animation.prototype.createCellSprites = function() {
    // 使用しているセル番号のＭＡＸを取得（０始まり）
    var maxCell = 0;
    // フレームごとのループ
    this._animation.frames.forEach(function(frame) {
        // セルごとのループ
        frame.forEach(function(cell, index) {
            // 取得済みの最大値よりセル番号が大きく、
            // かつ、パターンが０以上
            if (index > maxCell && cell[0] >= 0) {
                maxCell = index;
            }
        });
    });

    // 常に１６セルを確保していたのを修正し、必要なセルだけを生成する。
    this._cellSprites = [];
    for (var i = 0; i <= maxCell; i++) {
        var sprite = new Sprite();
        sprite.anchor.x = 0.5;
        sprite.anchor.y = 0.5;
        this._cellSprites.push(sprite);
        this.addChild(sprite);
    }
};

})();
