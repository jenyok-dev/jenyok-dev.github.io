window.onload = function () {
    if (!window.localStorage) return alert("your browser very old");
	console.log("test js");
	var lang = window.navigator.language || window.navigator.systemLanguage.substring(0, 2);
	console.log(lang);
    localStorage.setItem("TestStorageLang", lang);
    console.log(localStorage.getItem("TestStorageLang"));
};
