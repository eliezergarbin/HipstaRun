  class Personagem{

    constructor(imagem, spriteDeSaidaX = 220, 
            spriteDeSaidaY = 270, 
            spriteFrameCount = 16, 
            spriteFrameLine = 4,
            spriteReduzirZoom = 2)
    {

        this.spriteDeSaidaX = spriteDeSaidaX; 
        
        this.spriteDeSaidaY = spriteDeSaidaY;

        this.spriteReduzirZoom = spriteReduzirZoom; 

        this.spriteFrameCount = spriteFrameCount;
        
        this.spriteFrameLine = spriteFrameLine; 

        const genScript = new GerarScript(spriteDeSaidaX, spriteDeSaidaY, spriteFrameCount, spriteFrameLine);

        this.matriz = genScript.SpriteArray;

        this.frameAtual = 0;

        this.imagem = imagem;
    }

    exibe(){
        image(this.imagem, 
            0, //x
            height-this.spriteDeSaidaY/this.spriteReduzirZoom, //y
            this.spriteDeSaidaX/this.spriteReduzirZoom, 
            this.spriteDeSaidaY/this.spriteReduzirZoom, 
            this.matriz[this.frameAtual][0], 
            this.matriz[this.frameAtual][1], 
            this.spriteDeSaidaX, 
            this.spriteDeSaidaY);

        this.anima();
    }

    anima(){
        this.frameAtual++;

        if(this.frameAtual >= this.spriteFrameCount -1){
            this.frameAtual = 0;
        }
    }
}