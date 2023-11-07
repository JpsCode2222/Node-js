var express = require('express');
var bodyparser = require('body-parser');
var url = require('url');
var mysql = require('mysql');
var app = express();
app.use(bodyparser.urlencoded({extended:true}))
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejsdb1'
})
app.get('/',function(req,res){
    var sql = `SELECT * FROM feedback`;
    conn.query(sql,function(err,data){
    res.render('feedback_form.ejs',{fd:data});
    })
})

app.post('/save_feedback',function(req,res){
    var d = req.body;
    var sql = `INSERT INTO feedback (visitor_name,customer_name,customer_mobile,customer_email,customer_message) VALUES ('${d.visitor_name}','${d.customer_name}','${d.customer_mobile}','${d.customer_email}','${d.customer_message}')`;
    conn.query(sql,function(err,data){
        res.redirect('/');
    })
})

app.get('/delete_feedback',function(req,res){
    var data = url.parse(req.url,true).query;
    var sql = `DELETE FROM feedback WHERE feedback_id = '${data.id}'`;
    conn.query(sql,function(err,data){
        res.redirect('/');
    })
})

app.listen(1000);

// CREATE TABLE feedback (feedback_id INT PRIMARY KEY AUTO_INCREMENT,visitor_name VARCHAR(100),customer_name VARCHAR(100),customer_mobile VARCHAR(10),customer_email VARCHAR(50),customer_message TEXT);