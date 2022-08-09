const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45},
    '{"nome": "Caderno", "Preco": 13.90},
    '{"nome": "Kit de Lápis", "Preco": 41.22},
    '{"nome": "Caneta", "Preco": 7.50},
    ]
    
    // Retornar um array apenas com os preços
    
    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = produto => produto.preco
    
    const resultado = carrinho.map(paraObjeto).map(apenasPreco)
    console.log(resultado)
    