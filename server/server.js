const express = require('express');
const cors=require('cors');
const app = express()


const PORT = process.env.PORT || 5000;
app.use(cors());
app.use('/static', express.static('public'))
app.get ('/animals', (req, res)=>{
res.json([{
    id:1,
    img:'http://localhost:5000/static/images/Animals/img1.jpg',
    altDescript:'Фото'
},
{
    id:2,
    img:'http://localhost:5000/static/images/Animals/img2.jpg',
    altDescript:'Фото'
},
{
    id:3,
    img:'http://localhost:5000/static/images/Animals/img3.jpg',
    altDescript:'Фото'
},
{
    id:4,
    img:'http://localhost:5000/static/images/Animals/img4.jpg',
    altDescript:'Фото'
},
{
    id:5,
    img:'http://localhost:5000/static/images/Animals/img5.jpg',
    altDescript:'Фото'
},
{
    id:6,
    img:'http://localhost:5000/static/images/Animals/img6.jpg',
    altDescript:'Фото'
}
])
})
app.get('/frends',(req, res)=>{
    res.json([
        {
            id:1,
            name:'Сергей',
            img:'http://localhost:5000/static/images/Users/img1.jpg',
            age:'33 лет',
            city:'Самара',
            univer:'',
            alt:'Фото пользователя',

        },
        {
            id:2,
            name:'Артем',
            img:'http://localhost:5000/static/images/Users/img2.jpg',
            alt:'Фото пользователя',
            age: '31 год',
            city:'Москва',
            univer:'СамГТУ',
            
        },
        {
            id:3,
            name:'Игорь',
            img:'http://localhost:5000/static/images/Users/img3.jpg',
            alt:'Фото пользователя',
            age: '34 год',
            city:'Ижевск',
            univer:'',

        },
        {
            id:4,
            name:'Владимир',
            img:'http://localhost:5000/static/images/Users/img4.jpg',
            alt:'Фото пользователя',
            age: '32 год',
            city:'Самара',
            univer:'СамГТУ',

        }
    ])
})
app.listen(PORT, ()=> {console.log(`server is listening on port ${PORT}`)}
);