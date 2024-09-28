const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher (resquest, response) {
    response.json({
        nome: 'Simaria Conceição',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'Desenvolvedores e instrutora'
    })
};

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
};

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);