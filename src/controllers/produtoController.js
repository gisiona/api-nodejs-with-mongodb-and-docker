const mongoose = require('mongoose');

const requireDir = require('require-dir');

requireDir('../models');
const produto = mongoose.model('Produto');

module.exports = {
    async index(req, res){
        const produtos = await produto.paginate({}, {page: 1 , limit: 15 });
        return res.json(produtos);
    },


    async store(req,res){
        const _produto = await produto.create(req.body);
        return res.json({_produto});
    },

    async show(req,res){
        console.log(req.params.id)
        const _produto = await produto.findById(req.params.id);
        return res.json({_produto});
    },

    
    async update(req,res){
        console.log(req.params.id)
        const _produto = await produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json({_produto});
    },

    async delete(req,res){
        console.log(req.params.id)
        const _produto = await produto.findByIdAndDelete(req.params.id);
        return res.json({retorno:"Registro excluido com sucesso"});
    }
}



/*
produto.create({
    titulo: 'Rocketseat nodejs online',
    descricao: 'Curso de nodejs online da rocketseat',
    url: 'https://github.com/gisiona',
});
*/