Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.lenght; i++{
    newArray.push(callback(this[i], i, this))
    }
    return newArray
    }
    
    const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45},
    '{"nome": "Caderno", "Preco": 13.90},
    '{"nome": "Kit de Lápis", "Preco": 41.22},
    '{"nome": "Caneta", "Preco": 7.50},
    ]
    
    // Retornar um array apenas com os preços
    
    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = produto => produto.preco
    
    const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
    console.log(resultado)
    