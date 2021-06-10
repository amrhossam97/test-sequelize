module.exports=app=>{
    const book = require('../controllers/book.controller');

    const router = require('express').Router();

    router.post('/add',book.create);
    router.get('/all',book.findAll);

    app.use('/api/books',router);
}