const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const interested = document.getElementById("interest");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const nameVal = name.value.trim();
	const emailVal = email.value.trim();
	const interestedVal = interested.value.trim();

	if (nameVal == "" && emailVal == "" && interestedVal == -1) {
		window.alert("Please provide data properly!");
	} else if (nameVal == "") {
		window.alert("Please provide your name properly!");
	} else if (emailVal == "") {
		window.alert("Please provide your email properly!");
	} else if (interestedVal == -1) {
		window.alert("Please provide your interest properly!");
	} else if (!isEmail(emailVal)) {
		window.alert("Not a valid email!");
	} else {
		window.alert("Data saved. Thank you!");
	}
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email,
	);
}
