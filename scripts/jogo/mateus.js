class Mateus{
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
    }

    exibe(){
        i++;
        this.resultante = this.jump - gravidade;
        if(this.jump > 0){
            this.jump -= gravidade;
        }
        if(this.resultante > 0 || this.positionY > 300){
            
            console.log("pulou");
            this.positionY += this.resultante;
            this.anima( true );
        }
        else {//if(i%4==0){
            this.anima( false );
        }
        
    }

    anima( pulando ){
        if(!pulando){
        this.spriteX += 44;
        if(this.spriteX > 88){
            this.spriteX = 0;
            this.spriteY += 44; 
        }
        if (this.spriteY > 44 && this.spriteX > 44 ){
            this.spriteY = 0;
            this.spriteX = 0;
        }
        image(this.imgCorrendo, this.positionX, height-this.positionY, this.sizeX, this.sizeY, this.spriteX, this.spriteY, 44, 44); 
    }
    else{
        this.spriteX += 44;
        if(this.spriteX > 44){
            this.spriteX = 0;
            this.spriteY += 44; 
        }
        if (this.spriteY > 0 && this.spriteX > 0 ){
            this.spriteY = 0;
            this.spriteX = 0;
        }
        image(this.imgRodando, this.positionX, height-this.positionY, this.sizeX-50, this.sizeY-50, this.spriteX, this.spriteY, 44, 44); 
    }
}
    pula(){
        if(this.jump < 10)
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