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
    const books = await db.selectionBooks();
    res.status(200).json(books);
});

//select a book
router.get('/livros/:id', async (req, res) => {
    const book = await db.selectionBook(req.params.id);
    res.status(200).json(book);
});

//insert a book
router.post('/livros', async (req, res) => {
    await db.insertBook(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
});

//update a book
router.put('/livros/:id', async (req, res) => {
    await db.updateBook(req.params.id, req.body);
    res.status(200).send('Livro atualizado com sucesso');
});

//delete a book
router.delete('/livros/:id', async (req, res) => {
    await db.deleteBook(req.params.id);
    res.status(200).send('Livro removido com sucesso');
});

//exporting routers
module.exports = router;