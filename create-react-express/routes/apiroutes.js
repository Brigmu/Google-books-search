const app = require('express');
const bookscontroller = require('..controller/bookscontroller')

app.get('/api/books', (req, res) => {
    bookscontroller.findAll;
})

app.post('/api/books', (req, res) => {
    bookscontroller.addOne
})

app.delete('/api/books/:id', (req, res) => {
    bookscontroller.deleteOne
})