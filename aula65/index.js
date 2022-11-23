//retorne as pessoas que tem nome com 5 letras ou mais



const pessoas = [ 
    {nome: 'felipe', idade: 23},
    {nome: 'laura', idade: 21},
    {nome: 'titi', idade: 2},
    {nome: 'guaxinim', idade: 10},
];
    function callbackfilter(obj){
        return obj.nome.length > 5
    }


const nomefiltrado = pessoas.filter(callbackfilter)
console.log(`estes nomes tem mais que 5 caracteres ${nomefiltrado}`)

