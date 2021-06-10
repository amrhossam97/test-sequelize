const db = require("../models");
const Sales = db.sales;
const Op = db.Sequalize.Op;

exports.create = async (req, res,next) => {
  const book = {
    name: req.body.name,
    age: req.body.age,
    salary: req.body.salary,
    address: req.body.address,
  };
  try {
   const data =  await Sales.create(book);
    res.status(201).send(data);
  }
  catch (err){
    next(err);
  }
};

exports.findAll = async(req, res,next) => {
    try {
        const data =  await Sales.findAll();
         res.status(200).send(data);
       }
       catch (err){
         next(err);
       }
};
