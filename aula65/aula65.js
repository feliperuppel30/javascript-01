// filter, map, reduce

// retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];

function callbackfilter(valor, indice, array) {
    return valor > 10;
}
const numerosfiltrados = numeros.filter(callbackfilter)
console.log(numerosfiltrados)


//simplificado

/*const numerosfiltrados = numeros.filter(valor => valor > 10);
console.log(numerosfiltrados)
*/