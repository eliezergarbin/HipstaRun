class BotaoGerenciador {
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.Botao = createButton(this.texto)
        this.Botao.mousePressed( () => this._alteraCena())
        this.Botao.addClass('botao-tela-inicial');
    }

    draw() {
        this.Botao.position(this.x, this.y)
        this.Botao.center('horizontal')

    }

    _alteraCena(){
        this.Botao.remove();
        cenaAtual = 'jogo'
    }
}

