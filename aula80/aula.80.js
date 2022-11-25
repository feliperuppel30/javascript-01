class pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;

    }
    falar(){
        console.log (`${this.nome} está falando`)
    }
    beber(){
        console.log (`${this.nome} está bebendo`)
    }
    comer(){
        console.log (`${this.nome} está comendo`)

    }
}
const p1 = new pessoa('felipe', 'ruppel');
const p2 = new pessoa('lucas', 'ruppel');
const p3 = new pessoa('marquin', 'ruppel');
const p4 = new pessoa('sophia', 'ruppel');
console.log(p2, p1)