const express=require('express')
const mysql=require('mysql')
const router=express.Router()
const common=require('../../libs/common.js')
const db=mysql.createPool({host:'localhost',user:'root',password:'huang5201314',database:'mywebsite'})

router.get('/',(req,res)=>{
   res.render('admin/login.ejs',{})  
})
router.post('/',(req,res)=>{
    const username=req.body.username;   
    const password=common.md5(req.body.password+common.MD5_SUFFIX);
    db.query(`SELECT * FROM admin WHERE user='${username}'`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err').end()
        }else if(data.length==0) { //检测用户是否真确
            res.status(400).send('该管理员不存在').end()
        }else{
            if(password==data[0].password){ //检测密码是否真确
                 req.session['session_id']=data[0].ID
                 res.redirect('/admin')
            }else{
                res.status(403).send('密码错误').end()
            }
        }
    })
})
module.exports=router