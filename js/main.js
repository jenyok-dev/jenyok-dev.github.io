window.onload = function () {
    if (!window.localStorage) return alert("your browser very old, please update or change");
	var lang = localStorage.getItem("lang");
    if (lang == null) {
        lang = window.navigator.language || window.navigator.systemLanguage.substring(0, 2);
	    if (lang != "uk" && lang != "ru" && lang != "en") lang = "en";
        localStorage.setItem("lang", lang);
		console.log("from browser");
    } else console.log("from localStorage");
    console.log(lang);
    var scr = document.createElement("script");
    scr.setAttribute("src", "/js/langs/"+lang+".js");
    scr.setAttribute("onload", "setLangs()");
    document.getElementsByTagName("head")[0].appendChild(scr);
};

function setLangs() {
    document.getElementsByTagName("title")[0].innerHTML = window.CurrentLang.title;
    document.getElementsByTagName("h1")[0].innerHTML = window.CurrentLang.first;
    document.getElementsByTagName("p")[0].innerHTML = window.CurrentLang.second;	
}
