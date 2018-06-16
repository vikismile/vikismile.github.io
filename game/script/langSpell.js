"use strict"
import {checkMessage} from "./checkMessage"
import {random} from "./generateMonster"
import {dictionary} from "./dictionary"


export function langSpell(){
    const langSpell = document.getElementById('langSpell');
    langSpell.classList.remove('isHidden');

    let num = random(0,9);
    let answer = dictionary[num].trans;


    let task = document.createElement('p');
    task.innerHTML = dictionary[num].word;
    let input = document.createElement('input');
    input.id='input';
    const langTask = document.getElementById('langTask'); 
    langTask.appendChild(task);
    langTask.appendChild(input);
    input.focus();
    const checkLangBtn = document.getElementById('checkLangBtn');
    checkLangBtn.onclick = function (){
      checkMessage(answer, langSpell, langTask)};
  }
