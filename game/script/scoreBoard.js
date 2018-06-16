import {profilesArray, i, monsterName} from "./script"

export function scoreBoard(){
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.classList.remove("isHidden")
    const youWinMonster = document.getElementById('youWinMonster'); 
    youWinMonster.classList.add('isHidden');
    localStorage.setItem('player_'+i, JSON.stringify(profilesArray[i]));
    const highscoreTable = document.querySelector('#highscoreTable');
    while (highscoreTable.firstChild) {
      highscoreTable.removeChild(highscoreTable.firstChild);
    }
    let l = localStorage.length;
    if (localStorage.length > 9) l = 10;
    for (let j = 0; j < l; j++) {                
    const recordItem = document.createElement('tr');
    let k=j+1;
    recordItem.innerHTML ='<td>' + k + '</td>' + '<td>' 
    + JSON.parse(localStorage.getItem('player_'+j)).registrName + '</td>'  + '<td>' + JSON.parse(localStorage.getItem('player_'+j)).monsterName + '</td>';
    highscoreTable.appendChild(recordItem);
  }
  const okBtn = document.querySelector('#okBtn');
  okBtn.addEventListener('click', function(){
    scoreboard.classList.add("isHidden");
    youWinMonster.classList.remove('isHidden');
  });
}