var num = 0;

const sliderImages = [
	["https://source.unsplash.com/UmV2wr-Vbq8/2400x1600", "img"],
	["https://source.unsplash.com/RTrZvGlvlQc/2400x1600", "img"],
	["https://source.unsplash.com/3CTuFxZBra0/2400x1600", "img"],
	["https://source.unsplash.com/341OczdirBM/2400x1600", "img"],
	["https://source.unsplash.com/3wHN5r2pOoQ/2400x1600", "img"],
	["https://source.unsplash.com/6vIU7hDvQhw/2400x1600", "img"],
];

function slideshow(slide_num) {
	document.getElementById("slide").src = sliderImages[slide_num][0];
	document.getElementById("slide").alt = sliderImages[slide_num][1];
}

function slideshowUp() {
	num++;
	num = num % sliderImages.length;
	slideshow(num);
}

function slideshowBack() {
	num--;
	if (num < 0) {
		num = sliderImages.length - 1;
	}
	num = num % sliderImages.length;
	slideshow(num);
}

function playImageArray() {
	if (num == sliderImages.length) {
		num = 0;
	}
	document.getElementById("slide").src = sliderImages[num][0];
	num = num + 1;
}
