import {random} from "./generateMonster"
import {checkMessage} from "./checkMessage"

export function mathSpell(){
    const mathSpell = document.getElementById('mathSpell');
    mathSpell.classList.remove('isHidden');
    let num1 = random(25,50);
    let num2 = random(1,30);
    const operatorsArray = ['+', '-'];
    let operator = operatorsArray[random(0,1)];
    let answer;
    if(operator=='+'){
      answer = num1 + num2;
    }else{
      answer = num1 - num2; 
    }
    console.log(answer);
    let task = document.createElement('p');
    task.innerHTML = num1 + ' ' + operator + ' '  + num2 + ' = ';
    let input = document.createElement('input');
    input.id='input';
    const mathTask = document.getElementById('mathTask'); 
    mathTask.appendChild(task);
    mathTask.appendChild(input);
    input.focus();
const checkBtn = document.getElementById('checkBtn');
    checkBtn.onclick = function (){
      checkMessage(answer, mathSpell, mathTask)};
  }
