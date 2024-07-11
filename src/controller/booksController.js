const db = require("../db.js");//import db.js

const selectAll = async (req, res) => {
    try {
        const books = await db.selectionBooks();
        res.status(200).json(books);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
};

const selectOne = async (req, res) => {
    try {
        const book = await db.selectionBook(req.params.id);
        res.status(200).json(book);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
};

const insert = async (req, res) => {
    try {
        await db.insertBook(req.body);
        res.status(201).send('Livro cadastrado com sucesso');
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
};

const update = async (req, res) => {
    try {
        await db.updateBook(req.params.id, req.body);
        res.status(200).send('Livro atualizado com sucesso');
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
};

const deleteOne = async (req, res) => {
    try {
        await db.deleteBook(req.params.id);
        res.status(200).send('Livro removido com sucesso');
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
};

module.exports = {selectAll, selectOne, insert, update, deleteOne};