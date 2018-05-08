const mysql=require('mysql')
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'huang5201314',
    database:'yizhengyilong',
    port:3306,
})
module.exports.db=db