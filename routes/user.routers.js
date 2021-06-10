module.exports=app=>{
    const db = require("../models");
    const user = db.user;

    const router = require('express').Router();
    const awaitErorrHandlerFactory = middleware => {
        return async (req, res, next) => {
          try {
            await middleware(req, res, next);
          } catch (err) {
            next(err);
          }
        };
      };

    router.get('/all', awaitErorrHandlerFactory(async (req,res,next)=>{
        const users = await user.findAll();
        return res.status(200).send(users);
    }));
    router.post('/add', awaitErorrHandlerFactory(async (req,res,next)=>{
        const newUser = {
            name: req.body.name,
            address: req.body.address,
            age: req.body.age
          };
        const add = await user.create(newUser);
        return res.status(201).send(add);
    }));

    app.use('/api/users',router);
}