const mysql = require("mysql2");
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password:'Manish@123'
});
module.exports=pool.promise();