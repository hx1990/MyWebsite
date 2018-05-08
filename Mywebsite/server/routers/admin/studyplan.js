const express=require('express')
const mysql=require('mysql')
const router=express.Router()


const db=mysql.createPool({host:'localhost',user:'root',password:'huang5201314',database:'mywebsite'})

router.get('/',(req,res)=>{
    switch(req.query.act){    //根据请求传的act不同做不同的操作
       case 'mod' :           //更改数据
       db.query(`SELECT * FROM studyplan WHERE ID=${req.query.id}`,(err,data)=>{
           //获取要修改的数据
           if(err){
               console.error(err)
               res.status(500).send('datadase err').end()
           }else if(data.length==0){
               res.status(400).send('data not found').end()
           }else{
               db.query(`SELECT * FROM studyplan`,(err,sport)=>{//获取所有数据
                  if(err){
                      console.error(err)
                      res.status(500).send('datadase err').end()
                  }else{
                      //把要修改的数据和所有数据渲染到页面
                      res.render('admin/studyplan.ejs',{sport,mod_data:data[0]})
                  } 
               })
           }
       })
       break;
       case 'del':            //删除数据  
        db.query(`DELETE FROM studyplan WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database err2').end()
            }else{
                res.redirect('/admin/study')
            }
        })
       break;                 //获取数据
       default:
       db.query(`SELECT * FROM studyplan`,(err,sport)=>{
           if(err){
               console.error(err)
               res.status(500).send('database err').end()
           }else{
               res.render('admin/studyplan.ejs',{sport})
           }
       })
    }
})
router.post('/',(req,res)=>{
    const starttime=req.body.starttime;
    const project=req.body.project;
    const content=req.body.content;
    const progress=req.body.progress;
    const trouble=req.body.trouble;
    const endtime=req.body.endtime;
    const star=req.body.star; 
  if(req.body.mod_id){//修改数据
      
    db.query(`UPDATE studyplan SET starttime="${starttime}", project="${project}",content="${content}",progress="${progress}",trouble="${trouble}",endtime="${endtime}",star="${star}"  WHERE ID=${req.body.mod_id}`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err2').end()
        }else{
            res.redirect('study')
        }
    })
  }else{ //添加数据
      
    db.query(`INSERT INTO studyplan (starttime,project,content,progress,trouble,endtime,star) VALUES("${starttime}","${project}","${content}","${progress}","${trouble}","${endtime}",${star})`,(err,data)=>{
        if(err){
            console.error(err)
            res.status(500).send('database err 122').end()
        }else{
            res.redirect('study')
        }
    })
  }
})
module.exports=router