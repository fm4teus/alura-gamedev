class Any extends Personagem{
    
    anima( pulando ){
        if(!pulando){
        if(this.fr%4==0)
            this.spriteX += 150;
        if(this.spriteX > 2*150){
            this.spriteX = 0;
            this.spriteY += 200; 
        }
        if (this.spriteY > 200 && this.spriteX > 150 ){
            this.spriteY = 0;
            this.spriteX = 0;
        }
        image(this.imgCorrendo, this.positionX, height-this.positionY, this.sizeX, this.sizeY, this.spriteX, this.spriteY, 150, 200); 
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