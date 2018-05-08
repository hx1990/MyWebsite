const crypto=require('crypto')
module.exports={
    MD5_SUFFIX:'hksf黄星sfhdf%$$&jdfk',
    md5(str){
     const obj=crypto.createHash('md5')
     obj.update(str)
     return obj.digest('hex')
    }
}