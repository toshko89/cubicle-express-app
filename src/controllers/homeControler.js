const express = require('express');
const Cube = require('../models/createCube.js');

const homerRouter = new express.Router();

homerRouter.get('/',(req,res)=>{

    let cubes = Cube.cubes;

    res.render('index',{cubes});

})

homerRouter.post('/details',(req,res)=>{

})

homerRouter.get('/id',(req,res)=>{

})

module.exports = homerRouter;