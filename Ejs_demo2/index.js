var express = require('express');
var app = express();
app.get('/',function(req,res){
    var lucky_no = [10,2,3,4,5,6,7];
    var obj = {'name':'Jayad','no':lucky_no};
    res.render('home.ejs',obj);
}).listen(1000);