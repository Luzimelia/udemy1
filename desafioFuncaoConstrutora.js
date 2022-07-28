// Substituir a palavra class pela palavra funcion

function Pessoa (nome) {
    this.nome = nome
    
    this.falar = function (){
    console.log('Meu noome é ${this.nome}')
    }
    }
    
    const p1 = new Pessoa('João')
    p1.falar()