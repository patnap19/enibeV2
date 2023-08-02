// Pobranie przycisków z oferty 
const ppozBtn = document.getElementById('btn-ppoz');
const atexBtn = document.getElementById('btn-atex');
const sevesoBtn = document.getElementById('btn-seveso');
const trainingBtn = document.getElementById('btn-training');

const highlitedOffer = (btn) => {
    ppozBtn.className = '';
    atexBtn.className = '';
    sevesoBtn.className = '';
    trainingBtn.className = '';
    btn.className = 'active';
}

function handleClick(event) {
    const btnId = event.target.id;
    highlitedOffer(event.target);
}

ppozBtn.addEventListener('click', handleClick);
atexBtn.addEventListener('click', handleClick);
sevesoBtn.addEventListener('click', handleClick);
trainingBtn.addEventListener('click', handleClick);