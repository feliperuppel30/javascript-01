// para cada elemento:
//retorne apenas uma string com o nome da pessoa
// remova apenas a chave ''nome" do objeto
// adicione uma chave id em cada objeto


const pessoas = [ 
    {nome: 'felipe', idade: 23},
    {nome: 'laura', idade: 21},
    {nome: 'titi', idade: 2},
    {nome: 'guaxinim', idade: 10},
];
const nomes = pessoas.map(obj =>{
    return obj.nome
})
console.log(nomes)

const idades = pessoas.map(obj =>{
    return {idade: obj.idade}
})
console.log(idades)

const id = pessoas.map((obj, indice) =>{
    const newobj = {...obj };
    newobj.id = (indice +1)**2
    return newobj;
})
console.log(id)
console.log(pessoas)