$(document).ready(function() {
	$('#subNewUrlBtn').click( function() {
		localStorage["previewUrl"] = $("#previewFeedUrl").val();
		window.location.hash = "previewHomePage";
		
		// $.get("http://192.168.29.134:1234/feed/preview", {
				// typ:"json",
				// url:url
			// }
			// , function(data) {
				// var result = JSON.parse(data);
				// alert(url);
				// if(result.meta && result.meta.success == true) {
					// contentHtml = "";
					// contentHtml += ("@if (model.success) {\n");
					// contentHtml += ("	<div class=\"row-fluid\"> <!-- tiêu đề -->\n");
					// contentHtml += ("		<div class=\"page-header\">\n");
					// contentHtml += ("			<h3><a href=\"@(model.feed.link || model.url)\">@model.feed.title</a></h3>\n");
					// contentHtml += ("			<br/>\n");
					// contentHtml += ("			<a id=\"prevUrl\" href=\"@(model.url)\" style=\"display:none\"></a>\n");
					// contentHtml += ("			@if (!model.subscribed) {\n");
					// contentHtml += ("				<button id=\"subNewUrlBtn\" type=\"button\" class=\"btn btn-primary\" data-loading-text=\"Đang xử lý...\" data-complete-text=\"Đang được theo dõi\">Theo dõi nguồn tin này</button>\n");
					// contentHtml += ("				<div id=\"subResult\"></div>\n");
					// contentHtml += ("				<script src=\"js/preview_subscribe.js\"></script>\n");
					// contentHtml += ("			} else {\n");
					// contentHtml += ("				<button type=\"button\" class=\"btn btn-success disabled\">Đang được theo dõi</button>\n");
					// contentHtml += ("			}\n");
					// contentHtml += ("		</div>\n");
					// contentHtml += ("	</div>\n");
					// contentHtml += ("	<div id=\"itemList\">\n");
					// contentHtml += ("	@if (model.items && model.items.length > 0) {\n");
					// contentHtml += ("		@model.items.forEach(function(item, index){\n");
					// contentHtml += ("			<div id=\"@(item.guid || index)\" class=\"row-fluid\">  <!-- 1 dòng tin tức-->\n");
					// contentHtml += ("				<div class=\"span12\">\n");
					// contentHtml += ("					<div class=\"span10\">\n");
					// contentHtml += ("						<a href=\"@(item.link || (\"#\" + (item.guid || index)))\">\n");
					// contentHtml += ("						<p>\n");
					// contentHtml += ("							<strong>@item.title</strong>\n");
					// contentHtml += ("						</p>\n");
					// contentHtml += ("						</a>\n");
					// contentHtml += ("						<p>@item.description</p>\n");
					// contentHtml += ("					</div>\n");
					// contentHtml += ("				</div>\n");
					// contentHtml += ("			</div>\n");
					// contentHtml += ("		})\n");
					// contentHtml += ("	}\n");
					// contentHtml += ("	</div>\n");
					// contentHtml += ("} else {\n");
					// contentHtml += ("	<h4>@model.error.message</h4>\n");
					// contentHtml += ("}\n");
					// /*result.data.items.forEach(function(item, index){
						// var itemHtml = '<div id="itemNum' + index + '" class="row-fluid singleItem">  <!-- 1 dòng tin tức--><div class="span12"><div style="display:none" class="itemDate">'+ (item.date) + '</div><div style="display:none" class="itemPubDate">' + (item.pubdate) + '</div><div class="span10"><p><a href="/api/item/details/@(item._id)?scope=private"><strong>' + item.title + '</strong></a></p><p>' + item.summary + '</p></div></div></div>';
						// $("#caigido").append(itemHtml);
					// });*/
					// vash.config.htmlEscape = false;
					// var vashTemplate = vash.compile(contentHtml);
					// $("#list_preview_item").html(vashTemplate({
						// error:result.meta.error,
						// success:result.meta.success,
						// feed:result.data.feed,
						// items:result.data.items
					// }));
					
				// } else {
					// $("#subResult").html("Không thể theo dõi. Lỗi: " + result.meta.error.message);
				// }
			// });
	});
});