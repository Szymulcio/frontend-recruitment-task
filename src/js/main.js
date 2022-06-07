const card = document.querySelector(".card");
const testimonyBtn = document.querySelector(".testimony__btn");

const popup = document.querySelector(".popup");
const popupDataTable = document.querySelector(".popup__data-container tbody");
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
	popupDataTable.innerHTML = "";
	getPersonData("https://jsonplaceholder.typicode.com/users");
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

function hideResetButton() {
	resetPopupBtn.style.display = "none";
	resetPopupBtn.classList.remove("open");
}

async function getJSON(url) {
	const response = await fetch(url);
	return response.json();
}

async function getPersonData(url) {
	const data = await getJSON(url);

	for (const person of data) {
		renderPerson(person);
	}
}

async function renderPerson(data) {
	const html = `
<tr class="popup__data-row">
    <td class="popup__data-cell">${data.name}</td>
    <td class="popup__data-cell">${data.email}</td>
    <td class="popup__data-cell">
		<table>
			<tbody>
				<tr>
					<td class="popup__data-cell--adress">${data.address.city}</td>
				</tr>
				<tr>
					<td class="popup__data-cell--adress">${data.address.street}</td>
				</tr>
				<tr>
					<td class="popup__data-cell--adress">${data.address.suite}</td>
				</tr>
			</tbody>
		</table>
    </td>     
    <td class="popup__data-cell">${data.phone}</td>
    <td class="popup__data-cell">${data.company.name}</td>
</tr>`;

	popupDataTable.insertAdjacentHTML("beforeend", html);
}

{
	/* <li>${data.address.city}</li>
        <li>${data.address.street}</li>
        <li>${data.address.suite}</li> */
}

/////////////////////////
//// EVENT LISTENERS ////

testimonyBtn.addEventListener("click", function () {
	openPopup();
	handleClick();
});

overlay.addEventListener("click", closePopup);
closePopupBtn.addEventListener("click", closePopup);

resetPopupBtn.addEventListener("click", function () {
	localStorage.timesClicked = -1;
	updateCounter();
	hideResetButton();

	setTimeout(function () {
		closePopup();
	}, 2000);
});
