function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);

}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
            reject(`fui de xereca`);
            return}
            
            resolve(msg);
            return;
        }, tempo);
    })
}

const promises = [
    esperaAi('promise 1', 1000),
    esperaAi('promise 2', 2000),
    esperaAi('promise 3', 3000),
];
Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro);
    })