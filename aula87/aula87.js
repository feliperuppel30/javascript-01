function random(min, max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random()*(max-min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(typeof msg !== 'string') { 
                reject('cai no erro fui de F');
                return;
                }
            resolve(msg.toUpperCase() );
            return;
        }, tempo);
    })
}

//promise.all promise.race promise.resolve promise.reject
/* abaixoo segue exemplo de race
const promises =[
    esperaAi(1000, random(1, 5)),
    esperaAi('promise 1', random(1, 5)),
    esperaAi('promise 2', random(1, 5)),
    esperaAi('promise 3', random(1, 5)),
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro)
    })
*/
function baixapagina(){
    const emcache = true;

    if(emcache){
        return Promise.resolve('Página em cache');
    } else{
        return esperaAi('Baixei a Página', 3000)
    }
}
baixapagina()
.then(dadospagina =>{
    console.log(dadospagina)
})
.catch(e => console.log('erro', e))