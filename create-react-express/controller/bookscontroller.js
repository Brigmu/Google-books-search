const db = require('../models');
const mongoose = require('mongoose')

module.exports = {
    findAll: function(req, res) {
        db.Book.find({})
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    addOne: function(req, res) {
        console.log(req.body);
        db.Book.create(req.body)
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(422).json(err)});
    },
    deleteOne: function(req, res) {
        db.Book.deleteOne({_id: mongoose.Types.ObjectId(req.params.id)})
            .then(data => res.json(data))
            .catch(err => {
                console.log(err);
                res.status(422).json(err)});
    }
}