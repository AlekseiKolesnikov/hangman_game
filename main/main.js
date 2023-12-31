'use strict';

import {levelsAppearance, startButtonDisAppearance} from "../animationsControler/smoothAnimations.js";
import {listeners} from "../levelsScreen/levelButtonsListener.js";

const startGameButton = document.querySelector('#start-button-container');
const stopGameButton = document.querySelector('#stop-button-container');

//Showing up of main play ground after start button
startGameButton.addEventListener('click', () => {
    launcher();
    startButtonDisAppearance();
});

//Stop Game button
stopGameButton.addEventListener('click', function () {

});

export function launcher() {
    levelsAppearance();
    listeners();

    setTimeout(() => {
        startGameButton.style.display = 'none';
    }, 300);
}