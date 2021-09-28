const express = require('express');
const Cube = require('../models/createCube.js');

const cubeControler = new express.Router();

cubeControler.get('/create',(req,res)=>{
    res.render('create')
});

cubeControler.post('/create',(req,res)=>{
    let {name, description, imageUrl, difficulty} = req.body;

    Cube.add(name, description, imageUrl, difficulty);
    console.log(Cube.cubes);
    res.redirect('/');
    
});

module.exports = cubeControler;