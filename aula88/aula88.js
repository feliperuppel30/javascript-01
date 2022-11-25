function random(min=0, max=3){
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
/*
esperaAi('fase 1 ', random())
    .then(valor => {
        console.log(valor);
        return esperaAi('fase 2 ', random());
    })
    .then(valor => {
        console.log(valor)
        return esperaAi('fase 3', random());
    })
    .then(valor =>{
        console.log(valor);
    })
    .catch(e => console.log(e))
*/
async function executa() {
    try {const fase1 = await esperaAi('fase 1', random());
        console.log(fase1);

        const fase2 = await esperaAi('fase 2', random());
        console.log(fase2);

        const fase3 = await esperaAi(3, random());
        console.log(fase3);

        console.log(`terminamos na ${fase3}`);
    }   catch(e){
        console.log(e);
    }
}
executa()