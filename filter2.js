Array.prototype.filter2 = function(calback) {
    const newArray = []
    for{let i = 0; i < this.lenght; i++ {
    if{callback(this[i], i, this)) {
    newArray.push(this[i])
    }
    }
    returnnewArray
    }
    
    const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    ]
    
    const caro = produto => produto.preco >= 500
    const fragil = produto => produto.fragil
    
    console.log(produtos.filter2(caro).filter2(fragil))