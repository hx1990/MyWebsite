function toDouble(n){
   return n>9?''+n:'0'+n
}

export default { getTime:function(n){
    var date=new Date(n)
    if(n%10000==0){
        return date.getFullYear()+'-'+toDouble(date.getMonth()+1)+'-'+toDouble(date.getDate())
    }else{
        return date.getFullYear()+'-'+toDouble(date.getMonth()+1)+'-'+toDouble(date.getDate())+' '+toDouble(date.getHours())+':'+toDouble(date.getMinutes())+':'+toDouble(date.getSeconds())
    }
    
 }
}