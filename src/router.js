/**
 * In this script, You'll have routers: get, post, put and delete.
 * 
 * @author Henrique Bernardo
 * @version 1.0
 */

const express = require('express');//import express
const router = express.Router();//store router
const booksController = require("./controller/booksController.js");//import db.js
router.use(express.json());//permission to use json

//select all books
router.get('/livros', booksController.selectAll);

//select a book
router.get('/livros/:id', booksController.selectOne);

//insert a book
router.post('/livros', booksController.insert);

//update a book
router.put('/livros/:id', booksController.update);

//delete a book
router.delete('/livros/:id', booksController.deleteOne);

//exporting routers
module.exports = router;