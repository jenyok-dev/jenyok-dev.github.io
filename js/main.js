jQuery(document).ready(function($){	
	function lang_start() {
		var t = this, lang_s = $("#langs_script");
		if (!lang_s.is("script")) $("<script />", {src: "../js/langs/" + $(t).text() + ".js", id: "langs_script"}).load(function(){ lang_process(t); }).appendTo("head");
		else lang_s.load(function(){ lang_process(t); }).attr("src", "../js/langs/" + $(t).text() + ".js");
	}
	function lang_process(t) {
		history.pushState(null, "", "/" + $(t).text() + "/");
		$("title").text(window.CurrentLang.title);
		$('meta[name="description"]', 'meta[name="keywords"]').attr("content", window.CurrentLang.title);
		$("h1").text(window.CurrentLang.first);
		$("p").text(window.CurrentLang.second);
		var curr = $("span", t.parentNode);
		$("<a />", {href: "javascript:;", text: curr.text()}).click(lang_start).insertBefore(curr);
		curr.remove();
		$("<span />", {text: $(t).text()}).insertBefore(t);
		$(t).remove();
	}
	$(".langs a").click(lang_start);
});