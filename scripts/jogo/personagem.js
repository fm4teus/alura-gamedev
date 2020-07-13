class Personagem{

constructor(imgCorrendo, imgRodando, positionX, positionY, sizeX, sizeY){
    this.imgCorrendo = imgCorrendo;
    this.imgRodando = imgRodando;
    this.positionX = positionX;
    this.positionY = positionY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.resultante = 0;
    this.jump = 0;
    this.spriteX = 0;
    this.spriteY = 0;
    this.fr=0;
}

exibe(){
    
    this.resultante = this.jump - gravidade;
    if(this.jump > 0){
        this.jump -= gravidade;
    }
    if(this.resultante > 0 || this.positionY > 220){
        this.positionY += this.resultante;
        this.anima( true );
    }
    else {
        this.fr++;
        this.anima( false );
    }
    
}

pula(){
    if(this.positionY <= 300)
        this.jump += 120;
}
anda( frente ){
    if(frente){
        this.positionX += 5;
    }
    else
        this.positionX -=5;
}

}