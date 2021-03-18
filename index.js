const express = require('express');
const ejs = require('ejs');
const { static } = require('express');
const engine = require('ejs-mate');
const router = require('./routes/index.js');


const port = 3000;
const app = express();

app.use(router);
app.set('views','./views');
app.set('view engine', 'ejs');
app.use('/public', express.static('./public'));
app.engine('ejs', engine);


app.listen(port,()=>{
    console.log('Run');
});
