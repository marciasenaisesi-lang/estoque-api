
import dotenv from 'dotenv';
dotenv.config();

import loggerMiddleware from '/src/middleware/logger.js';
import valorProdutoMiddleware from '/src/middleware/valorProduto.js';
import express, {json,urlencoded}from'express';


const app = express();
const port = 3000;

//Middleware to formatar o body para JSON

app.get('/', function(req,res){
    res.status('Olá mundo, minha senha é '+ process.env.senhaBancoDeDados)
});


app.post('/produtos', (req,res) => {
    let produto = req.body
    
    //res.send('O produto foi criado! Nome: $ {produto.nome}, Valor : $ {produto.preco}')
    res.status(200).json ({
        
        "status": "Alterado",
        "codigo": 200,
        "mensagem ": 'O produto foi criado! Nome : $ {produto.nome }, Valor:{produto.preco}'
    })
    
})

app.put('/produtos/:id',(req,res) => {
    let id = req.params.id
    res.send(`O produto ${id} foi alterado!`)
})

app.delete('/produtos/:id',(req,res) => {
    let id = req.params.id
    res.status(200).json({ 
        "status":"Deletado",
        "codigo": 200,
        "mensagem" :'O produto ${id} foi deletado!`)   "
        
        
    }) 
})

app.listen(port, function(){
    console.log ('servidor rodando na porta' + port)
    
})
