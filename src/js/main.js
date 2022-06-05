const card = document.querySelector(".card");
const testimonyBtn = document.querySelector(".testimony__btn");

const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup__btn");
const overlay = document.querySelector(".overlay");

testimonyBtn.addEventListener("click", function () {
	popup.classList.add("open");
	overlay.style.display = "block";

	setTimeout(function () {
		overlay.classList.add("open");
	}, 10);
});

////////////////////

function closePopup() {
	popup.classList.remove("open");
	overlay.classList.remove("open");
	setTimeout(function () {
		overlay.style.display = "none";
	}, 200);
}

overlay.addEventListener("click", closePopup);

popupBtn.addEventListener("click", closePopup);
