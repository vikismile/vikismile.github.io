
export function generateMonster () {
    const canvass = document.querySelector('#canvass');
    canvass.innerHTML = '';
    canvass.innerHTML = '<canvas id = "canvas" class = "canvas"></canvas>';
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const imageObj1 = new Image();
    const imageObj2 = new Image();
    const imageObj3 = new Image();
    const imageObj4 = new Image();
    imageObj1.src = "media/images/monsters/hand-" +random()+ ".png"
    imageObj1.onload = function() {
       ctx.drawImage(imageObj1, window.innerWidth-250, window.innerHeight-250, 220, 80);
       imageObj2.src = "media/images/monsters/body-" +random()+ ".png";
       imageObj2.onload = function() {
          ctx.drawImage(imageObj2, window.innerWidth-200, window.innerHeight-275, 114,113);
          imageObj3.src = "media/images/monsters/foot-" +random()+ ".png";
          imageObj3.onload = function() {
             ctx.drawImage(imageObj3, window.innerWidth-202, window.innerHeight-175, 118,134);
             imageObj4.src = "media/images/monsters/head-" +random()+ ".png";
             imageObj4.onload = function() {
                ctx.drawImage(imageObj4, window.innerWidth-210, window.innerHeight-360, 136,131);
                
             }
          }
       }
    };
}

export function random(min=1, max=5) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }