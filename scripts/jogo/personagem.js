class Personagem{
    constructor(imagem){
        this.imagem = imagem;
    }

    exibe(){
        image(this.imagem, 0, height-135, 110, 135, spriteX, spriteY, 220, 270);
        spriteX += 220;
        if(spriteX > 660){
            spriteX = 0;
            spriteY += 270; 
        }
        if (spriteY > 270*3 ){
            spriteY = 0;
        } 
    }
}