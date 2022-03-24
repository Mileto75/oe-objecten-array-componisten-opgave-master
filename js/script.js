"use strict";
let composersImages;
let composersNames;
let activeIndex;
let imgComposer;
let divImageInfo;
window.addEventListener("load", initialize);

function initialize() {
    // Variabelen
    initializeComposerArrays();
    // DOM - elementen ophalen
    imgComposer = document.querySelector('#composer-image');
    divImageInfo = document.querySelector('#image-info');
    const btnPrevious = document.querySelector('#previous-composer');
    const btnNext = document.querySelector('#next-composer');
    // EventListeners Toevoegen
    btnPrevious.addEventListener('click', previousComposer);
    btnNext.addEventListener('click', nextComposer);
    //init gui
    activeIndex = generateRandomNumber(5);
    updateGui();
}

function previousComposer() {
    (activeIndex === 0)?activeIndex = composersImages.length-1:activeIndex--;
    updateGui();
}

function generateRandomNumber(max) {
    return Math.floor(Math.random()*max);
}

function updateGui() {
    imgComposer.src = `img/${composersImages[activeIndex]}`;
    imgComposer.alt = composersNames[activeIndex];
    divImageInfo.innerHTML = `Foto ${activeIndex+1} van ${composersImages.length}`;
}
function nextComposer() {
    (activeIndex === composersImages.length-1)?activeIndex = 0:activeIndex++;
    updateGui();
}

function initializeComposerArrays() {
  composersImages = [
    'Bach.jpg',
    'Beethoven.jpg',
    'Mozart.jpg',
    'Strauss.jpg',
    'Verdi.jpg'
  ];
  composersNames = [
    'Bach',
    'Beethoven',
    'Mozart',
    'Strauss',
    'Verdi'
  ];
}

