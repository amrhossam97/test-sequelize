const db = require("../models");
const Book = db.book;
const Op = db.Sequalize.Op;

exports.create = (req, res) => {
  const book = {
    title: req.body.title,
    description: req.body.description,
  };
  Book.create(book)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Book.",
      });
    });
};

exports.findAll = (req, res) => {
    Book.findAll()
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while Geting Books.",
          });
    })
};
