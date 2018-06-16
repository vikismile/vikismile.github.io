"use strict"

import {generateMonster} from "./generateMonster"
import {generateMonsterName} from "./generateMonsterName"
import {mathSpell} from "./mathSpell"
import {audioSpell} from "./audioSpell"
import {langSpell} from "./langSpell"
import {scoreBoard} from "./scoreBoard"
import {continuePlay} from "./continuePlay"

export const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export let monsterName;

export let profilesArray = [];
export let i = localStorage.length;
profilesArray[i] = {};
const playNowBtn = document.getElementById('playNowBtn');
const registrForm = document.getElementById('registrForm');
  playNowBtn.addEventListener('click', function f(){
    if(document.getElementById('registrName').value !== ''){
      profilesArray[i].registrName = document.getElementById('registrName').value;
      registrForm.classList.add('isHidden');
      generateMonster();
            
      const rules = document.getElementById('rules');
      rules.classList.remove('isHidden');
      rules.classList.add('opacity');
      monsterName = generateMonsterName();
      rules.innerHTML = '<p>Your rival is' + ' ' + monsterName + '!</p>' ;
      setTimeout(function f(){rules.classList.remove('opacity')}, 4000);

      const spell = document.getElementById('spell');
      const playerIcon = document.getElementById('playerIcon');
      const playerScore = document.getElementById('playerScore');
      const rivalScore = document.getElementById('rivalScore');
      spell.classList.remove('isHidden');
      playerIcon.classList.remove('isHidden');
      spell.classList.add('opacity'); 
      playerIcon.classList.add('opacity');  
      playerScore.classList.add('opacity');  
      rivalScore.classList.add('opacity');  
      
      const mathSpellIcon = document.getElementById('mathSpellIcon');
      mathSpellIcon.addEventListener('click', mathSpell);

      const audioSpellIcon = document.getElementById('audioSpellIcon');
      audioSpellIcon.addEventListener('click', audioSpell);

      const langSpellIcon = document.getElementById('langSpellIcon');
      langSpellIcon.addEventListener('click', langSpell);


      const scoreboardBtn = document.getElementById('scoreboardBtn');
      scoreboardBtn.addEventListener('click', scoreBoard);
      const continueBtn = document.getElementById('continueBtn');
      continueBtn.addEventListener('click', continuePlay);
      const continueBtnn = document.getElementById('continueBtnn');
      continueBtnn.addEventListener('click', continuePlay);
      
    }
  })


