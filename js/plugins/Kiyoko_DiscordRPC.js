//=============================================================================
// 
// 
//=============================================================================

/*:
 * @plugindesc Thêm tính năng hiển thị tiến độ chơi của trò chơi ở tài khoản Discord.
 * @author Nozaki Yuu
 *
 * @param Client ID
 * @desc ID của ứng dụng hiển thị trạng thái. Xem hướng dẫn ở mục Help.
 * @default 897092390492442684
 *
 * @param Icon
 * @desc Tên Asset của biểu tượng lớn đã cài đặt ở trên Discord.
 * @default kiyoko
 *
 * @help ------------------------------------------------
 * Suzuki Nezuko (Tamiko Kiyoko) mãi đỉnh!
 * ------------------------------------------------
 * Plugin này sẽ giúp trò chơi có thể hiển thị được tên và trạng thái
 * của trò chơi trên Discord.
 *
 * PLUGIN NÀY CHỈ HỖ TRỢ TRÊN MÁY TÍNH, KHÔNG HỖ TRỢ TRÊN ĐIỆN THOẠI
 * HAY TRÊN TRÌNH DUYỆT!
 *
 * Cách sử dụng:
 * - Đầu tiên, hãy sao thư mục "node_modules" vào thư mục "www" của
 * game và cả thư mục chứa tệp tin "Game.exe" (nếu có).
 * - Sau đó hãy vào trang sau: https://discord.com/developers/
 * applications
 * - Nhấn vào nút "New Application" để tạo ứng dụng mới. Nhập tên
 * ứng dụng là tên sẽ được hiển thị trong trạng thái.
 * - Tiếp theo vào phần thông tin của ứng dụng và nhấp vào phần
 * "Rich Presence", kéo xuống phần "Rich Presence Assets" và tải
 * một ảnh lên để làm Asset cho ứng dụng. Đặt một tên bất kì và
 * nhớ cái tên này.
 * - Sau đó, hãy vào phần "General Information" của ứng dụng,
 * kéo xuống phần "Application ID" và nhấn vào nút "Copy" để sao
 * chép ID của ứng dụng đó, và dán nó vào phần "Client ID" trong
 * cài đặt của Plugin này.
 * - Cuối cùng là, nhập tên bạn đã đặt trong khi tải lên ảnh Asset
 * biểu tượng của ứng dụng vào phần "Icon" trong cài đặt của Plugin
 * này. Thế là xong!
 *
 * -------------------------------------------------
 * Và nếu được thì hãy subscribe cho kênh Suzuki Nezuko nha :Đ
 * https://www.youtube.com/channel/UCQ1XpzUJuxBUPB1wJ34Ojag
 *
 */

(function() {
	if (typeof(require) != "function") return;
	var Params = PluginManager.parameters("Kiyoko_DiscordRPC"), ready = false;
	const rpc = require("discord-rpc");
	const client = new rpc.Client({ transport: 'ipc' });
	const time = Date.now();
	var interval;
	if (!ready) {
		interval = setInterval(() => {
			client.login({ clientId: Params["Client ID"] }).catch((err) => console.error("Có lỗi xảy ra ở Plugin \"Kiyoko_DiscordRPC\".\n" + err.stack));
		}, 5000);
		client.login({ clientId: Params["Client ID"] }).catch((err) => console.error("Có lỗi xảy ra ở Plugin \"Kiyoko_DiscordRPC\".\n" + err.stack));
	}
	else clearInterval(interval);
	function update(title, text) {
		client.setActivity({
			startTimestamp: time,
			largeImageKey: Params["Icon"],
			largeImageText: "RPG Maker MV " + Utils.RPGMAKER_VERSION + ", through Kiyoko_DiscordRPC"
		});
		beforeTitle = title;
		beforeState = text;
	}
	client.on("ready", () => {
		update();
	});
})();