
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'José',
    idade: 30,
    endereço:{
        rua: 'av Brasil',
        numero: 320
    
    }
};
//atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa
console.log(nome, sobrenome,resto);