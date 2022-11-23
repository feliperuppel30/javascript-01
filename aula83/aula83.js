class controleremoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //método  de instâmcia
    aumentarvolume(){
        this.volume += 2;
    }
    diminuirvolume(){
        this.volume -= 2;
    }

    //método estático
    static trocapilha(){
        console.log('ok vou trocar a pilha')
    }
}
const controle1 = new controleremoto('LG');
controle1.aumentarvolume();
controleremoto.trocapilha();
console.log(controle1)