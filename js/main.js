jQuery(document).ready(function($){
	/*
		document.getElementsByTagName("title")[0].innerHTML = window.CurrentLang.title;
		document.getElementsByTagName("h1")[0].innerHTML = window.CurrentLang.first;
		document.getElementsByTagName("p")[0].innerHTML = window.CurrentLang.second;
	*/
	$(".langs a").click(function() {
		console.log($(this).text());
	});
});