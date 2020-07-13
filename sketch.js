let imagemCenario, imagemMateus, imgRodando, imgAny, imgChamas;
const gravidade = 11;
let cenario;
let any, mateus, chamas;
let trilhaSonora;
let i=0, j=0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemMateus = loadImage('imagens/personagem/mateus.png');
  imgChamas = loadImage('imagens/inimigos/chamas.png');
  imgAny = loadImage('imagens/any/any-correndo.png')
  imgRodando = loadImage('imagens/personagem/rodando.png');
  trilhaSonora = loadSound('sons/memecaixao.ogg');
}

function setup() {
  getAudioContext().suspend();
  createCanvas(1280, 720);
  cenario = new Cenario(imagemCenario,5);
  mateus = new Mateus(imagemMateus, imgRodando, 200, 220, 200, 200);
  any = new Any(imgAny, imgRodando ,360, 220, 150, 200);
  chamas = new Chamas(imgChamas, imgRodando, 1280, 220, 200, 200)
  trilhaSonora.loop();
 // frameRate(2);
}

function draw() { 
  cenario.exibe();
  cenario.move();
  mateus.exibe();
  any.exibe();
  chamas.exibe();
  circle(mouseX,mouseY,50);

  if(keyIsDown(RIGHT_ARROW)){
    mateus.anda(true);
  }
  if(keyIsDown(LEFT_ARROW)){
    mateus.anda(false)
  }
  if(keyIsDown(68)){
    any.anda(true);
  }
  if(keyIsDown(65)){
    any.anda(false);
  }

}

function keyPressed(){
  console.log(key);
  switch(keyCode){
    case UP_ARROW:
      mateus.pula();
      break;
    case 87:
      any.pula();
      break;
  }
}


function mousePressed() {
  userStartAudio();
}