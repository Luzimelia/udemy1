// Diferenças na estrutura While e Do/While

// Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opção:

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    }
         
    let opcao //somente iniciada a variável, sem valor inicial!
         
    do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
    } while (opcao != -1)
         
    console.log('Até a próxima!')
    
    // Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.