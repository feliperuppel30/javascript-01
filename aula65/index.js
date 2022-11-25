//retorne as pessoas que tem nome com 5 letras ou mais
// retorne as pessoas com mais de 20 anos
//retorne as pessaos cujo nome termina em a

const pessoas = [ 
    {nome: 'felipe', idade: 23},
    {nome: 'laura', idade: 21},
    {nome: 'titi', idade: 2},
    {nome: 'guaxinim', idade: 10},
];
const nomefiltrado = pessoas.filter(obj=> { 
    return obj.nome.length >= 5;
    })
console.log(nomefiltrado)
const nomefiltrado2 = pessoas.filter(valor => {
    return valor.idade >= 20;
}) 
console.log(nomefiltrado2)

const nomefiltrado3 = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(nomefiltrado3)

