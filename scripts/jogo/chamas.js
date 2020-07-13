class Chamas extends Personagem{
    anima(){
        if(this.fr%4==0){
            this.spriteX += 448/6;
            i-=10;
            if(i<-1500)
             i = 0;
        }
        if(this.spriteX > 5*448/6){
            this.spriteX = 0;
        }
        image(this.imgCorrendo, this.positionX + i, height-this.positionY, this.sizeX, this.sizeY, this.spriteX, this.spriteY, 448/6, 107); 

}
}