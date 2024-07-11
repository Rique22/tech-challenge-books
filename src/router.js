/**
 * In this script, You'll have routers: get, post, put and delete.
 * 
 * @author Henrique Bernardo
 * @version 1.0
 */

const express = require('express');//import express
const router = express.Router();//store router
const db = require("./db.js");//import db.js
router.use(express.json());//permission to use json

//select all books
router.get('/livros', async (req, res) => {
    try {
        const books = await db.selectionBooks();
        res.status(200).json(books);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
});

//select a book
router.get('/livros/:id', async (req, res) => {
    try {
        const book = await db.selectionBook(req.params.id);
        res.status(200).json(book);
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
});

//insert a book
router.post('/livros', async (req, res) => {
    try {
        await db.insertBook(req.body);
        res.status(201).send('Livro cadastrado com sucesso');
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
});

//update a book
router.put('/livros/:id', async (req, res) => {
    try {
        await db.updateBook(req.params.id, req.body);
        res.status(200).send('Livro atualizado com sucesso');
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
});

//delete a book
router.delete('/livros/:id', async (req, res) => {
    try {
        await db.deleteBook(req.params.id);
        res.status(200).send('Livro removido com sucesso');
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha ao selecionar livro` });
    }
});

//exporting routers
module.exports = router;