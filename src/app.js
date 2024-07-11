/**
 * In this script, you'll 
 * 
 * @author Henrique Bernardo
 * @version 1.0 
 */

const express = require('express');//import express
const router = require('./routers/router.js');//import routers
const index = require('./routers/index.js');//import index
const app = express();//store express

//app use router
app.use(index, router);

//exporting app
module.exports = app;