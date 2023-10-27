var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    if(req.url == '/about'){
        res.write(`
        Hello Welcome In About Page
        <a href="/">Home</a>
        `)
    }
    else{
        res.write(`
        Hello Welcome in Home Page
        <a href="/about">About</a>
        `)
    }
    res.end();
}).listen(1000);