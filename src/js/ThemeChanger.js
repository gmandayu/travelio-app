const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-solid fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
	document.body.classList.contains(darkTheme) ? "dark" : "light";
	const getCurrentIcon = () => {
		themeButton.classList.contains(iconTheme) ? "fa-solid fa-moon" : "fa-solid fa-sun";
	};
};

if (selectedTheme) {
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
	themeButton.classList[selectedIcon === "fa-solid fa-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
