// const app = require('express');
// const db = require('../models');
const bookscontroller = require('../controller/bookscontroller')

// app.get('/api/books', (req, res) => {
//     bookscontroller.findAll;
// })

// app.post('/api/books', (req, res) => {
//     // bookscontroller.addOne
//     db.Book.create(req.body)
//         .then(data => res.json(data))
//         .catch(err => res.status(422).json(err));
// })

// app.delete('/api/books/:id', (req, res) => {
//     bookscontroller.deleteOne
// })

const router = require("express").Router()
router.route("/")
  .get(bookscontroller.findAll)
  .post(bookscontroller.addOne)
    
router.route("/:id")
  .delete(bookscontroller.deleteOne)

module.exports = router;