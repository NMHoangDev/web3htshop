const showPopup = document.querySelector('.show-popup');
const showPopup1 = document.querySelector('.show-popup-1');
const popupContainer = document.querySelector('.popup-container');
const popupContainer1 = document.querySelector('.popup-container-1');
const closeBtn = document.querySelectorAll('.close-btn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

showPopup1.onclick = () => {
    popupContainer1.classList.add('active');
}

closeBtn.forEach(btn => {
    btn.onclick = () => {
        popupContainer.classList.remove('active');
        popupContainer1.classList.remove('active');
    }
});