const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Book.find({})
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    addOne: function(req, res) {
        db.Book.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    deleteOne: function(req, res) {
        db.Book.delete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}