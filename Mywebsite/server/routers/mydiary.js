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
    
    if(req.query.id){ //获取某一篇文章详情页
     switch(req.query.act){
        case 'n_nice':  //用户点赞操作
         if(!req.session['session_id']){
            res.send({OK:false,msg:'你还没有登录,登陆之后才能点赞'}).end()
         }else{
            if(req.session.n_nice&&req.session.id==req.query.id){
                res.send({OK:false,msg:'您已经点过赞，同一用户只能点赞一次'}).end()
            }else{
               
                db.query(`UPDATE mydiary SET n_nice=n_nice+1 WHERE ID=${req.query.id}`,(err)=>{
                   if(err){
                      console.error(err)
                      res.status(500).send('database err').end()
                   }else{
                      req.session.n_nice=true;
                      req.session.id=req.query.id;
                     db.query(`SELECT * FROM mydiary WHERE ID=${req.query.id}`,(err,data)=>{
                        if(err){
                            console.error(err)
                            res.status(500).send('database err').end()
                        }else if(data.length==0){
                            res.status(404).send('no found this data').end()
                        }else{
                            var article=data[0];
                            article.content=article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                            if(article.comment!==null){
                                    article.comment=article.comment.split('|')
                                   }
                            res.send(article).end()
                        }
                      })
                   }
                })    
            }
         }    
        break;
        case 'n_tread'://用户踩踏操作
         if(!req.session['session_id']){
            res.send({OK:false,msg:'你还没有登录,登陆之后才能踩踏'}).end()
         }else{
            if(req.session.n_tread&&req.session.id==req.query.id){
                res.send({OK:false,msg:'您已经踩过，同一用户只能踩一次'}).end()
            }else{
                db.query(`UPDATE mydiary SET n_tread=n_tread+1 WHERE ID=${req.query.id}`,(err)=>{
                   if(err){
                      console.error(err)
                      res.status(500).send('database err').end()
                   }else{
                      req.session.n_tread=true;
                      req.session.id=req.query.id;
                     db.query(`SELECT * FROM mydiary WHERE ID=${req.query.id}`,(err,data)=>{
                        if(err){
                            console.error(err)
                            res.status(500).send('database err').end()
                        }else if(data.length==0){
                            res.status(404).send('no found this data').end()
                        }else{
                            var article=data[0];
                            article.content=article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                            if(article.comment!==null){
                                    article.comment=article.comment.split('|')
                                   }
                            res.send(article).end()
                        }
                      })
                   }
                })    
            }
         }    
        break;
        case 'comment'://用户评价
         if(!req.session['session_id']){
            res.send({OK:false,msg:'你还没有登录,登陆之后才能评价'}).end()
         }else{
           if(req.query.evaluation==''){
               res.send({OK:false,msg:'评价不能为空'}).end()
           }else{
                [db.query(`SELECT user FROM userlist WHERE ID=${req.session['session_id']}`,(err,userlist)=>{
                    if(err){
                        console.error(err)
                        res.status.send('database err').end()
                    }else{  
                       var  t=new Date().getTime()
                        var evaluationData={
                            name:userlist[0].user,
                            time:t,
                            content:req.query.evaluation
                        }
                         evaluationData=JSON.stringify(evaluationData)+'|'
                        console.log(evaluationData)
                        db.query(`UPDATE mydiary SET  comment=CONCAT(comment,'${evaluationData}') WHERE ID=${req.query.id}`,(err,comment)=>{
                            if(err){
                                console.error(err)
                                res.status(500).send('database err2').end()
                            }else{
                                db.query(`SELECT * FROM mydiary WHERE ID=${req.query.id}`,(err,data)=>{
                                    if(err){
                                    console.error(err)
                                    res.status(500).send('database err').end()
                                    }else if(data.length==0){
                                    res.status(404).send('no found this data').end()
                                    }else{
                                    var article=data[0];
                                    article.content=article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                                   console.log(article.comment)
                                   if(article.comment!==null){
                                    article.comment=article.comment.split('|')
                                   }
                                    res.send(article).end()
                                }
                                })
                            }
                        })
                    }
                })]
           }
         }
        break;
        default:
         db.query(`SELECT * FROM mydiary WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
                console.error(err)
                res.status(500).send('database err').end()
            }else if(data.length==0){
                res.status(404).send('no found this data').end()
            }else{
                var article=data[0];
                article.content=article.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                if(article.comment!==null){
                article.comment=article.comment.split('|')
                }
                res.send(article).end()
            }
         })
     }  
    }else{   //根据type不同获取不同分类的数据列表
        if(req.query.type=='privacy'){//
            
        }else{
           db.query(`SELECT ID,title,summary FROM mydiary WHERE type='${req.query.type}'`,(err,data)=>{
                if(err){
                    console.error(err)
                    res.status(500).send('database err').end()
                }else if(data.length==0){
                    res.status(404).send('no found this data').end()
                }else{
                    res.send(data).end()
                }
           })      
        }
    }   
})
module.exports = router;