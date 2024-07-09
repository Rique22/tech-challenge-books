/**
 * In this script, You'll have routers: get, post, put and delete.
 * 
 * @author Henrique Bernardo
 * @version 1.0 
 */

const express = require('express');//import express
const app = express();//store express
app.use(express.json());//permission to use json
const db = require("./db.js");//import db.js

//Routers
//select all books
app.get('/livros', async (req, res) => {
    const books = await db.selectionBooks();
    res.status(200).json(books);
});

//select a book
app.get('/livros/:id', async (req, res) => {
    const book = await db.selectionBook(req.params.id);
    res.status(200).json(book);
});

//insert a book
app.post('/livros', async (req, res) => {
    await db.insertBook(req.body);
    res.status(201).send('Livro cadastrado com sucesso');
});

//update a book
app.put('/livros/:id', async (req, res) => {
    await db.updateBook(req.params.id, req.body);
    res.status(200).send('Livro atualizado com sucesso');
});

//delete a book
app.delete('/livros/:id', async (req, res) => {
    await db.deleteBook(req.params.id);
    res.status(200).send('Livro removido com sucesso');
});

//exporting app.js
module.exports = app;