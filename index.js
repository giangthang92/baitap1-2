const express = require('express');
const ejs = require('ejs');
const { static } = require('express');
const engine = require('ejs-mate');


const port = 3000;
const app = express();

app.set('views','./views');
app.set('view engine', 'ejs');
app.use('/public', express.static('./public'));
app.engine('ejs', engine);

app.get('/', (req, res) => {
    res.render('client/page/index');
});
app.get('/post',(req, res) => {
    res.render('client/page/post');
});
app.listen(port,()=>{
    console.log('Run');
});
