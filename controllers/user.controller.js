/* const db = require("../models");
const user = db.user;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const book = {
    title: req.body.title,
    description: req.body.description,
  };
  Book.create(book)
    .then((data) => {
      res.status(200).send(data);
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
 */