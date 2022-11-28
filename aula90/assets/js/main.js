



fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('erro 404 nosso');
    })
    .catch( e => console.log(e))