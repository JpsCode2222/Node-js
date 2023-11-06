var express = require('express');
var url = require('url');
var app = express();
app.get('/',function(req,res){
    var obj = {'name':'ABCD PQRS'};
    res.render('get.ejs',obj);
})

app.get('/addition',function(req,res){
    var urldata = url.parse(req.url,true).query;
    var sum = Number(urldata.num1)+Number(urldata.num2);
    res.send('Additon is : '+sum);
})

app.listen(1000);