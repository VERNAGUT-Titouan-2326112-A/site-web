let checkbox = document.querySelector("#darkmode-toggle");

checkbox.addEventListener("change", () => {
	let baliseStyle = document.querySelector("#colorCssFile");

	if (baliseStyle.getAttribute("href") === "light.css") {
		baliseStyle.setAttribute("href", "dark.css");
		return;
	}

	baliseStyle.setAttribute("href", "light.css");
});

let menu = document.querySelector("#openBtn");

menu.addEventListener("click", () => {
	let nav = document.querySelector("#nav-menu");

	if (nav.classList.contains("nav-hidden")){
		nav.classList.remove("nav-hidden");
		return;
	}
	nav.classList.add("nav-hidden");
});