/*数据接口*/
const express=require('express')
const mysql=require('mysql')
const router=express.Router()
//建立一个数据池
const db=mysql.createPool({host:'localhost',
           user:'root',
           password:'huang5201314',
           database:'mywebsite'
})
router.use('/',(req,res)=>{
    const com=require('../libs/common')
    const user=req.query.user;
    const password=com.md5(req.query.password+com.MD5_SUFFIX)
    switch(req.query.act){
        case 'reg' :  //用户注册
          db.query('SElECT * FROM userlist',(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database error').end()
            }else{
                for(var i=0;i<data.length;i++){
                    if(user==data[i].user) res.send({OK:false,msg:'该用户已注册'}).end()
                }
                db.query(`INSERT INTO userlist (user,password) VALUES ("${user}","${password}")`,(err,data)=>{
                    if(err){
                        console.error(err)
                        res.status(500).send('database err').end()
                    }else{
                        res.send({OK:true,msg:'注册成功'}).end()
                    }
                })
            }
          })
        break;
        case 'login' : //用户登录
        db.query(`SElECT * FROM userlist WHERE user="${user}"`,(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database error').end()
            }else if(data.length==0){
                 res.send({OK:false,msg:'该用户不存在'}).end()
            }else{
                if(password==data[0].password){
                   req.session['session_id']=data[0].ID
                   console.log(req.session['session_id'])
                   res.status(200).send({OK:true,msg:'登录成功'}).end() 
                }else{
                   res.send({OK:false,msg:'密码错误'}).end() 
                }
            }
        })
        break;
        default:
         res.send({OK:false,msg:'你输入的参数有误'}).end()
    }
    
})
module.exports = router;