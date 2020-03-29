jQuery(document).ready(function($){
	function lang_test_onload(t) {
		console.log(t);
	}	
	function lang_process() {
		var t = this, curr, lang_s = $("#langs_script");
		if (!lang_s.is("script")) $("<script />", {src: "../js/langs/" + $(this).text() + ".js", id: "langs_script"}).load(function(){
			lang_test_onload(t);
		}).appendTo("head");
		else lang_s.load(function(){ lang_test_onload(t); }).attr("src", "../js/langs/" + $(this).text() + ".js");
		history.pushState(null, "", "/" + $(this).text() + "/");
		$("title").text(window.CurrentLang.title);
		$('meta[name="description"]', 'meta[name="keywords"]').attr("content", window.CurrentLang.title);
		$("h1").text(window.CurrentLang.first);
		$("p").text(window.CurrentLang.second);
		curr = $("span", this.parentNode);
		$("<a />", {href: "javascript:;", text: curr.text()}).click(lang_process).insertBefore(curr);
		curr.remove();
		$("<span />", {text: $(this).text()}).insertBefore(this);
		$(this).remove();
	}
	$(".langs a").click(lang_process);
});