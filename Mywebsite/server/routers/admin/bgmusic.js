const express=require('express')
const mysql=require('mysql')
const router=express.Router()
const multer=require('multer')
const multerObj=multer({dest:'./libs/music'})
router.use(multerObj.any())
const fs=require('fs')
const path=require('path')
const db=mysql.createPool({host:'localhost',user:'root',password:'huang5201314',database:'mywebsite'})

router.get('/',(req,res)=>{
    switch(req.query.act){    //根据请求传的act不同做不同的操作
       case 'mod' :           //更改数据
       db.query(`SELECT * FROM bgmusic WHERE ID=${req.query.id}`,(err,data)=>{
           //获取要修改的数据
           if(err){
               console.error(err)
               res.status(500).send('datadase err').end()
           }else if(data.length==0){
               res.status(400).send('data not found').end()
           }else{
               db.query(`SELECT * FROM bgmusic`,(err,banners)=>{//获取所有数据
                  if(err){
                      console.error(err)
                      res.status(500).send('datadase err').end()
                  }else{
                      //把要修改的数据和所有数据渲染到页面
                       var banners1=[]
                        for(var i=0;i<banners.length;i++){
                            banners1[i]=banners[i]
                            banners1[i].src=banners1[i].src.replace(/\/server/,'')
                        }
                      res.render('admin/bgmusic.ejs',{banners1,mod_data:data[0]})
                  } 
               })
           }
       })
       break;
       case 'del':            //删除数据
       db.query(`SELECT * FROM bgmusic WHERE ID=${req.query.id}`,(err,data)=>{
           if(err){
               console.error(err)
               res.status(500).send('database err').end()
           }else if(data.length==0){
               res.status(404).send('no this bgmusic opration').end()
           }else{
               fs.unlink('libs/music/'+path.parse(data[0].src).base,(err)=>{
                    if(err){
                        console.error(err)
                        res.status(500).send('file opration err').end()
                    }else{
                        db.query(`DELETE FROM bgmusic WHERE ID=${req.query.id}`,(err,data)=>{
                            if(err){
                                console.error(err)
                                res.status(500).send('database err2').end()
                            }else{
                                res.redirect('/admin/music')
                            }
                        })
                    }
               })
           }
       })
       break;                 //获取数据
       default:
       db.query(`SELECT * FROM bgmusic`,(err,banners)=>{
           if(err){
               console.error(err)
               res.status(500).send('database err').end()
           }else{
               var banners1=[]
               for(var i=0;i<banners.length;i++){
                   banners1[i]=banners[i]
                   banners1[i].src=banners1[i].src.replace(/\/server/,'')
               }
               res.render('admin/bgmusic.ejs',{banners1})
           }
       })
    }
})


router.post('/',(req,res)=>{
    var title=req.body.title;
    var src=req.body.src
    if(req.files[0]){
    var ext=path.parse(req.files[0].originalname).ext;
    var oldpath=req.files[0].path
    var newpath=req.files[0].path+ext
    var newFileName=req.files[0].filename+ext;
    }else{
        var newFileName=null
    }

  if(req.body.mod_id){//修改数据
    if(newFileName){  //上传文件
     fs.rename(oldpath,newpath,(err)=>{   //修改上传的文件名后缀
        if(err){
            console.error(err)
            res.status(400).send('flie opration err').end()
        }else{
            
            db.query(`SELECT * FROM bgmusic WHERE ID=${req.body.mod_id}`,(err,data)=>{
                if(err){
                    console.error(err)
                    res.status(500).send('database err').end()
                }else if(data.length==0){
                    res.status(404).send('old file not found').end()
                }else{
                    fs.unlink('libs/music/'+path.parse(data[0].src).base,(err)=>{
                        if(err){
                            console.error(err)
                            res.status(500).send('file opration err').end()
                        }else{
                            db.query(`UPDATE bgmusic SET title="${title}", src="./server/libs/music/${newFileName}" WHERE ID=${req.body.mod_id}`,(err,data)=>{
                                if(err){
                                    console.error(err)
                                    res.status(500).send('database err2').end()
                                }else{
                                    res.redirect('music')
                                }
                            })
                        }
                    })
                }
            })
        }
     })
    }else{             //不上传文件直接修改
      db.query(`UPDATE bgmusic SET title='${title}' WHERE ID=${req.body.mod_id}`,(err,data)=>{
          if(err){
              console.error(err)
              res.status(500).send('database err').end()
          }else{
              res.redirect('music')
              
          }
      })
    }
  }else{ //添加数据
    fs.rename(oldpath,newpath,(err)=>{   //修改上传的文件名后缀
        if(err){
            console.error(err)
            res.status(400).send('flie opration err').end()
        }else{
            db.query(`INSERT INTO bgmusic (title,src) VALUES("${title}","/server/libs/music/${newFileName}")`,(err,data)=>{
                if(err){
                    console.error(err)
                    res.status(500).send('database err 1').end()
                }else{
                    res.redirect('music')
                }
            })
        }
    })
  }
})

module.exports=router