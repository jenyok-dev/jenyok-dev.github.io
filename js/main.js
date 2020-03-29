window.onload = function () {
    if (!window.localStorage) return alert("your browser very old, please update or change");
	var lang = localStorage.getItem("lang");
    if (lang == null) {
        lang = window.navigator.language || window.navigator.systemLanguage.substring(0, 2);
        localStorage.setItem("lang", lang);
		console.log("from browser");
    } else console.log("from localStorage");
    console.log(lang);
    var scr = document.createElement("script");
    scr.setAttribute("src", "/js/langs/"+lang+".js");
    document.getElementsByTagName("head")[0].appendChild(scr);
    document.getElementsByTagName("title")[0].innerHTML = "My site";
    document.getElementsByTagName("h1")[0].innerHTML = "Hello World";
    document.getElementsByTagName("p")[0].innerHTML = "I'm hosted with GitHub Pages.";
};