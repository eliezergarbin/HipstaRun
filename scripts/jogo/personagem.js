class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite, somPulo){
      super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
      this.somPulo = somDoPulo;
  
      this.yInicial = height - this.altura;
      this.y = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 3;
      this.qntPulos = 2;
    }
    
    pula() {
        if (this.qntPulos > 0) {
        this.velocidadeDoPulo = - 31
        this.qntPulos--;
        this.somPulo.play();
  
        }
    } 

    aplicaGravidade() {    
      this.y += this.velocidadeDoPulo;
      this.velocidadeDoPulo += this.gravidade;
      
      if(this.y > this.yInicial){
        this.y = this.yInicial;
        this.qntPulos = 2;    
        
      }
    }
    
    estaColidindo(inimigo){
      noFill()
      const precisao = .65 ;
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