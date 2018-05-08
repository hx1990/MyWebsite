const express=require('express')
const static=require('express-static')
const bodyParser=require('body-parser')
const https=require('https')
const cookieParser=require('cookie-parser')
const cookieSession=require('cookie-session')
const route=require('express-route')
const consolidate=require('consolidate')
const server=express()
//https.createServer({},server).listen(3000);
server.listen(3000);
console.log('成功监听3000端口')

server.use(function(req, res, next){ 
res.locals.session = req.session;
next();
}); 
//1获取get数据
//获取post数据
server.use(bodyParser.urlencoded({extented:false}))

//2设置cookie，session

server.use(cookieParser('huangxing'))

var arr=[]
for(var i=0;i<10000;i++){
    
}
server.use(cookieSession({keys:arr,
    name:'session_id',
    Maxage:20*60*1000}))

//3设置跨域访问  
 server.all('*', function(req, res, next) {  
     res.header("Access-Control-Allow-Origin", "http://localhost:8888");  
     res.header("Access-Control-Allow-Credentials", "true"); 
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
     res.header("X-Powered-By",' 3.2.1')  
     res.header("Content-Type", "application/json;charset=utf-8");  
     next();  
}); 



//4模板
server.engine('html', consolidate.ejs);
server.set('views', 'template');
server.set('view engine', 'html');

//5获取后台数据
server.use('/admin',require('./routers/admin/admin'))
server.use('/web',require('./routers/web'))  //获取用户列表
server.use('/music',require('./routers/music'))  //获取背景音乐
server.use('/sport',require('./routers/sport'))  //获取运动数据
server.use('/banner',require('./routers/banner'))  //获取banner数据
server.use('/bgpic',require('./routers/bgpic'))  //获取背景图片
server.use('/study',require('./routers/study'))  //获取学习计划
server.use('/mydiary',require('./routers/mydiary'))  //获取日记数据
server.use('/mylogin',require('./routers/mylogin'))  //获取私密数据
server.use('/monthlyPlan',require('./routers/monthlyplan')) //获取每月运动计划
//6访问静态文件
const path=require('path')
server.use(static(path.join(__dirname, '/')))
