const express=require('express')
const mysql=require('mysql')
const router=express.Router()


const db=mysql.createPool({host:'localhost',user:'root',password:'huang5201314',database:'mywebsite'})

router.get('/',(req,res)=>{
    switch(req.query.act){    //根据请求传的act不同做不同的操作
       case 'mod' :           //更改数据
       db.query(`SELECT * FROM monthlyplan WHERE ID=${req.query.id}`,(err,data)=>{
           //获取要修改的数据
           if(err){
               console.error(err)
               res.status(500).send('datadase err').end()
           }else if(data.length==0){
               res.status(400).send('data not found').end()
           }else{
               db.query(`SELECT * FROM monthlyplan`,(err,sport)=>{//获取所有数据
                  if(err){
                      console.error(err)
                      res.status(500).send('datadase err').end()
                  }else{
                      //把要修改的数据和所有数据渲染到页面
                      res.render('admin/monthlyplan.ejs',{sport,mod_data:data[0]})
                  } 
               })
           }
       })
       break;
       case 'del':            //删除数据  
        db.query(`DELETE FROM monthlyplan WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database err2').end()
            }else{
                res.redirect('/admin/monthlyplan')
            }
        })
       break;                 //获取数据
       default:
       db.query(`SELECT * FROM monthlyplan`,(err,sport)=>{
           if(err){
               console.error(err)
               res.status(500).send('database err').end()
           }else{
               res.render('admin/monthlyplan.ejs',{sport})
           }
       })
    }
})
router.post('/',(req,res)=>{
    const month=req.body.month;
    const startWeight=req.body.startWeight;
    const endWeight=req.body.endWeight;
    const target=req.body.target;
    const performance=req.body.performance;
     
  if(req.body.mod_id){//修改数据
     
    db.query(`UPDATE monthlyplan SET month=${month}, startWeight=${startWeight},endWeight=${endWeight},target=${target},performance=${performance} WHERE ID=${req.body.mod_id}`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err2').end()
        }else{
            res.redirect('monthlyplan')
        }
    })
  }else{ //添加数据
    db.query(`INSERT INTO monthlyplan (month,startWeight,endWeight,target,performance) VALUES(${month},${startWeight},${endWeight},${target},${performance})`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err 122').end()
        }else{
            res.redirect('monthlyplan')
        }
    })
  }
})
module.exports=router