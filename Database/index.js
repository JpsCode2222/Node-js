// npm i express
// npm i ejs
// npm i mysql
var express = require('express');
var mysql = require('mysql');
var app = express();

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejsdb1"
});

app.get('/',function(req,res){
    conn.query("SELECT * FROM teacher",function(err,data){
        res.send(data);
    })
})

app.listen(1000);