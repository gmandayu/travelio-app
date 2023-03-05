// slider
const slideContainer = document.querySelector(".slider");
const sliderText = document.querySelector(".slider__text");
const btnLeft = document.querySelector(".slider__btn-left");
const btnRight = document.querySelector(".slider__btn-right");

const sliderImages = [
	{
		src: "https://source.unsplash.com/UmV2wr-Vbq8/2400x1600",
		text: "Taste the magic",
	},
	{
		src: "https://source.unsplash.com/RTrZvGlvlQc/2400x1600",
		text: "Taste the incredible",
	},
	{
		src: "https://source.unsplash.com/3CTuFxZBra0/2400x1600",
		text: "Taste the incredible",
	},
	{
		src: "https://source.unsplash.com/341OczdirBM/2400x1600",
		text: "Taste the incredible",
	},
	{
		src: "https://source.unsplash.com/3wHN5r2pOoQ/2400x1600",
		text: "Taste the incredible",
	},
	{
		src: "https://source.unsplash.com/6vIU7hDvQhw/2400x1600",
		text: "Taste the incredible",
	},
];

let slideCounter = 0;

const startSlider = () => {
	slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
	// sliderText.innerHTML = sliderImages[0].text;
};

btnRight.addEventListener("click", function () {
	if (slideCounter === sliderImages.length - 1) {
		slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
		// sliderText.innerHTML = sliderImages[0].text;
		slideCounter = -1;

		// slideContainer.classList.add("fadeIn");
		setTimeout(() => {
			// slideContainer.classList.remove("fadeIn");
		}, 1000);
	}
	slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter + 1].src})`;
	// sliderText.innerHTML = sliderImages[slideCounter + 1].text;
	slideCounter++;
	// slideContainer.classList.add("fadeIn");
	setTimeout(() => {
		// slideContainer.classList.remove("fadeIn");
	}, 1000);
});

btnLeft.addEventListener("click", function () {
	if (slideCounter === 0) {
		slideContainer.style.backgroundImage = `url(${sliderImages[sliderImages.length - 1].src})`;
		// sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
		slideCounter = sliderImages.length;
		// slideContainer.classList.add("fadeIn");
		setTimeout(() => {
			// slideContainer.classList.remove("fadeIn");
		}, 1000);
	}

	slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter - 1].src})`;
	// sliderText.innerHTML = sliderImages[slideCounter - 1].text;
	slideCounter--;
	// slideContainer.classList.add("fadeIn");
	setTimeout(() => {
		// slideContainer.classList.remove("fadeIn");
	}, 1000);
});

startSlider();

// const startSlider = () => {
// 	slideContainer.style.backgroundImage = `linear-gradient(
//       to right,
//       rgba(34, 34, 34, 0.4),
//       rgba(68, 68, 68, 0.4)
//     ), url(${sliderImages[0].src})`;
// 	// sliderText.innerHTML = sliderImages[0].text;
// };

// btnRight.addEventListener("click", function () {
// 	if (slideCounter === sliderImages.length - 1) {
// 		slideContainer.style.backgroundImage = `linear-gradient(
//       to right,
//       rgba(34, 34, 34, 0.4),
//       rgba(68, 68, 68, 0.4)
//     ), url(${sliderImages[0].src})`;
// 		// sliderText.innerHTML = sliderImages[0].text;
// 		slideCounter = -1;

// 		slideContainer.classList.add("fadeIn");
// 		setTimeout(() => {
// 			slideContainer.classList.remove("fadeIn");
// 		}, 1000);
// 	}
// 	slideContainer.style.backgroundImage = `linear-gradient(
//       to right,
//       rgba(34, 34, 34, 0.4),
//       rgba(68, 68, 68, 0.4)
//       ),url(${sliderImages[slideCounter + 1].src})`;
// 	// sliderText.innerHTML = sliderImages[slideCounter + 1].text;
// 	slideCounter++;
// 	slideContainer.classList.add("fadeIn");
// 	setTimeout(() => {
// 		slideContainer.classList.remove("fadeIn");
// 	}, 1000);
// });

// btnLeft.addEventListener("click", function () {
// 	if (slideCounter === 0) {
// 		slideContainer.style.backgroundImage = `linear-gradient(
//       to right,
//       rgba(34, 34, 34, 0.4),
//       rgba(68, 68, 68, 0.4)
//     ),url(${sliderImages[sliderImages.length - 1].src})`;
// 		// sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
// 		slideCounter = sliderImages.length;
// 		slideContainer.classList.add("fadeIn");
// 		setTimeout(() => {
// 			slideContainer.classList.remove("fadeIn");
// 		}, 1000);
// 	}

// 	slideContainer.style.backgroundImage = `linear-gradient(
//       to right,
//       rgba(34, 34, 34, 0.4),
//       rgba(68, 68, 68, 0.4)
//     ),url(${sliderImages[slideCounter - 1].src})`;
// 	// sliderText.innerHTML = sliderImages[slideCounter - 1].text;
// 	slideCounter--;
// 	slideContainer.classList.add("fadeIn");
// 	setTimeout(() => {
// 		slideContainer.classList.remove("fadeIn");
// 	}, 1000);
// });

// startSlider();
