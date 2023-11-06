var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejsdb1'
})
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.render('form.ejs');
})

app.post('/save_student',function(req,res){
console.log(req.body);
var data = req.body;
var sql = `INSERT INTO student (student_name,student_mobile,student_email) VALUES ('${data.student_name}','${data.student_mobile}','${data.student_email}')`;
conn.query(sql,function(err,data){
    res.send(data);
})
})

app.listen(1000);