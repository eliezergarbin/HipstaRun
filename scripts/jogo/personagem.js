class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, somPulo){
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

      this.somPulo = somDoPulo;
      this.variacaoY = variacaoY;
      this.yInicial = height - this.altura -30;
      this.y = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 5;
      this.alturaDoPulo = -45
      this.pulos = 0;
    }
    
    pula() {
        if (this.pulos < 2) {
          this.velocidadeDoPulo = this.alturaDoPulo
          this.pulos++;
        }
    } 

    aplicaGravidade() {    
      this.y += this.velocidadeDoPulo;
      this.velocidadeDoPulo += this.gravidade;
      
      if(this.y > this.yInicial){
        this.y = this.yInicial;
        this.pulos = 0;    
        
      }
    }
    
    estaColidindo(inimigo){
      noFill()
      const precisao = .7 ;
      const colisao = collideRectRect(
        this.x,
        this.y,
        this.largura * precisao,
        this.altura * precisao,
        inimigo.x,
        inimigo.y,
        inimigo.largura * precisao,
        inimigo.altura * precisao);
      
      return colisao;
      
    }
    
  }