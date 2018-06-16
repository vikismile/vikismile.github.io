"use strict"
import {checkMessage} from "./checkMessage"
import {random} from "./generateMonster"


export function audioSpell(){
    const audioSpell = document.getElementById('audioSpell');
    audioSpell.classList.remove('isHidden');
    const words = ['elephant', 'table', 'autumn', 'summer', 'winter', 'important', 'better', 'hard', 'people','length','door','children','house','place','friend','teacher'];
    let num = random(0,15);
    let answer = words[num];


    const listenBtn = document.getElementById('listenBtn');
    listenBtn.onclick =  function(){
        let utterThis;
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        utterThis = new SpeechSynthesisUtterance(words[num]);
        utterThis.voice = voices[0];
        synth.speak(utterThis);
    }

    
    let input = document.createElement('input');
    input.id='input';
    const mathTask = document.getElementById('mathTask'); 
    audioTask.appendChild(input);
    input.focus();
    const checkAudioBtn = document.getElementById('checkAudioBtn');
    checkAudioBtn.onclick = function (){
      checkMessage(answer, audioSpell, audioTask)};
  }
