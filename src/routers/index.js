const express = require('express');//import express
const index = express.Router();//import express router

//Put a text
index.get('/', (req, res) => {
    res.status(200).send('<h1>Bem-Vindo<h1>');
});

//exporting index
module.exports = index;