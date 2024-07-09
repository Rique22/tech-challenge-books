/**
 * In this script, you can start server.
 * 
 * @author Henrique Bernardo
 * @version 1.0
 */

const app = require('./src/app.js');//import app.js
const port = 3000;//localhost port

//Start server
app.listen(port, () => {
console.log(`Servidor rodando em localhost:${port}`);
});