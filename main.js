window.onload = function () {
    if (!window.localStorage) return alert("your browser very old, please update or change");
	var lang = localStorage.getItem("lang");
    if (lang == null) {
	lang = window.navigator.language || window.navigator.systemLanguage.substring(0, 2);
	localStorage.setItem("lang", lang);
	console.log("from browser");
    } else console.log("from localStorage");
    console.log(lang);
};
