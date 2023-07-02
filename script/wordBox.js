'use strict';


import {generateGameWord} from "./getWord.js";

const wordBox = document.querySelector('#word-box');

let lettersArray;

export function createLetterBox() {
    generateGameWord((generatedWord) => {
        lettersArray = generatedWord
        for (let letter of lettersArray) {
            wordBox.innerHTML += `
           <div class="letter-container">
               <div class="word-letter">${letter.toUpperCase()}</div>
           </div>
        `
        }
        wordBox.style.gridTemplateColumns = `repeat(${lettersArray.length}, 7%)`;
    })
    return wordBox;
}


