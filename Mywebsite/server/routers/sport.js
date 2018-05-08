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
    
    db.query('SElECT * FROM sportsplan',(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database error').end()
        }else{
            res.send(data).end()
        }
        
    })
})

module.exports = router;