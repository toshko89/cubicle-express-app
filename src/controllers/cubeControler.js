const express = require('express');
const Cube = require('../models/createCube.js');

const cubeControler = new express.Router();

cubeControler.get('/create',(req,res)=>{
    res.render('create')
})

module.exports = cubeControler;