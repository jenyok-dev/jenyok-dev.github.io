jQuery(document).ready(function($){

	function lang_process(t) {

		var curr = $("span", t.parentNode);

		history.pushState(null, "", "/" + $(t).text() + "/");

		$("<a />", {href: "javascript:;", text: curr.text()}).click(lang_handler).insertBefore(curr);
		$("<span />", {text: $(t).text()}).insertBefore(t);
		curr.remove(); $(t).remove();

		$("title").text(window.CurrentLang.title);
		$('meta[name="description"]', 'meta[name="keywords"]').attr("content", window.CurrentLang.title);
		$("h1").text(window.CurrentLang.first);
		$("p").text(window.CurrentLang.second);
		
	}

	function lang_handler() {
		var t = this, script = document.createElement("script");
		script.src    = "../js/langs/" + $(this).text() + ".js";
		script.onload = function() { lang_process(t); };
		script.id     = "langs_script";
		$("#langs_script").remove();
		document.getElementsByTagName("head")[0].appendChild(script);
		localStorage.setItem("lang", $(this).text());
	}

	$(".langs a").click(lang_handler);

});