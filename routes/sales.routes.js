module.exports=app=>{
    const sales = require('../controllers/sales.controller');

    const router = require('express').Router();

    router.post('/add',sales.create);
    router.get('/all',sales.findAll);

    app.use('/api/sales',router);
}