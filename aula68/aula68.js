// retorne a soma do dobro de todos os pares
//--> filtrar pares
//-->dobrar valores 
//--> reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 11, 22, 42];
const pares = numeros.filter(valor=>{
    return valor % 2 ===0;
}).map(valor=>{
    return valor*2
}).reduce((acumulador, valor)=>{
    return acumulador + valor
})
console.log(pares)
