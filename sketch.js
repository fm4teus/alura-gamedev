let imagemCenario, imagemMateus;
let gravidade = 12;
let cenario;
let any, mateus;
let spriteX=0, spriteY=0;
let trilhaSonora;
let i=0, j=0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemMateus = loadImage('imagens/personagem/mateus.png');
  trilhaSonora = loadSound('sons/memecaixao.ogg');
}

function setup() {
  getAudioContext().suspend();
  createCanvas(1280, 720);
  cenario = new Cenario(imagemCenario,5);
  mateus = new Mateus(imagemMateus, 60, 300, 200, 200);
  any = new Mateus(imagemMateus, 360, 300, 200, 200);
  trilhaSonora.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  mateus.exibe();
  any.exibe();
  circle(mouseX,mouseY,50);

  if(keyIsDown(RIGHT_ARROW)){
    mateus.anda(true);
  }
  if(keyIsDown(LEFT_ARROW)){
    mateus.anda(false)
  }
}

function keyPressed(){
  switch(keyCode){
    case UP_ARROW:
      mateus.pula();
      break;
    case CONTROL:
      any.pula();
      break;
  }
}


function mousePressed() {
  userStartAudio();
}