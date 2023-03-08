const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
	document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
	themeButton.classList.contains(iconTheme) ? "ri-moon-fill" : "ri-sun-fill";
};

if (selectedTheme) {
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
	themeButton.classList[selectedIcon === "ri-moon-fill" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
