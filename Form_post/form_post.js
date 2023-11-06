var express = require('express');
var bodyparser = require('body-parser');
var app = express();

// Middleware
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.render('post.ejs');
})

app.post('/save_user',function(req,res){
    res.send(req.body);
})

app.listen(1000);