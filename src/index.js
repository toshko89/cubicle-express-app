const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname,'./static')));
app.use(express.urlencoded({extended:true}))

app.set('views',path.resolve(__dirname,'./views'));
app.engine('hbs',handlebars({
    extname:'hbs'
}))
app.set('view engine','hbs');

app.get('/',(req, res)=>{
    res.render('index')
})

app.listen(port,()=>console.log(`Express running on port: ${port}...`))
