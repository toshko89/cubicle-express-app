const express = require('express');
const path = require('path');
const homerRouter = require('./controllers/homeControler.js');
const cubeControler = require('./controllers/cubeControler.js');

const router = new express.Router();

router.use(homerRouter);

router.use('/cube',cubeControler);

router.get('/about',(req,res)=>{
    res.render('about')
});

router.get('*',(req,res)=>{
    res.render('404')
});

module.exports = router;