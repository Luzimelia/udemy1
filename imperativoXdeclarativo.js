const aluno = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
    ]
    
    // Imperativo
    let total1 = 0
    for (var i = 0; i < alunos.leght; i++){
    total1 += alunos[i].nota
    }
    console.log(total1 / alunos.lenght
    
    // Declarativo
    const getNota = aluno => aluno.nota
    const soma = (total, atual) => total + atual
    
    consta total2 = alunos.map(getNota).reduce(soma)
    console.log(total2 / alunos.lenght)
    
    // select codigo, nome, email from clientes where ativo = 1