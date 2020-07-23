class Chamas extends Personagem{
    anima(){
        if(this.fr%4==0){
            this.spriteX -= 448/6;
            this.positionX-=20;
            if(this.positionX< 0)
             this.positionX = 1500;
        }
        if(this.spriteX < 0){
            this.spriteX = 5*448/6;
        }
        image(this.imgCorrendo, this.positionX, height-this.positionY, this.sizeX, this.sizeY, this.spriteX, this.spriteY, 448/6, 107); 

}
}