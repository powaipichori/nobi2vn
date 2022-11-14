//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc rpg_scenesを変更。
 * @author S.K
 *
 * @help
 * ゲーム開始時に指定した音声ファイルを再生します。
 *
 * プラグインコマンドはありません。
 * 
 * @param タイトルコール
 * @type string
 * @desc タイトルコールに使用する音声ファイルです。
 */

var parameters = PluginManager.parameters('のびハザ_タイトルコール');
var タイトルコール = parameters['タイトルコール'];
(function() {
//ゲーム開始処理再定義
Scene_Title.prototype.commandNewGame = function() {
    DataManager.setupNewGame();
    this._commandWindow.close();
    AudioManager.playSe({"name":タイトルコール,"volume":100,"pitch":100,"pan":0})
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
};
})();

