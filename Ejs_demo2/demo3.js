var express = require('express');
var bodyparser = require('body-parser');
var app = express();
// middleware
app.use(bodyparser.urlencoded({extended:true}));
app.get('/',function(req,res){
    res.render('demo_post.ejs');
})

app.post('/save_info',function(req,res){
    res.send(req.body);
})

app.listen(1000);