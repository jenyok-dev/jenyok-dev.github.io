jQuery(document).ready(function($){
	$(".langs a").click(function() {
		if (!$("#lang_" + $(this).text()).is("script"))
			$("<script />", {src: "../js/langs/" + $(this).text() + ".js", id: "lang_" + $(this).text()}).appendTo("head");
		history.pushState(null, "", $(this).text()+"/");
		$('meta[name="description"]', 'meta[name="keywords"]').attr("content", window.CurrentLang.title);
		$("h1").text(window.CurrentLang.first);
		$("p").text(window.CurrentLang.second);		
	});
});