const mongoose = require ('mongoose')

async function conectaBancoDeDados() {
    try{
        console.log('Conexão com o banco de dados iniciou')

    await mongoose.connect('mongodb+srv://alinemazaro:140389@cluster0.hm1tc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

    console.log('Conexao com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados