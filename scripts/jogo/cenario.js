class Cenario {
    constructor(imagem, velocidade){
      this.imagem = imagem;
      this.velocidade = velocidade;
      this.X1 = 0;
      this.X2 = width;
    }
  
    exibe() {
      image(this.imagem, this.X1, 0, width, height);
      image(this.imagem, this.X2, 0, width, height);
    }
  
    move() {
      this.X1 = this.X1 - this.velocidade;
      this.X2 = this.X2 - this.velocidade;
  
      if (this.X1 < -width){
        this.X1 = width;
      }
      if (this.X2 < -width){
        this.X2 = width;
      }
    }
  }