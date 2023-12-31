'use strict';

import {levelsDisappearance} from "../animationsControler/smoothAnimations.js";
import {lettersBoxListener} from "../gameField/letterBoxListener.js";

const hardLevelButton = document.querySelector('#hard-level');
const mediumLevelButton = document.querySelector('#medium-level');
const easyLevelButton = document.querySelector('#easy-level');

/**
 * Each level button logic
 */
export function listeners() {
    hardLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        lettersBoxListener(12, 8);
    });

    mediumLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        lettersBoxListener(8, 4);
    });

    easyLevelButton.addEventListener('click', () => {
        levelsDisappearance();
        lettersBoxListener(5, 0);
    });
}