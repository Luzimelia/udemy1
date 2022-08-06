const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop () // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unsshift('Hamilton')
console.log(pilotos)

// Splice pode add e remover elementos

// add
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // remove Massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)