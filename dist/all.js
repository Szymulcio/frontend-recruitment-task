const card=document.querySelector(".card"),testimonyBtn=document.querySelector(".testimony__btn"),popup=document.querySelector(".popup"),popupDataTable=document.querySelector(".popup__data-container tbody"),resetPopupBtn=document.querySelector(".popup__btn"),closePopupBtn=document.querySelector(".popup__btn--close"),overlay=document.querySelector(".overlay"),counter=popup.querySelector("span");function openPopup(){popup.style.display="flex",overlay.style.display="block",setTimeout(function(){overlay.classList.add("open"),popup.classList.add("open")},50),popupDataTable.innerHTML="",getPersonData("https://jsonplaceholder.typicode.com/users")}function closePopup(){popup.classList.remove("open"),overlay.classList.remove("open"),setTimeout(function(){overlay.style.display="none",popup.style.display="none"},200)}function handleClick(){updateCounter(),5<=Number(localStorage.timesClicked)&&(resetPopupBtn.style.display="block",resetPopupBtn.classList.add("open"))}function updateCounter(){localStorage.timesClicked=Number(localStorage.timesClicked)+1,counter.innerHTML=localStorage.timesClicked}async function getJSON(e){const t=await fetch(e);return t.json()}async function getPersonData(e){for(const t of await getJSON(e))renderPerson(t)}async function renderPerson(e){e=`
<tr class="popup__data-row">
    <td class="popup__data-cell">${e.name}</td>
    <td class="popup__data-cell">${e.email}</td>
    <td class="popup__data-cell popup__data-cell--adress">
        <li>${e.address.city}</li>
        <li>${e.address.street}</li>
        <li>${e.address.suite}</li>
    </td>     
    <td class="popup__data-cell">${e.phone}</td>
    <td class="popup__data-cell">${e.company.name}</td>
</tr>`;popupDataTable.insertAdjacentHTML("beforeend",e)}localStorage.timesClicked||=localStorage.timesClicked=0,testimonyBtn.addEventListener("click",function(){openPopup(),handleClick()}),overlay.addEventListener("click",closePopup),closePopupBtn.addEventListener("click",closePopup),resetPopupBtn.addEventListener("click",function(){localStorage.timesClicked=-1,updateCounter(),setTimeout(function(){closePopup()},2e3)});