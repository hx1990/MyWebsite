const express=require('express')
const mysql=require('mysql')
const router=express.Router()


const db=mysql.createPool({host:'localhost',user:'root',password:'huang5201314',database:'mywebsite'})

router.get('/',(req,res)=>{
    switch(req.query.act){    //根据请求传的act不同做不同的操作
       case 'mod' :           //更改数据
       db.query(`SELECT * FROM sportsplan WHERE ID=${req.query.id}`,(err,data)=>{
           //获取要修改的数据
           if(err){
               console.error(err)
               res.status(500).send('datadase err').end()
           }else if(data.length==0){
               res.status(400).send('data not found').end()
           }else{
               db.query(`SELECT * FROM sportsplan`,(err,sport)=>{//获取所有数据
                  if(err){
                      console.error(err)
                      res.status(500).send('datadase err').end()
                  }else{
                      //把要修改的数据和所有数据渲染到页面
                      res.render('admin/sportsplan.ejs',{sport,mod_data:data[0]})
                  } 
               })
           }
       })
       break;
       case 'del':            //删除数据  
        db.query(`DELETE FROM sportsplan WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database err2').end()
            }else{
                res.redirect('/admin/sport')
            }
        })
       break;                 //获取数据
       default:
       db.query(`SELECT * FROM sportsplan`,(err,sport)=>{
           if(err){
               console.error(err)
               res.status(500).send('database err').end()
           }else{
               res.render('admin/sportsplan.ejs',{sport})
           }
       })
    }
})
router.post('/',(req,res)=>{
    const date=req.body.date;
    const project=req.body.project;
    const s_time=req.body.s_time;
    const distance=req.body.distance;
    const weather=req.body.weather;
    const remark=req.body.remark;
    const weigth=req.body.weigth;
    const up_time=req.body.up_time;
    const down_time=req.body.down_time;
    const star=req.body.star; 
  if(req.body.mod_id){//修改数据
     
    db.query(`UPDATE sportsplan SET date=${date}, project="${project}",s_time=${s_time},distance=${distance},weather="${weather}",remark="${remark}",weigth=${weigth},up_time="${up_time}",down_time="${down_time}",star=${star}  WHERE ID=${req.body.mod_id}`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err2').end()
        }else{
            res.redirect('sport')
        }
    })
  }else{ //添加数据
    db.query(`INSERT INTO sportsplan (date,project,s_time,distance,weather,remark,weigth,up_time,down_time,star) VALUES(${date},"${project}",${s_time},${distance},"${weather}","${remark}",${weigth},"${up_time}","${down_time}",${star})`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err 122').end()
        }else{
            res.redirect('sport')
        }
    })
  }
})
module.exports=router