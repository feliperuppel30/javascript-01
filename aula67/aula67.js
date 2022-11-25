//some todos os numeros (reduce)
//retorne um array com os pares (filter)
//retorne um array com o dobre dos valores(map)
//


const numeros = [5, 50, 80, 1, 2, 3, 5, 11, 22, 42];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador = acumulador + valor;
    return acumulador 
}); // 0 = posiçao do acumulador
console.log(total);

