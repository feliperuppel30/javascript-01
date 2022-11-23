// ...rest = resto, ...spread = espalhar
//               0  1  2  3  4  5  6  7  8   
/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, ,três, ,cinco, ...resto] = numeros;
console.log(um, três, cinco,resto);*/

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros;
console.log(lista1[0], lista2[0], lista3[0]);