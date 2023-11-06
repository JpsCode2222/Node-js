var express = require('express');
var app = express();
// Data
var data = [
    {'name':'ABCD','mobile':'8839984789','email':'abcd@gmail.com'},
    {'name':'PQRS','mobile':'8839984789','email':'pqrs@gmail.com'},
    {'name':'JKLM','mobile':'8839984789','email':'jklm@gmail.com'},
    {'name':'WXYZ','mobile':'8839984789','email':'wxyz@gmail.com'},
];
// get request
app.get('/',function(req,res){
res.render('printtable.ejs',{data});
})
app.listen(1000);