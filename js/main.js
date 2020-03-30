window.onload = function() {

	var k, d = document, l_a = d.querySelectorAll(".langs a");

	function lang_process(t) {

		var a = d.createElement("a"),
		span  = d.createElement("span"),
		curr  = t.parentNode.querySelector("span");

		history.pushState(null, "", "/" + t.innerText + "/");

		a.addEventListener("click", lang_handler, false);
		a.href         = "javascript:;";
		a.innerText    = curr.innerText;
		span.innerText = t.innerText;

		t.parentNode.insertBefore(a, curr);
		t.parentNode.insertBefore(span, t);	
		t.parentNode.removeChild(curr);
		t.parentNode.removeChild(t);

		// change language in tags
		d.querySelector("title").innerText = window.CurrentLang.title;
		d.querySelector('meta[name="description"]').content = window.CurrentLang.title;
		d.querySelector('meta[name="keywords"]').content = window.CurrentLang.title;
		d.querySelector("h1").innerText = window.CurrentLang.first;
		d.querySelector("p").innerText = window.CurrentLang.second;

	}

	function lang_handler() {

		var t  = this, 
		script = d.createElement("script"),
		list   = d.querySelectorAll("script");

		if (list.length == 2) list[0].parentNode.removeChild(list[1]);

		script.src    = "../js/langs/" + this.innerText + ".js";
		script.onload = function() { lang_process(t); };
		list[0].parentNode.appendChild(script);

		localStorage.setItem("lang", this.innerText);

	}

	for(k in l_a)
		if (typeof l_a[k] == "object") 
			l_a[k].addEventListener("click", lang_handler, false);

};
