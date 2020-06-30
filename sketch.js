let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let spriteX=0, spriteY=0;
let trilhaSonora;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  trilhaSonora = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
  getAudioContext().suspend();
  createCanvas(800, 450);
  cenario = new Cenario(imagemCenario,5);
  personagem = new Personagem(imagemPersonagem);
  trilhaSonora.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  circle(mouseX,mouseY,50);
}

function mousePressed() {
  userStartAudio();
}