const card = document.querySelector(".card");
const testimonyBtn = document.querySelector(".testimony__btn");

const popup = document.querySelector(".popup");
const resetPopupBtn = document.querySelector(".popup__btn");
const closePopupBtn = document.querySelector(".popup__btn--close");
const overlay = document.querySelector(".overlay");

const counter = popup.querySelector("span");

localStorage.timesClicked ||= localStorage.timesClicked = 0;

function openPopup() {
	popup.style.display = "flex";
	overlay.style.display = "block";

	setTimeout(function () {
		overlay.classList.add("open");
		popup.classList.add("open");
	}, 50);
}

function closePopup() {
	popup.classList.remove("open");
	overlay.classList.remove("open");

	setTimeout(function () {
		overlay.style.display = "none";
		popup.style.display = "none";
	}, 200);
}

function handleClick() {
	updateCounter();

	if (Number(localStorage.timesClicked) >= 5) {
		resetPopupBtn.style.display = "block";
		resetPopupBtn.classList.add("open");
	}
}

function updateCounter() {
	localStorage.timesClicked = Number(localStorage.timesClicked) + 1;
	counter.innerHTML = localStorage.timesClicked;
}

testimonyBtn.addEventListener("click", function () {
	openPopup();
	handleClick();
});

overlay.addEventListener("click", closePopup);
closePopupBtn.addEventListener("click", closePopup);

resetPopupBtn.addEventListener("click", function () {
	localStorage.timesClicked = -1;
	updateCounter();

	setTimeout(function () {
		closePopup();
	}, 2000);
});
