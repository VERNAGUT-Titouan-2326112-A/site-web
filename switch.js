let button = document.querySelector("#switchColor");
let checkbox = document.querySelector("#darkmode-toggle");

function switchCssFile() {
	let baliseStyle = document.querySelector("#colorCssFile");

	if (baliseStyle.getAttribute("href") === "light.css") {
		baliseStyle.setAttribute("href", "dark.css");
		return
	}

	baliseStyle.setAttribute("href", "light.css");
}


checkbox.addEventListener("change", switchCssFile);