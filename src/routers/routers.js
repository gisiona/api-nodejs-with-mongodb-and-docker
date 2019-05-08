
const express = require('express');
const router = express.Router();

const ProdutoControler = require('../controllers/produtoController')

// iniciando as rotas
router.get('/produtos' , ProdutoControler.index);
router.post('/produtos' , ProdutoControler.store);
router.get('/produtos/:id' , ProdutoControler.show);
router.put('/produtos/:id' , ProdutoControler.update);
router.delete('/produtos/:id' , ProdutoControler.delete);

module.exports = router;