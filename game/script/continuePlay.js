import {generateMonster} from "./generateMonster"
import {generateMonsterName} from "./generateMonsterName"

export var cont = 0, monsterNameC;
export function continuePlay(){
    cont++;
    const youWinMonster = document.getElementById('youWinMonster'); 
    youWinMonster.classList.add("isHidden");
    const monsterWin = document.getElementById('monsterWin'); 
    monsterWin.classList.add("isHidden");
    const spell = document.getElementById('spell');
    const rules = document.getElementById('rules');
    monsterNameC = generateMonsterName();
    rules.innerHTML = '<p>Your rival is' + ' ' + monsterNameC + '!</p>' ;
    const rivalScore = document.getElementById('rivalScoreCur');
    rivalScore.innerHTML = 100;
    const playerScore = document.getElementById('playerScoreCur');
    playerScore.innerHTML = 100;
    generateMonster();
    spell.classList.remove("isHidden");
}