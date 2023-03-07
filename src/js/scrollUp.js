function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	if (this.scrollY >= 200) {
		scrollUp.classList.add("show-scroll");
	} else {
		scrollUp.classList.remove("show-scroll");
	}
}
window.addEventListener("scroll", scrollUp);

const section = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.scrollY;

	section.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
		} else {
			document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
	distance: "60px",
	duration: 2800,
});
sr.reveal(`.home__data, .home__social-link,.home__info,.package__card,.footer__data, .footer__rights, .callus__data`, {
	origin: "top",
	interval: 100,
});
sr.reveal(`.about__data,.subscribe__description`, {
	origin: "left",
});
sr.reveal(`.about__img-overlay,.subscribe__form`, {
	origin: "right",
	interval: 100,
});
