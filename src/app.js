/**
 * In this script, you'll 
 * 
 * @author Henrique Bernardo
 * @version 1.0 
 */

const express = require('express');//import express
const router = require('./router');//import routers
const app = express();//store express

//app use router
app.use(router);

//exporting app
module.exports = app;