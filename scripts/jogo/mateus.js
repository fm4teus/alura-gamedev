class Mateus extends Personagem{
    
    anima( pulando ){
        if(!pulando){
        if(this.fr%4==0)
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
}