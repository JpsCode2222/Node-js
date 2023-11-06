var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended:true}))
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejsdb1'
})

app.get('/',function(req,res){
    res.render('employee.ejs');
})

app.get('/add_employee',function(req,res){
    res.render('add_employee.ejs');
})

app.post('/save_employee',function(req,res){
     var d= req.body;
     var sql = `INSERT INTO employee (emp_name,emp_mobile,emp_email) VALUES ('${d.emp_name}','${d.emp_mobile}','${d.emp_email}')`;
     conn.query(sql,function(err,data){
        // res.send(sql);
        res.redirect('/');
     });
});

app.get('/employee_list',function(req,res){
    var sql = `SELECT * FROM employee`;
    conn.query(sql,function(err,data){
    res.render('employee_list.ejs',{'emp_list':data});
        
    })
})

app.listen(1000);

// `CREATE TABLE employee(emp_id INT PRIMARY KEY AUTO_INCREMENT,emp_name VARCHAR(100),emp_mobile VARCHAR(15),emp_email VARCHAR(200))`;