var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.render('home.ejs');
}).listen(1000);