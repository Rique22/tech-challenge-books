/**
 * In this script, you can start server.
 * 
 * @author Henrique Bernardo
 * @version 1.0
 */
require('dotenv').config();
const app = require('./src/app.js');//import app.js
const port = process.env.PORT;//localhost port

//Start server
app.listen(port, () => {
console.log(`Servidor rodando em localhost:${port}`);
});