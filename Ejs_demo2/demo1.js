// Demo 1
var express = require('express');
var app = express();
var data = {
    name:"Jayad Pathan"
};

app.get('/',function(req,res){
   res.render('first.ejs',data);
});
app.get('/about',function(req,res){
    res.render('second.ejs',data);
})
app.get('/contact',function(req,res){
    res.render('third.ejs',data);
})
app.listen(1000);

