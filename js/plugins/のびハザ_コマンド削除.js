//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc rpg_windowsを変更。
 * @author S.K
 *
 * @help
 * 不要なコマンド(オプション、最強装備、防具など)を非表示に設定します。
 *
 * プラグインコマンドはありません。
 * 
 */

(function() {
//タイトルコマンド再定義
Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
  //this.addCommand(TextManager.options,   'options');
};

//メニューコマンド再定義
Window_MenuCommand.prototype.makeCommandList = function() {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
  //this.addOptionsCommand();
    this.addSaveCommand();
    this.addGameEndCommand();
};

//装備コマンド再定義
Window_EquipCommand.prototype.maxCols = function() {
    return 2;
};

Window_EquipCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.equip2,   'equip');
  //this.addCommand(TextManager.optimize, 'optimize');
    this.addCommand(TextManager.clear,    'clear');
};

//アイテムカテゴリー再定義
Window_ItemCategory.prototype.maxCols = function() {
    return 3;
};
Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand(TextManager.item,    'item');
    this.addCommand(TextManager.weapon,  'weapon');
  //this.addCommand(TextManager.armor,   'armor');
    this.addCommand(TextManager.keyItem, 'keyItem');
};




})();

