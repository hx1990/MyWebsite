const express=require('express')
const mysql=require('mysql')
const router=express.Router()
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'huang5201314',
    database:'mywebsite'
})
router.get('/',(req,res)=>{
   db.query('SELECT * FROM studyplan',(err,data)=>{
       if(err){
           console.error(err)
           res.status(500).send('database err').end()
       }else{
           res.send(data).end()
       }
   })
})
module.exports=router