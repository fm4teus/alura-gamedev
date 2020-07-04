class Mateus{
    constructor(imagem){
        this.imagem = imagem;
    }

    exibe(){
        i++;
        image(this.imagem, i, height-135, 110, 135, spriteX, spriteY, 44, 44);
        if(i%2==0){
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
}