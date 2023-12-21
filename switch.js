let button = document.querySelector("#switchColor");
let checkbox = document.querySelector("#darkmode-toggle");

checkbox.addEventListener("change", (elem) => {
	console.log(elem.checked);
	let baliseStyle = document.querySelector("#colorCssFile");

	if (baliseStyle.getAttribute("href") === "light.css") {
		baliseStyle.setAttribute("href", "dark.css");
		return
	}

	baliseStyle.setAttribute("href", "light.css");
});