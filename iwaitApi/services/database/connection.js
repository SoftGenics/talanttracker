const mysql = require('mysql');
var connectdb=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'iwait'
});
connectdb.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    
    
});
module.exports= connectdb;