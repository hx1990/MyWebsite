const express=require('express');
const mysql=require('mysql')
const router=express.Router()
const db=mysql.createPool({host:'localhost',user:'root',password:'huang5201314',database:'mywebsite'})

//检查登录
router.use((req,res,next)=>{
    if(!req.session['session_id']&&req.url!='/login'){//没有登录且访问的不是登录
        res.redirect('/admin/login')
    }else{
        
        next()
    }
})

router.get('/', (req, res)=>{
    res.render('admin/index.ejs', {});
  });


//引入路由
router.use('/login',require('./login'))
router.use('/banner',require('./banner'))
router.use('/music',require('./bgmusic'))
router.use('/bgpic',require('./bgpic'))
router.use('/bgpic',require('./bgpic'))
router.use('/sport',require('./sportsplan'))
router.use('/study',require('./studyplan'))
router.use('/monthlyplan',require('./monthlyplan'))

module.exports=router