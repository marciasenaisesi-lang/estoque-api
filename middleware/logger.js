export defaul function (req,res,next) {
     const inicio = Date.now();

     res.on ('finish', () => {
        const duracao = Date.now() - inicio;
        const mensagem = '[LOG]${req.method} $ {req.url} - Status: $ {res.StatusCode} (${duracao}ms)';
        console.log(mensagem);
     })

     next ()
}