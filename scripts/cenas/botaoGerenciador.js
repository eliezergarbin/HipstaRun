class BotaoGerenciador {
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.Botao = createButton(this.texto)
    }

    draw() {
        this.Botao.position(this.x, this.y)
    }
}

