const express = require("express");
const app = express();
app.use(express.json());
const books = [
    {
        "id": 1,
        "name": "A casa",
        "author": "Bernardo",
        "publishing_company": "Columbia"
    },
    {
        "id": 2,
        "name": "A casa de Jesus",
        "author": "Armando",
        "publishing_company": "Hello"
    }
];

function findBook(id){
    return books.findIndex(book => {
        return book.id === Number(id);
    });
}

//Router
app.get('/', (req, res) => {
    res.status(200).send('<h1>Deu bom<h1>');
});

app.get('/livros', (req, res) => {
    res.status(200).json(books);
});

app.get('/livros/:id', (req, res) => {
    const index = findBook(req.params.id);
    res.status(200).json(books[index]);
});

app.post('/livros', (req, res) => {
    books.push(req.body);
    res.status(201).send('livro cadastrado com sucesso');
});

app.put('/livros/:id', (req, res) => {
    const index = findBook(req.params.id);
    books[index].name = req.body.name;
    res.status(200).json(books);
});

app.delete('/livros/:id', (req, res) => {
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
});

module.exports = app;