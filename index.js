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
    const baiviettao =  [
          { title : 'adaSSSSSSSSSSSSSS',
            description : ' day la mo ta moi',
            author: 'GiangThang92', 
            createdAt: '18 - 03 -2021',
          },
          {
            title : 'ABBBBBBBBBBBBBBBBBBB',
            description : ' day la mo ta moi 2',
            author: 'GiangThang92', 
            createdAt: '18 - 03 -2021',
          },
          {
            title : 'ACCCCCCCCCCCCCCCCC',
            description : ' day la mo ta moi 3',
            author: 'GiangThang92', 
            createdAt: '18 - 03 -2021',
          },
          {
            title : 'ADDDDDDDDDDDDDDDDDDD',
            description : ' day la mo ta moi 4',
            author: 'GiangThang92', 
            createdAt: '18 - 03 -2021',
          }
    ]
    res.render('client/page/index', {
        posts : baiviettao,
    });
});
app.get('/post',(req, res) => {
    const baiviet = {   title: 'GiangAAAAAA', 
                        description: ' Bai viet 2000 tu', 
                        author: 'GiangThang', 
                        createAt: '18/03/2021',
                        link: 'http://24h.com.vn/' };
    res.render('client/page/post', {
        post : baiviet, 
    });
});
app.listen(port,()=>{
    console.log('Run');
});
