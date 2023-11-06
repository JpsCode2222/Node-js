var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send(`
    <h1>Home Page</h1>
    <a href="/"><button style="background-color:blue;color:white">HOME</button></a>
    <a href="/about"><button>ABOUT</button></a>
    <a href="/contact"><button>CONTACT</button></a>
    `);
});
app.get('/about',function(req,res){
    res.send(`
    <h1>About Page</h1>
    <a href="/"><button style="background-color:blue;color:white">HOME</button></a>
    <a href="/about"><button>ABOUT</button></a>
    <a href="/contact"><button>CONTACT</button></a>
    `);
});
app.get('/contact',function(req,res){
    res.send(`
    <h1>Contact Page</h1>
    <a href="/"><button style="background-color:blue;color:white">HOME</button></a>
    <a href="/about"><button>ABOUT</button></a>
    <a href="/contact"><button>CONTACT</button></a>
    `);
});
app.listen(1000);