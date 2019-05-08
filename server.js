
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routers = require('./src/routers/routers');


// iniciando o servidor
const app = express();
app.use(express.json());
app.use(cors());

// iniciando a conexao com o banco de dados
mongoose.connect('mongodb://localhost:27017/curso_nodejs_mongodb_rocketseat_db', { useNewUrlParser: true});

//importando todos os arquivos da pasta com require-dir

// iniciando as rotas
app.use('/api/' , routers);


app.listen(process.env.PORT || 3000);

console.log('SERVIDOR RODANDO NA PORTA 3000');


