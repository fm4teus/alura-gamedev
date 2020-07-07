let imagemCenario, imagemMateus, imgRodando;
const gravidade = 13;
let cenario;
let any, mateus;
let trilhaSonora;
let i=0, j=0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemMateus = loadImage('imagens/personagem/mateus.png');
  imgRodando = loadImage('imagens/personagem/rodando.png');
  trilhaSonora = loadSound('sons/memecaixao.ogg');
}

function setup() {
  getAudioContext().suspend();
  createCanvas(1280, 720);
  cenario = new Cenario(imagemCenario,5);
  mateus = new Mateus(imagemMateus, imgRodando, 60, 300, 200, 200);
  any = new Mateus(imagemMateus, imgRodando ,360, 300, 200, 200);
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