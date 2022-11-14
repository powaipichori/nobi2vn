//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc Bật tuỳ chọn YouTube Mode cho game Nobihaza.
 * @author Nozaki Yuu
 *
 * @help ------------------------------------------------
 * Suzuki Nezuko (Tamiko Kiyoko) mãi đỉnh!
 * ------------------------------------------------
 * Plugin này sẽ giúp mở YouTube Mode cho game, hay cụ thể
 * là giúp thay đổi một số hình ảnh của game thành một hình
 * ảnh khác khi đạt một số điều kiện nhất định.
 *
 * * Cách dùng: Chỉ cần thêm Plugin này vào danh sách các
 * Plugins ở trong Plugin Manager và tuỳ chỉnh các cài đặt
 * cần thiết để Plugin được hoạt động tốt.
 *
 * - Prefix: Ký tự đứng trước tên hình ảnh gốc cần có để thay
 * thế ảnh gốc. Ảnh gốc chỉ được thay thế bằng ảnh có Prefix
 * này khi có sự xuất hiện của Prefix đó.
 *
 * - Suffix: Cũng tương tự như Prefix, nhưng là ký tự đứng
 * sau tên hình ảnh gốc cần có để thay thế ảnh gốc.
 *
 * - Chữ hiển thị: Chữ được hiển thị trong phần Tuỳ chọn để
 * bật YouTube Mode.
 *
 * Một hình ảnh sẽ chỉ được thay thế khi đạt có sự xuất hiện
 * của cả Prefix và Suffix trong tên ảnh (nếu có). Ví dụ như
 * bạn có một file ảnh tên là "Jaian2" và bạn để Suffix là
 * "_blurred" (Prefix để trống), thì khi YouTube Mode được bật
 * và khi game sử dụng đến file "Jaian2" thì nó sẽ lập tức
 * được chuyển về file "Jaian2_blurred". Nếu không có file
 * này thì file gốc sẽ được sử dụng.
 *
 * @param Prefix
 * @desc Ký tự đứng trước tên hình ảnh gốc cần thiết để thay thế ảnh gốc.
 *
 * @param Suffix
 * @desc Ký tự đứng sau tên hình ảnh gốc cần thiết để thay thế ảnh gốc.
 * @default _blurred
 *
 * @param Chữ hiển thị
 * @desc Chữ được hiển thị trong phần Cài đặt.
 * @default YouTube Mode
 *
 */
 
 
 /*
 ------------------------------------------------
 Suzuki Nezuko (Tamiko Kiyoko) mãi đỉnh!
 ------------------------------------------------
 */

(function() {
	
	var Params = PluginManager.parameters("Kiyoko_YouTubeMode");
	
	var _kiyoko_general_options = Window_Options.prototype.addGeneralOptions;
	Window_Options.prototype.addGeneralOptions = function() {
		_kiyoko_general_options.call(this);
		this.addCommand(Params["Chữ hiển thị"], 'YTMode');
	};

	ConfigManager.makeData = function() {
		var config = {};
		config.alwaysDash = this.alwaysDash;
		config.commandRemember = this.commandRemember;
		config.YTMode = this.YTMode;
		config.bgmVolume = this.bgmVolume;
		config.bgsVolume = this.bgsVolume;
		config.meVolume = this.meVolume;
		config.seVolume = this.seVolume;
		return config;
	};

	ConfigManager.applyData = function(config) {
		this.alwaysDash = this.readFlag(config, 'alwaysDash');
		this.commandRemember = this.readFlag(config, 'commandRemember');
		this.YTMode = this.readFlag(config, 'YTMode');
		this.bgmVolume = this.readVolume(config, 'bgmVolume');
		this.bgsVolume = this.readVolume(config, 'bgsVolume');
		this.meVolume = this.readVolume(config, 'meVolume');
		this.seVolume = this.readVolume(config, 'seVolume');
	};
	
	function kiyokoCheckExistence(url) {
		if (!url) return false;
		var req = new XMLHttpRequest();
		req.open("HEAD", url, false);
		try {
			req.send();
			return req.status == 200;
		}
		catch (err) {
			return false;
		}
	}
	
	ImageManager.loadPicture = function(filename, hue) {
		var YTModePath = 'img/pictures/' + Params["Prefix"] + filename + Params["Suffix"] + '.png';
		if (ConfigManager.YTMode && kiyokoCheckExistence(YTModePath))
			return this.loadBitmap('img/pictures/', Params["Prefix"] + filename + Params["Suffix"], hue, true);
		return this.loadBitmap('img/pictures/', filename, hue, true);
	};
	
	ImageManager.loadFace = function(filename, hue) {
		var YTModePath = 'img/faces/' + Params["Prefix"] + filename + Params["Suffix"] + '.png';
		if (ConfigManager.YTMode && kiyokoCheckExistence(YTModePath))
			return this.loadBitmap('img/faces/', Params["Prefix"] + filename + Params["Suffix"], hue, true);
		return this.loadBitmap('img/faces/', filename, hue, true);
	};
	
})();

