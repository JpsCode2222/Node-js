// require express module
var express = require("express");
// Create App
var app = express();
// console.log(app);

// get request pass url and callback
app.get('/',function(req,res){
    res.send("HELLO WORLD");
});

app.get('/about',function(req,res){
    res.send("HELLO ABOUT");
});

// Add port using listen method
app.listen(1000);
