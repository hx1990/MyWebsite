const express=require('express')
const router=express.Router()

router.use('/',(req,res)=>{
   
            if(req.query.user!=='huangxing1990')
            res.send({OK:false,msg:'该账户非管理员账户，偷窥别人隐私不好哟^-^!'}).end()
       
})
module.exports = router;