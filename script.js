// Pobranie przycisków z oferty 
const ppozBtn = document.getElementById('ppoz');
const atexBtn = document.getElementById('atex');
const sevesoBtn = document.getElementById('seveso');
const trainingBtn = document.getElementById('training');

//zmienne do zmiany oferty
const photoContainer = document.getElementById('photo-container');

//tablica do przycisków 
const subMenu = document.querySelector('.sub-menu');
const offerArea = document.querySelector('.main-offer-info__container');
const ppozButtonsArray = ['Instrukcja bezpieczeństwa pożarowego', 'Operat przeciwpożarowy', 'Ekspertyza ppoż', 'Uzgadnianie projektów architektoniczno-budowlanych', 'Nadzór ppoż. nad bezpieczeństwem pożarowym', 'Instrukcja bezpieczeństwa pożarowego'];
const atexButtonsArray = ['Ocena zagrożenia wybuchem', 'Ocena Ryzyka Wybuchu', 'Dokument zabezpieczenia przed wybuchem'];
const sevesoButtonsArray = ['Dokumentacja SEVESO', 'Raport o Bezpieczeństwie', 'Wewnętrzny Plan Operacyjno-Ratowniczy', 'Program Zapobiegania Awariom'];
const trainingButtonsArray = ['Szkolenia PPOŻ', 'Szkolenia BHP'];

const renderButtons = (offerId, buttonsArray) => {
    subMenu.innerHTML = '';
    for(const button of buttonsArray) {
        const buttonEl = document.createElement('button');
        buttonEl.textContent = button;
        buttonEl.setAttribute('id', `${offerId}-${button.id}`);
        buttonEl.classList = 'sub-menu-btn';
        subMenu.append(buttonEl);
    }
}

const changePhoto = (offerId) => {
    if(offerId === 'atex') {
        photoContainer.classList = '';

        photoContainer.className = 'atex-active';
        renderButtons(offerId, atexButtonsArray);

    } else if (offerId === 'seveso') {
        photoContainer.classList = '';

        photoContainer.className = 'seveso-active';
        renderButtons(offerId, sevesoButtonsArray);

    } else if (offerId === 'ppoz') { 
        photoContainer.classList = '';

        photoContainer.className = 'ppoz-active';
        renderButtons(offerId, ppozButtonsArray);
        
    } else {
        photoContainer.classList = '';

        photoContainer.className = 'training-active';
        renderButtons(offerId, trainingButtonsArray);

    }
}

const highlitedOffer = (btn) => {
    ppozBtn.className = '';
    atexBtn.className = '';
    sevesoBtn.className = '';
    trainingBtn.className = '';
    btn.className = 'active';
}


function handleClick(event) {
    const btnId = event.target.id;
    console.log(btnId);
    changePhoto(btnId);
    highlitedOffer(event.target);
}

ppozBtn.addEventListener('click', handleClick);
atexBtn.addEventListener('click', handleClick);
sevesoBtn.addEventListener('click', handleClick);
trainingBtn.addEventListener('click', handleClick);