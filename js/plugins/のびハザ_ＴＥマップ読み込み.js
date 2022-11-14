//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc rpg_rpg_scenesを変更。
 * @author S.K
 *
 * @help
 * ゲーム起動時にMap001.jsonを読み込みます。
 *
 * プラグインコマンドはありません。
 * 
 */

(function() {
//ゲーム起動時の処理再定義

Scene_Boot.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    SoundManager.preloadImportantSounds();
    if (DataManager.isBattleTest()) {
        DataManager.setupBattleTest();
        SceneManager.goto(Scene_Battle);
    } else if (DataManager.isEventTest()) {
        DataManager.setupEventTest();
        SceneManager.goto(Scene_Map);
    } else {
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        //ここから追加
        DataManager.loadDataFile("TEdata", "Map001.json");
        //ここまで
        SceneManager.goto(Scene_Title);
        Window_TitleCommand.initCommandPosition();
    }
    this.updateDocumentTitle();
};

})();

