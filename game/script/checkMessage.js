import {profilesArray, i, monsterName} from "./script"
import {cont, monsterNameC} from "./continuePlay"


export function checkMessage(answer, spellName, taskName){
    event.preventDefault;
    const input = document.getElementById('input');
    if (answer[1]){
        for(let j=0; j< answer.length; j++){
            if(answer[j]==input.value){
                answer=answer[j];
            }
        }
    }
    console.log(i)
    if(input.value == String(answer)){
        const youWin = document.getElementById('youWin');
        youWin.classList.remove('isHidden');
        setTimeout(function f(){
            const rivalScore = document.getElementById('rivalScoreCur');
            rivalScore.innerHTML = Number(rivalScore.innerHTML) - 50;
            if(Number(rivalScore.innerHTML)==0){
                if(profilesArray[i].monsterName){
                    if(cont>0){
                        profilesArray[i].monsterName = profilesArray[i].monsterName + ', ' + monsterNameC;
                    }else{
                    profilesArray[i].monsterName = profilesArray[i].monsterName + ', ' + monsterName;
                    }
                }else{
                    profilesArray[i].monsterName = monsterName;
                }
                const youWinMonster = document.getElementById('youWinMonster'); 
                const spell = document.getElementById('spell');
                spell.classList.add('isHidden');
                youWinMonster.classList.remove('isHidden');
            }
            youWin.classList.add('isHidden');
            while (taskName.lastChild) {
                taskName.removeChild(taskName.lastChild);
              }
            spellName.classList.add('isHidden')
        }, 2000)
    }
    else{
        const youLose = document.getElementById('youLose');
        youLose.classList.remove('isHidden');
        setTimeout(function f(){
            youLose.classList.add('isHidden');
            while (taskName.lastChild) {
                taskName.removeChild(taskName.lastChild);
              }
            spellName.classList.add('isHidden')
            const spell = document.getElementById('spell');
            spell.classList.add('isHidden');
            const rivalAttack = document.getElementById('rivalAttack');
            rivalAttack.classList.remove('isHidden');
            setTimeout(function f(){
                rivalAttack.classList.add('isHidden');
                spell.classList.remove('isHidden');
                const playerScore = document.getElementById('playerScoreCur');
                playerScore.innerHTML = Number(playerScore.innerHTML) - 25;
                if(Number(playerScore.innerHTML)==0){
                    const spell = document.getElementById('spell');
                    spell.classList.add('isHidden');
                    const monsterWin = document.getElementById('monsterWin');  
                    monsterWin.classList.remove('isHidden');
                }
            }, 2000)
        }, 2000)
    }

}