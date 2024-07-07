const app = require("./app");//import app
const port = 3000;

//Start the server
app.listen(port, () => {
console.log(`Servidor rodando em localhost:${port}`);
});