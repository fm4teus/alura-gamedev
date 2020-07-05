class Mateus{
    constructor(imagem, positionX, positionY, sizeX, sizeY){
        this.imagem = imagem;
        this.positionX = positionX;
        this.positionY = positionY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.resultante = 0;
        this.jump = 0;
    }

    exibe(){
        i++;
        this.resultante = this.jump - gravidade;
        if(this.jump > 0){
            this.jump -= gravidade;
        }
        if(this.resultante > 0 || this.positionY > 300){
            this.positionY += this.resultante;
        }
        image(this.imagem, this.positionX, height-this.positionY, this.sizeX, this.sizeY, spriteX, spriteY, 44, 44);
        if(i%4==0){
            this.anima();
        }
    }

    anima(){
        spriteX += 44;
        if(spriteX > 88){
            spriteX = 0;
            spriteY += 44; 
        }
        if (spriteY > 44 && spriteX > 44 ){
            spriteY = 0;
            spriteX = 0;
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