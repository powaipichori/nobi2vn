//===================================================================
//SearchLimit.js
//経路探索の範囲の上限値を変更するプラグイン
//===================================================================
//Copyright (c) 2017 蔦森くいな
//Released under the MIT license.
//http://opensource.org/licenses/mit-license.php
//-------------------------------------------------------------------
//blog   : http://paradre.com/
//Twitter: https://twitter.com/Kuina_T
//===================================================================
//＜更新情報＞
//  ver1.0.0 2017/08/02 初版
//===================================================================

/*:
 * @plugindesc 経路探索の範囲の上限値を変更します
 * @author 蔦森くいな
 *
 * @help ツクールＭＶ標準の経路探索の範囲の上限値を変更できます。
 * 上限が小さいと処理が軽くなりますが精度は低くなります。
 * 上限が大きいと処理が重くなりますが精度は高くなります。
 * 
 * 経路探索を行うには、公式プラグイン「SmartPath.js」が簡単です。
 * このプラグインはあくまで探索範囲の上限値を変更するだけなので
 * 実際の探索処理は他のプラグインかスクリプトの利用をお願いします。
 * 
 * 
 * @param SearchLimit
 * @desc 経路探索の範囲上限
 * @default 12
 *
 * 利用規約：
 * このプラグインは商用・非商用を問わず無料でご利用いただけます。
 * 使用報告やクレジット表記も必要ありません。
 * どのようなゲームに使っても、どのように加工していただいても構いません。
 * MIT Licenseにつき著作権表示とライセンスURLは残しておいて下さい。
 */

(function() {
    'use strict';
    
    Game_Character.prototype.searchLimit = function() {
        return Number(PluginManager.parameters("SearchLimit")["SearchLimit"]);
    };
    
})();