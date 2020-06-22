
let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  image(imagemPersonagem, 0, height -140, 110, 135, 0, 0, 220, 270);

}

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