class Personagem{
    constructor(imagem){
        this.imagem = imagem;
    }

    exibe(){
        j+=0.8;
        image(this.imagem, j, height-135, 110, 135, mateusX, mateusY, 220, 270);
        mateusX += 220;
        if(mateusX > 660){
            mateusX = 0;
            mateusY += 270; 
        }
        if (mateusY > 270*3 ){
            mateusY = 0;
        } 
    }
}