var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.render('home.ejs');
})

app.post('/save_student',function(req,res){
    res.send(req.body);
})
app.listen(1000)