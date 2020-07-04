let imagemCenario;
let imagemPersonagem;
let imagemMateus;
let cenario;
let personagem, mateus;
let spriteX=0, spriteY=0;
let mateusX=0, mateusY=0;
let trilhaSonora;
let i=0, j=0;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemMateus = loadImage('imagens/personagem/mateus.png');
  trilhaSonora = loadSound('sons/memecaixao.ogg');
}

function setup() {
  getAudioContext().suspend();
  createCanvas(1600, 900);
  cenario = new Cenario(imagemCenario,5);
  personagem = new Personagem(imagemPersonagem);
  mateus = new Mateus(imagemMateus);
  trilhaSonora.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  mateus.exibe();
  circle(mouseX,mouseY,50);
}

function mousePressed() {
  userStartAudio();
}