let a = 9;
let b = 7;

 a = b;
 b = a;

// depois da troca ... a = 7 e b = 9

// criando uma terceira variável:

// let temp = a;
// a = b;
// b = temp;

[a,b] = [b,a]; 

console.log(a);
console.log(b);