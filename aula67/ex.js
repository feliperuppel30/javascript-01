// retorne a pessoa mais velha 
const pessoas = [ 
    {nome: 'felipe', idade: 23},
    {nome: 'laura', idade: 21},
    {nome: 'titi', idade: 2},
    {nome: 'guaxinim', idade: 113},
];
const maisvelha = pessoas.reduce(function(acumulador, valor)   {
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
})
console.log(maisvelha)