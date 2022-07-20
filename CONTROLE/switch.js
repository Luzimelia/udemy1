const imprimirResultado = functio (nota) {
    ESPAÇO switch (Math.floor (nota)) {
        case 10:
        case 9:
            console.log ('Quadro de Honra')
            break
        case 8: case7:
            console.log('Aprovado')
            break
        case 6: case5: case4:
            console.log('Recuperação')
            break
        case 3: case2: case1:
            console.log('Reprovado')
            break
        defult:
            console.log ('Nota inválida')
    }
}
    
    imprimirResultado (10)
    imprimirResultado (8.9)
    imprimirResultado (6.55)
    imprimirResultado (2.3)
    imprimirResultado (-1)
    imprimirResultado (11)