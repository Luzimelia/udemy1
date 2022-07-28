function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0
    
    // Método pública
    this.ace let velocidadeAtual: number
    if (velocidadeAtual + delta <= velocidadeMaxima) {
    velocidadeAtual+= delta
    } else {
    velocidadeAtual = velocidadeMaxima
    }
    }
    
    // Método público
    this.geVelocidadeAtual = function () {
    return velocidadeAtual
    }
    }
    
    cosnt uno = new Carro
    uno.acelerar ()
    console.log (uno.getVelocidadeAtual())
    
    const ferrari - new Carro(350, 20)
    ferrari.acelerar()
    ferrari.acelerar()
    ferrari.acelerar()
    console.log(ferrari.getVelocidadeAtual())
    
    console.log(typeof Carro)
    console.log(typeof ferrari)