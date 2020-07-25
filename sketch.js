let imagemCenario, imagemMateus, imgRodando, imgAny, imgChamas, imgCoffin;
const gravidade = 10;
let cenario;
let any, mateus, chamas;
let trilhaSonora, efeitoSonoro;
let i=0, j=0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemMateus = loadImage('imagens/personagem/mateus.png');
  imgChamas = loadImage('imagens/inimigos/chamas.png');
  imgCoffin = createImg('imagens/assets/coffin.gif');
  imgFire = createImg('imagens/assets/fire.gif');
  imgAny = loadImage('imagens/any/any-correndo.png');
  imgRodando = loadImage('imagens/personagem/rodando.png');
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  efeitoSonoro = loadSound('sons/memecaixao.ogg');
  imgCoffin.hide();
  imgFire.hide();
}

function setup() {
 // getAudioContext().suspend();
 if(windowHeight>windowWidth)
  createCanvas(windowWidth, windowWidth);
  else
    createCanvas(windowWidth,windowHeight);

  cenario = new Cenario(imagemCenario,5);
  mateus = new Mateus(imagemMateus, imgRodando, 200, 220, 0.2*height, 0.2*height);
  any = new Any(imgAny, imgRodando ,0.5*width, 220, 0.15*height, 0.2*height);
  chamas = new Chamas(imgChamas, imgRodando, width, 220, 0.2*height, 0.2*height);
  trilhaSonora.loop();
  //frameRate(2);
}

function draw() { 
  cenario.exibe();
  cenario.move();
  mateus.exibe();
  chamas.exibe();
  mateus.colide(chamas.positionX, height - chamas.positionY);
  
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
  mateus.pula();
}