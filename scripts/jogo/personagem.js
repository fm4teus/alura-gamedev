class Personagem{

constructor(imgCorrendo, imgRodando, positionX, positionY, sizeX, sizeY){
    this.imgCorrendo = imgCorrendo;
    this.imgRodando = imgRodando;
    this.positionX = positionX;
    this.positionY = sizeY;
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
    if(this.resultante > 0 || this.positionY > this.sizeY){
        this.positionY += this.resultante;
        this.anima( true );
    }
    else {
        this.positionY = this.sizeY;
        this.fr++;
        this.anima( false );
    }
    
}

pula(){
    if(this.positionY <= this.sizeY)
        this.jump += height/8;
}
anda( frente ){
    if(frente){
        this.positionX += 5;
    }
    else
        this.positionX -=5;
}

colide( inimigoX, inimigoY){
    if(collideRectRect(this.positionX + 0.3 * this.sizeX, height - this.positionY , 0.4 * this.sizeX , this.sizeY/2, inimigoX, inimigoY, 448/6, 107)){
        console.log("bateu");
        efeitoSonoro.play();
        trilhaSonora.pause();
        imgCoffin.show();
        imgCoffin.position(this.positionX+width*0.1, 0.3*height);
        imgCoffin.size(0.6*height,0.6*height);
        imgFire.position(this.positionX, height-this.sizeY*2);
        imgFire.size(this.sizeY*2,this.sizeY*2);
        imgFire.show();
        noLoop();
    }
    noFill();
    //rect(this.positionX + 0.3 * this.sizeX, height - this.positionY, 0.4 * this.sizeX, this.sizeY);
    //rect(inimigoX, inimigoY, 448/6, 107);
}

}