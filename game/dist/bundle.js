/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script/audioSpell.js":
/*!******************************!*\
  !*** ./script/audioSpell.js ***!
  \******************************/
/*! exports provided: audioSpell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"audioSpell\", function() { return audioSpell; });\n/* harmony import */ var _checkMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkMessage */ \"./script/checkMessage.js\");\n/* harmony import */ var _generateMonster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMonster */ \"./script/generateMonster.js\");\n\n\n\n\n\nfunction audioSpell(){\n    const audioSpell = document.getElementById('audioSpell');\n    audioSpell.classList.remove('isHidden');\n    const words = ['elephant', 'table', 'autumn', 'summer', 'winter', 'important', 'better', 'hard', 'people','length','door','children','house','place','friend','teacher'];\n    let num = Object(_generateMonster__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(0,15);\n    let answer = words[num];\n\n\n    const listenBtn = document.getElementById('listenBtn');\n    listenBtn.onclick =  function(){\n        let utterThis;\n        const synth = window.speechSynthesis;\n        const voices = synth.getVoices();\n        utterThis = new SpeechSynthesisUtterance(words[num]);\n        utterThis.voice = voices[0];\n        synth.speak(utterThis);\n    }\n\n    \n    let input = document.createElement('input');\n    input.id='input';\n    const mathTask = document.getElementById('mathTask'); \n    audioTask.appendChild(input);\n    input.focus();\n    const checkAudioBtn = document.getElementById('checkAudioBtn');\n    checkAudioBtn.onclick = function (){\n      Object(_checkMessage__WEBPACK_IMPORTED_MODULE_0__[\"checkMessage\"])(answer, audioSpell, audioTask)};\n  }\n\n\n//# sourceURL=webpack:///./script/audioSpell.js?");

/***/ }),

/***/ "./script/checkMessage.js":
/*!********************************!*\
  !*** ./script/checkMessage.js ***!
  \********************************/
/*! exports provided: checkMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkMessage\", function() { return checkMessage; });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./script/script.js\");\n/* harmony import */ var _continuePlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuePlay */ \"./script/continuePlay.js\");\n\n\n\n\nfunction checkMessage(answer, spellName, taskName){\n    event.preventDefault;\n    const input = document.getElementById('input');\n    if (answer[1]){\n        for(let j=0; j< answer.length; j++){\n            if(answer[j]==input.value){\n                answer=answer[j];\n            }\n        }\n    }\n    console.log(_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"])\n    if(input.value == String(answer)){\n        const youWin = document.getElementById('youWin');\n        youWin.classList.remove('isHidden');\n        setTimeout(function f(){\n            const rivalScore = document.getElementById('rivalScoreCur');\n            rivalScore.innerHTML = Number(rivalScore.innerHTML) - 25;\n            if(Number(rivalScore.innerHTML)==0){\n                if(_script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]].monsterName){\n                    if(_continuePlay__WEBPACK_IMPORTED_MODULE_1__[\"cont\"]>0){\n                        _script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]].monsterName = _script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]].monsterName + ', ' + _continuePlay__WEBPACK_IMPORTED_MODULE_1__[\"monsterNameC\"];\n                    }else{\n                    _script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]].monsterName = _script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]].monsterName + ', ' + _script__WEBPACK_IMPORTED_MODULE_0__[\"monsterName\"];\n                    }\n                }else{\n                    _script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]].monsterName = _script__WEBPACK_IMPORTED_MODULE_0__[\"monsterName\"];\n                }\n                const youWinMonster = document.getElementById('youWinMonster'); \n                const spell = document.getElementById('spell');\n                spell.classList.add('isHidden');\n                youWinMonster.classList.remove('isHidden');\n            }\n            youWin.classList.add('isHidden');\n            while (taskName.lastChild) {\n                taskName.removeChild(taskName.lastChild);\n              }\n            spellName.classList.add('isHidden')\n        }, 2000)\n    }\n    else{\n        const youLose = document.getElementById('youLose');\n        youLose.classList.remove('isHidden');\n        setTimeout(function f(){\n            youLose.classList.add('isHidden');\n            while (taskName.lastChild) {\n                taskName.removeChild(taskName.lastChild);\n              }\n            spellName.classList.add('isHidden')\n            const spell = document.getElementById('spell');\n            spell.classList.add('isHidden');\n            const rivalAttack = document.getElementById('rivalAttack');\n            rivalAttack.classList.remove('isHidden');\n            setTimeout(function f(){\n                rivalAttack.classList.add('isHidden');\n                spell.classList.remove('isHidden');\n                const playerScore = document.getElementById('playerScoreCur');\n                playerScore.innerHTML = Number(playerScore.innerHTML) - 25;\n                if(Number(playerScore.innerHTML)==0){\n                    const spell = document.getElementById('spell');\n                    spell.classList.add('isHidden');\n                    const monsterWin = document.getElementById('monsterWin');  \n                    monsterWin.classList.remove('isHidden');\n                }\n            }, 2000)\n        }, 2000)\n    }\n\n}\n\n//# sourceURL=webpack:///./script/checkMessage.js?");

/***/ }),

/***/ "./script/continuePlay.js":
/*!********************************!*\
  !*** ./script/continuePlay.js ***!
  \********************************/
/*! exports provided: cont, monsterNameC, continuePlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cont\", function() { return cont; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monsterNameC\", function() { return monsterNameC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"continuePlay\", function() { return continuePlay; });\n/* harmony import */ var _generateMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateMonster */ \"./script/generateMonster.js\");\n/* harmony import */ var _generateMonsterName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMonsterName */ \"./script/generateMonsterName.js\");\n\n\n\nvar cont = 0, monsterNameC;\nfunction continuePlay(){\n    cont++;\n    const youWinMonster = document.getElementById('youWinMonster'); \n    youWinMonster.classList.add(\"isHidden\");\n    const monsterWin = document.getElementById('monsterWin'); \n    monsterWin.classList.add(\"isHidden\");\n    const spell = document.getElementById('spell');\n    const rules = document.getElementById('rules');\n    monsterNameC = Object(_generateMonsterName__WEBPACK_IMPORTED_MODULE_1__[\"generateMonsterName\"])();\n    rules.innerHTML = '<p>Your rival is' + ' ' + monsterNameC + '!</p>' ;\n    const rivalScore = document.getElementById('rivalScoreCur');\n    rivalScore.innerHTML = 100;\n    const playerScore = document.getElementById('playerScoreCur');\n    playerScore.innerHTML = 100;\n    Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"generateMonster\"])();\n    spell.classList.remove(\"isHidden\");\n}\n\n//# sourceURL=webpack:///./script/continuePlay.js?");

/***/ }),

/***/ "./script/dictionary.js":
/*!******************************!*\
  !*** ./script/dictionary.js ***!
  \******************************/
/*! exports provided: dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dictionary\", function() { return dictionary; });\nconst dictionary = [{\"word\":\"dog\",\"trans\":['собака', 'собачка', 'щенок']}, {\"word\":\"cat\",\"trans\":['кот', 'котик', 'котенок', 'кошка']}, {\"word\":\"table\",\"trans\":['стол', 'столик', 'таблица']}, {\"word\":\"people\",\"trans\":['люди', 'народ', 'жители']}, {\"word\":\"work\",\"trans\":['работа', 'труд', 'работать', 'трудиться'] } , {\"word\":\"use\",\"trans\":['использовать']}, {\"word\":\"school\",\"trans\":['школа', 'обучение']}, {\"word\":\"bike\",\"trans\":['велосипед']}, {\"word\":\"drum\",\"trans\":['барабан', 'цилиндр']}, {\"word\":\"plane\",\"trans\":['самолет', 'плоскость', 'плоский', 'самолетик']} ]\n\n//# sourceURL=webpack:///./script/dictionary.js?");

/***/ }),

/***/ "./script/generateMonster.js":
/*!***********************************!*\
  !*** ./script/generateMonster.js ***!
  \***********************************/
/*! exports provided: generateMonster, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateMonster\", function() { return generateMonster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n\nfunction generateMonster () {\n    const canvass = document.querySelector('#canvass');\n    canvass.innerHTML = '';\n    canvass.innerHTML = '<canvas id = \"canvas\" class = \"canvas\"></canvas>';\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext(\"2d\");\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    const imageObj1 = new Image();\n    const imageObj2 = new Image();\n    const imageObj3 = new Image();\n    const imageObj4 = new Image();\n    imageObj1.src = \"media/images/monsters/hand-\" +random()+ \".png\"\n    imageObj1.onload = function() {\n       ctx.drawImage(imageObj1, window.innerWidth-250, window.innerHeight-250, 220, 80);\n       imageObj2.src = \"media/images/monsters/body-\" +random()+ \".png\";\n       imageObj2.onload = function() {\n          ctx.drawImage(imageObj2, window.innerWidth-200, window.innerHeight-275, 114,113);\n          imageObj3.src = \"media/images/monsters/foot-\" +random()+ \".png\";\n          imageObj3.onload = function() {\n             ctx.drawImage(imageObj3, window.innerWidth-202, window.innerHeight-175, 118,134);\n             imageObj4.src = \"media/images/monsters/head-\" +random()+ \".png\";\n             imageObj4.onload = function() {\n                ctx.drawImage(imageObj4, window.innerWidth-210, window.innerHeight-360, 136,131);\n                /*const img = canvas.toDataURL(\"image/png\");\n                ctx.clearRect(0, 0, canvas.width, canvas.height);             \n                document.write('<img crossOrigin=\"anonymous\" src=\"' + img + '\" width=\"358\" height=\"526\"/>');*/\n             }\n          }\n       }\n    };\n}\n\nfunction random(min=1, max=5) {\n    var rand = min - 0.5 + Math.random() * (max - min + 1)\n    rand = Math.round(rand);\n    return rand;\n  }\n\n//# sourceURL=webpack:///./script/generateMonster.js?");

/***/ }),

/***/ "./script/generateMonsterName.js":
/*!***************************************!*\
  !*** ./script/generateMonsterName.js ***!
  \***************************************/
/*! exports provided: generateMonsterName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateMonsterName\", function() { return generateMonsterName; });\n/* harmony import */ var _generateMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateMonster */ \"./script/generateMonster.js\");\n\n\nfunction generateMonsterName(){\n    const namePart1 = ['Angry', 'Grumpy', 'Snuffy', 'Sinister', 'Harmful', 'Terrible', 'Awful', 'Horrible', 'Disgusting'];\n    const namePart2 = ['Gnome', 'Ogre', 'Dwarf', 'Pygmy'];\n    const namePart3 = ['Tom', 'Bobby', 'Johny', 'Ronald', 'Harry', 'Paul'];\n\n    return namePart1[Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(0,8)] + ' ' + namePart2[Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(0,3)] + ' ' + namePart3[Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(0,5)];\n}\n\n//# sourceURL=webpack:///./script/generateMonsterName.js?");

/***/ }),

/***/ "./script/langSpell.js":
/*!*****************************!*\
  !*** ./script/langSpell.js ***!
  \*****************************/
/*! exports provided: langSpell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"langSpell\", function() { return langSpell; });\n/* harmony import */ var _checkMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkMessage */ \"./script/checkMessage.js\");\n/* harmony import */ var _generateMonster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMonster */ \"./script/generateMonster.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ \"./script/dictionary.js\");\n\n\n\n\n\n\nfunction langSpell(){\n    const langSpell = document.getElementById('langSpell');\n    langSpell.classList.remove('isHidden');\n\n    let num = Object(_generateMonster__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(0,9);\n    let answer = _dictionary__WEBPACK_IMPORTED_MODULE_2__[\"dictionary\"][num].trans;\n\n\n    let task = document.createElement('p');\n    task.innerHTML = _dictionary__WEBPACK_IMPORTED_MODULE_2__[\"dictionary\"][num].word;\n    let input = document.createElement('input');\n    input.id='input';\n    const langTask = document.getElementById('langTask'); \n    langTask.appendChild(task);\n    langTask.appendChild(input);\n    input.focus();\n    const checkLangBtn = document.getElementById('checkLangBtn');\n    checkLangBtn.onclick = function (){\n      Object(_checkMessage__WEBPACK_IMPORTED_MODULE_0__[\"checkMessage\"])(answer, langSpell, langTask)};\n  }\n\n\n//# sourceURL=webpack:///./script/langSpell.js?");

/***/ }),

/***/ "./script/mathSpell.js":
/*!*****************************!*\
  !*** ./script/mathSpell.js ***!
  \*****************************/
/*! exports provided: mathSpell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mathSpell\", function() { return mathSpell; });\n/* harmony import */ var _generateMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateMonster */ \"./script/generateMonster.js\");\n/* harmony import */ var _checkMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkMessage */ \"./script/checkMessage.js\");\n\n\n\nfunction mathSpell(){\n    const mathSpell = document.getElementById('mathSpell');\n    mathSpell.classList.remove('isHidden');\n    let num1 = Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(25,50);\n    let num2 = Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(1,30);\n    const operatorsArray = ['+', '-'];\n    let operator = operatorsArray[Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(0,1)];\n    let answer;\n    if(operator=='+'){\n      answer = num1 + num2;\n    }else{\n      answer = num1 - num2; \n    }\n    console.log(answer);\n    let task = document.createElement('p');\n    task.innerHTML = num1 + ' ' + operator + ' '  + num2 + ' = ';\n    let input = document.createElement('input');\n    input.id='input';\n    const mathTask = document.getElementById('mathTask'); \n    mathTask.appendChild(task);\n    mathTask.appendChild(input);\n    input.focus();\nconst checkBtn = document.getElementById('checkBtn');\n    checkBtn.onclick = function (){\n      Object(_checkMessage__WEBPACK_IMPORTED_MODULE_1__[\"checkMessage\"])(answer, mathSpell, mathTask)};\n  }\n\n\n//# sourceURL=webpack:///./script/mathSpell.js?");

/***/ }),

/***/ "./script/scoreBoard.js":
/*!******************************!*\
  !*** ./script/scoreBoard.js ***!
  \******************************/
/*! exports provided: scoreBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scoreBoard\", function() { return scoreBoard; });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./script/script.js\");\n\n\nfunction scoreBoard(){\n    const scoreboard = document.getElementById('scoreboard');\n    scoreboard.classList.remove(\"isHidden\")\n    const youWinMonster = document.getElementById('youWinMonster'); \n    youWinMonster.classList.add('isHidden');\n    localStorage.setItem('player_'+_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"], JSON.stringify(_script__WEBPACK_IMPORTED_MODULE_0__[\"profilesArray\"][_script__WEBPACK_IMPORTED_MODULE_0__[\"i\"]]));\n    const highscoreTable = document.querySelector('#highscoreTable');\n    while (highscoreTable.firstChild) {\n      highscoreTable.removeChild(highscoreTable.firstChild);\n    }\n    let l = localStorage.length;\n    if (localStorage.length > 9) l = 10;\n    for (let j = 0; j < l; j++) {                \n    const recordItem = document.createElement('tr');\n    let k=j+1;\n    recordItem.innerHTML ='<td>' + k + '</td>' + '<td>' \n    + JSON.parse(localStorage.getItem('player_'+j)).registrName + '</td>'  + '<td>' + JSON.parse(localStorage.getItem('player_'+j)).monsterName + '</td>';\n    highscoreTable.appendChild(recordItem);\n  }\n  const okBtn = document.querySelector('#okBtn');\n  okBtn.addEventListener('click', function(){\n    scoreboard.classList.add(\"isHidden\");\n    youWinMonster.classList.remove('isHidden');\n  });\n}\n\n//# sourceURL=webpack:///./script/scoreBoard.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/*! exports provided: canvas, ctx, monsterName, profilesArray, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monsterName\", function() { return monsterName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"profilesArray\", function() { return profilesArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return i; });\n/* harmony import */ var _generateMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateMonster */ \"./script/generateMonster.js\");\n/* harmony import */ var _generateMonsterName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMonsterName */ \"./script/generateMonsterName.js\");\n/* harmony import */ var _mathSpell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathSpell */ \"./script/mathSpell.js\");\n/* harmony import */ var _audioSpell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audioSpell */ \"./script/audioSpell.js\");\n/* harmony import */ var _langSpell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./langSpell */ \"./script/langSpell.js\");\n/* harmony import */ var _scoreBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scoreBoard */ \"./script/scoreBoard.js\");\n/* harmony import */ var _continuePlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./continuePlay */ \"./script/continuePlay.js\");\n\n\n\n\n\n\n\n\n\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nlet monsterName;\n\nlet profilesArray = [];\nlet i = localStorage.length;\nprofilesArray[i] = {};\nconst playNowBtn = document.getElementById('playNowBtn');\nconst registrForm = document.getElementById('registrForm');\n  playNowBtn.addEventListener('click', function f(){\n    if(document.getElementById('registrName').value !== ''){\n      profilesArray[i].registrName = document.getElementById('registrName').value;\n      registrForm.classList.add('isHidden');\n      Object(_generateMonster__WEBPACK_IMPORTED_MODULE_0__[\"generateMonster\"])();\n            \n      const rules = document.getElementById('rules');\n      rules.classList.remove('isHidden');\n      rules.classList.add('opacity');\n      monsterName = Object(_generateMonsterName__WEBPACK_IMPORTED_MODULE_1__[\"generateMonsterName\"])();\n      rules.innerHTML = '<p>Your rival is' + ' ' + monsterName + '!</p>' ;\n      setTimeout(function f(){rules.classList.remove('opacity')}, 4000);\n\n      const spell = document.getElementById('spell');\n      const playerIcon = document.getElementById('playerIcon');\n      const playerScore = document.getElementById('playerScore');\n      const rivalScore = document.getElementById('rivalScore');\n      spell.classList.remove('isHidden');\n      playerIcon.classList.remove('isHidden');\n      spell.classList.add('opacity'); \n      playerIcon.classList.add('opacity');  \n      playerScore.classList.add('opacity');  \n      rivalScore.classList.add('opacity');  \n      \n      const mathSpellIcon = document.getElementById('mathSpellIcon');\n      mathSpellIcon.addEventListener('click', _mathSpell__WEBPACK_IMPORTED_MODULE_2__[\"mathSpell\"]);\n\n      const audioSpellIcon = document.getElementById('audioSpellIcon');\n      audioSpellIcon.addEventListener('click', _audioSpell__WEBPACK_IMPORTED_MODULE_3__[\"audioSpell\"]);\n\n      const langSpellIcon = document.getElementById('langSpellIcon');\n      langSpellIcon.addEventListener('click', _langSpell__WEBPACK_IMPORTED_MODULE_4__[\"langSpell\"]);\n\n\n      const scoreboardBtn = document.getElementById('scoreboardBtn');\n      scoreboardBtn.addEventListener('click', _scoreBoard__WEBPACK_IMPORTED_MODULE_5__[\"scoreBoard\"]);\n      const continueBtn = document.getElementById('continueBtn');\n      continueBtn.addEventListener('click', _continuePlay__WEBPACK_IMPORTED_MODULE_6__[\"continuePlay\"]);\n      const continueBtnn = document.getElementById('continueBtnn');\n      continueBtnn.addEventListener('click', _continuePlay__WEBPACK_IMPORTED_MODULE_6__[\"continuePlay\"]);\n      \n    }\n  })\n\n\n\n\n//# sourceURL=webpack:///./script/script.js?");

/***/ })

/******/ });