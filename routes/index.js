const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
router.get('/post',(req, res) => {
    const baiviet = {   title: 'GiangAAAAAA', 
                        description: ' Bai viet 2000 tu', 
                        author: 'GiangThang', 
                        createAt: '18/03/2021',
                        link: 'http://24h.com.vn/' };
    res.render('client/page/post', {
        post : baiviet, 
    });
});

module.exports = router;